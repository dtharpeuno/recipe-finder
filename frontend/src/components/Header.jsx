import { Box, Typography } from "@mui/material";
import theme from "../theme";

const Header = () => {
    return (
        <Box
            width="100%"
            textAlign="left"
            backgroundColor={theme.palette.secondary.main}
            color='#fff'
            paddingX={3}
            paddingY={.5}
            position='fixed'
            top={0}
            zIndex={10}
            marginLeft={-1}
        >
            <Box display='flex'
                alignItems='center'>
                <Typography
                    variant="h1"
                    color="#fff"
                    marginY={1}
                >
                    Recipe Finder |
                </Typography>
                <Typography
                    variant="h4"
                    color="#fff"
                    marginLeft={2}
                    marginTop={-1}
                >
                    Your kitchen companion!
                </Typography>
            </Box>

        </Box>
    );
};

export default Header;
