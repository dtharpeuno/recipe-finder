import {
    Typography,
    Link
} from "@mui/material";

const BreadCrumb = ({ title, link }) => {

    return (
        <Typography
            variant='body3'
            color='success'
            marginBottom={2}
            paddingX={2}
        >
            <Link
                href={link}
                underline="none"
                color="success"
                variant="body3"
                textAlign="center"
                sx={{
                    mt: "auto"
                }}
            >
                ← Back to {title}
            </Link>
        </Typography>
    );
}

export default BreadCrumb