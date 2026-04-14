import {Box, Typography, keyframes} from '@mui/material';
import theme from "../theme";

function ProgressIndicator({message}) {

    const pulse = keyframes`
        0%, 40%, 100% {
            width: 8px;
            height: 8px;
            opacity: 0.6;
        }
        20% {
            width: 12px;
            height: 12px;
            opacity: 1;
        }
    `;

    const showMessage = message && (
        <Box marginTop={2}>
            <Typography
                variant='p'
                color={theme.palette.secondary.main}
                fontSize={theme.typography.body4}
                marginTop={2}
                marginY={1}
            >
                {message}
            </Typography>
        </Box>
    )


    const dotContainer = (
        <Box sx={{display: "flex", alignItems: "center"}}>
            {[0, 1, 2, 3].map((i) => (
                <Box
                    key={i}
                    sx={{
                        width: 8,
                        height: 8,
                        mx: 0.5,
                        borderRadius: "50%",
                        backgroundColor: "primary.main",
                        animation: `${pulse} 1.6s infinite ease-in-out`,
                        animationDelay: `${i * 0.25}s`,
                    }}
                />
            ))}
        </Box>
    )

    return (
        <Box display='Flex'
        justifyContent='center'
        textAlign='center'
        flexDirection='column'>
            {dotContainer}
            {showMessage}
        </Box>
    );
}


export default ProgressIndicator;
