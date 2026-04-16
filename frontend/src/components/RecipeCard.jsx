import { Card, CardMedia, CardContent, Typography, Link, Box } from "@mui/material";
import theme from "../theme";

const RecipeCard = ({ title, image, link, }) => {
    return (
        <Card
            sx={{
                width: 160,
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 1,
                border: `2px solid ${theme.palette.secondary.main}`,
                transition: "transform 0.2s ease",
                "&:hover": {
                    transform: "scale(1.05)",
                },
            }}
        >
            <Box
                sx={{
                    overflow: "hidden",
                }}
            >
                <CardMedia
                    component="img"
                    height="180"
                    image={image}
                    alt="Recipe"
                    sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}
                />
            </Box>
            <CardContent
                sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    height: 120, // or whatever height fits your design
                }}
            >
                <Typography
                    variant="body1"
                    color="primary"
                    sx={{
                        mb: 1,
                        minHeight: 48,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {title}
                </Typography>

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
                    Go to Recipe →
                </Link>
            </CardContent>
        </Card>
    );
}

export default RecipeCard