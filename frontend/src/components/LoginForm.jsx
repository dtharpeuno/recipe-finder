import { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import theme from "../theme";
import {
    useUserStorage
} from "../hooks/main";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null);
    const [success, setSuccess] = useState(false);
    const [disableButton, updateDisableButton] = useState(true)
    const [userFound, updateUserFound] = useState(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegEx = /^[A-Za-z]+$/
    const { user, saveUser, clearUser } = useUserStorage()
    const navigate = useNavigate()

    console.log('user =>' + JSON.stringify(user))

    const handleSubmit = (event) => {
        event.preventDefault();
        saveUser(firstName, lastName,  email);
        setSuccess(true);
    };

    const handleRedirect = (event) => {
        event.preventDefault();
        navigate('/recipes');
    }

    const handleReset = (event) => {
        event.preventDefault();
        clearUser()
        updateUserFound(false)
    }

    useEffect(() => {
        if (user !== null) {
            updateUserFound(true)
        }
    }, []);


    useEffect(() => {
        if (email && emailRegex.test(email) && firstName && nameRegEx.test(firstName) && lastName && nameRegEx.test(lastName)) {
            updateDisableButton(false)
        }
    }, [email, emailRegex, name]);

    useEffect(() => {
        if (user !== null && success) {
            const timer = setTimeout(() => {
                navigate('/recipes');
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                helperText={!nameRegEx.test(firstName) ? 'Please enter your first name' : ''}
                sx={{
                    marginBottom: 2
                }}
            />
              <TextField
                label="Last Name"
                type="name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                helperText={!nameRegEx.test(lastName) ? 'Please enter your last name' : ''}
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

    const userFoundArea = user && (
        <Box
            sx={{
                textAlign: 'center',
                p: 1,
                border: '1px solid #ddd',
                borderRadius: 2,
                mb: 2
            }}
        >
            <Typography
                variant="body1"
                color="success"
                paddingX={2}
                marginBottom={2}
            >
                Welcome Back!
            </Typography>
            <Box display="flex" flexDirection="column">
                <Typography
                    variant="body3"
                    color={theme.palette.primary.main}
                >
                    We found your saved info for:
                </Typography>
                <Typography
                    variant="body3"
                    color={theme.palette.primary.main}
                >
                    <strong>{user.firstName} {user.lastName}</strong> / <strong>{user.email}</strong>
                </Typography>
            </Box>

            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                gap={1}
                paddingY={1}>
                <Typography
                    variant="body3"
                    color={theme.palette.primary.main}
                    marginY={1}
                    paddingX={2}
                    sx={{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                    onClick={handleRedirect}
                >
                    Continue to recipes!
                </Typography>
                <Typography
                    variant="body3"
                    color={theme.palette.primary.main}
                    marginY={1}
                    paddingX={2}
                    sx={{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                    onClick={handleReset}
                >
                    Start Over
                </Typography>
            </Box>
        </Box>
    )

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                position='relative'
            >
                {!success && user == null && formArea}
                {success && user !== null && successArea}
                {userFound && userFoundArea}
            </Box>
        </>
    );
};

export default LoginForm;
