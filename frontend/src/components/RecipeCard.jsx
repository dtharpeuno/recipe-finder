import { Card, CardMedia, CardContent, Typography, Link, Box } from "@mui/material";
import theme from "../theme";

const RecipeCard = ({title, image, link, }) => {
  return (
    <Card
      sx={{
        width: 160,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 1,
        border: `2px solid ${theme.palette.secondary.main}`
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
      <CardContent sx={{ backgroundColor: "#fff" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Link
          href="#"
          underline="none"
          sx={{
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "scale(1.05)",
              textDecoration: "underline",
            },
          }}
        >
          See Recipe →
        </Link>
      </CardContent>
    </Card>
  );
}

export default RecipeCard