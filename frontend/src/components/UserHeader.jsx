import {
    Box,
    Typography,
    Link
} from "@mui/material";
import {
    useUserStorage
} from "../hooks/main";
import { useNavigate } from "react-router-dom";

const UserHeader = () => {
    const { user, clearUser } = useUserStorage()
    const navigate = useNavigate()

    const handleClick = (event) => {
        event.preventDefault()
        clearUser()
        navigate('/');
    }

    return (
        <Box display="flex"
            flexDirection="row"
            marginBottom={2}
        >
            <Typography
                variant='body3'
                color='success'
                marginY={1}
                paddingLeft={2}
            >
                Welcome,  {user.firstName} {user.lastName} / {user.emailAddress}
            </Typography>
         

            <Typography
                variant='body3'
                color='success'
                marginY={1}
                paddingLeft={2}
            >
                   <Link
                variant='body3'
                color='success'
                href="#"
                onClick={handleClick}
                textDecoration="none"
            >
                Logout
            </Link>
            </Typography>
        </Box>

    );
}

export default UserHeader