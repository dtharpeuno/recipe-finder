
import { Box, Typography } from "@mui/material";
import theme from "../theme";
import login_bg from "../assets/login_bg.jpg"
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    const formArea = (
        <Box
            display="flex"
            flexDirection="column"
        >
            <Typography
                variant="body2"
                color="success"
                paddingX={2}
            >
                Welcome to your kitchen companion!
            </Typography>

            <Typography
                variant="body3"
                color={theme.palette.primary.main}
                marginY={1}
                paddingX={2}
            >
                Discover delicious recipes tailored to your taste. Search by ingredients, explore new dishes, and find inspiration for your next meal—all in one place.
            </Typography>

            <Box>
                <LoginForm />
            </Box>
        </Box>
    )


    return (
        <>
            <Box
                sx={{
                    maxWidth: 350,
                    backgroundColor: '#fff',
                    margin: '4rem auto',
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.secondary.secondary}`,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 1,
                    overflow: 'hidden'
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: `1px solid ${theme.palette.primary.secondary}`
                    }}
                >
                    <Box
                        component="img"
                        src={login_bg}
                        alt="APS Logo"
                        sx={{
                            width: '100%',
                            maxWidth: 350,     
                            height: 'auto',
                            display: 'block',
                            mx: 'auto'
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        paddingX: 2
                    }}
                >
                    <Typography
                        variant="h1"
                        color="#6b6b6b"
                        marginY={1}
                        borderBottom="1px dotted #6b6b6b"
                        textAlign="center"
                        width="100%"
                    >
                        Recipe Finder
                    </Typography>

                    {formArea}
                </Box>
            </Box>
        </>
    );
};


export default LoginPage;
