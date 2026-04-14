import { use, useEffect, useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import theme from "../theme";
import config from "../config";
import {
    useUserStorage
} from "../hooks/main";


const LoginForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [success, setSuccess] = useState(false);
    const [disableButton, updateDisableButton] = useState(true)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegEx = /^[A-Za-z]+$/
    const {user, saveUser, clearUser } = useUserStorage()
    console.log('user =>' + JSON.stringify(user))

    const handleSubmit = (event) => {
        event.preventDefault();
        saveUser(name, email);
        setSuccess(true);
    };
    
    useEffect(() => {
        if (email && emailRegex.test(email) && name && nameRegEx.test(name)) {
            updateDisableButton(false)
        }
    }, [email, emailRegex, name]);
    
    useEffect(() => {
        if(user !== null) {
            console.log('Hello')
        }
    }, []);
    

    useEffect(() => {
        if (user !== null && success) {
            const timer = setTimeout(() => {
                window.location.reload()
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [user, success]);

    const formArea = (
        <Box padding={2}>
            <TextField
                label="First Name"
                type="name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                helperText={!nameRegEx.test(name) ? 'Please enter your first name' : ''}
                sx={{
                    marginBottom: 2
                }}
            />
            <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                helperText={!emailRegex.test(email) && email !== null ? 'Please enter a valid email address' : ''}
            />
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={disableButton}
                size='small'
                sx={{
                    paddingY: 1,
                    paddingX: 4,
                    borderRadius: 6,
                    marginTop: 2,
                    textTransform: 'capitalize'
                }}
            >
                Lets Begin
            </Button>
        </Box>
    )

    const successArea = (
        <Box paddingY={2}
        minHeight={50}
         textAlign='center'>
                <Typography
                variant='p'
                color='success'
                fontSize={theme.typography.body4}
                marginTop={2}
            >
                Success! You are now being redirected!
            </Typography>
        </Box>
    )

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                position='relative'
            >
                {!success && formArea}
                {success && successArea}
            </Box>
        </>
    );
};

export default LoginForm;
