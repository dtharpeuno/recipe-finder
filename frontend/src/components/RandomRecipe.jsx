import { Box, Typography, Chip } from "@mui/material";
import theme from "../theme";
import {
    getRandomRecipe
} from "../hooks/recipe";

const RandomRecipe = () => {
    const { randomRecipe } = getRandomRecipe()

    const ingredients = [
        randomRecipe?.meals?.[0]?.strIngredient1,
        randomRecipe?.meals?.[0]?.strIngredient2,
        randomRecipe?.meals?.[0]?.strIngredient3,
        randomRecipe?.meals?.[0]?.strIngredient4,
        randomRecipe?.meals?.[0]?.strIngredient5,
    ]
    // console.log(randomRecipe)
    return (
        <>
            <Box display='flex'
                flexDirection='column'
                borderBottom='1px dotted #333'>
                <Typography
                    variant='h4'
                    color={theme.palette.secondary.main}
                    marginTop={1}
                    paddingX={2}
                >
                    Try A Random Recipe!
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        p: 2,
                        color: theme.palette.primary.main,
                        border: `3px solid ${theme.palette.secondary.main}`,
                        marginX: 2,
                        marginY: 2,
                        cursor: "pointer",
                        transition: "0.2s",
                        "&:hover": {
                            transform: "scale(1.02)",
                            boxShadow: 4,
                        },
                    }}
                >
                    <Box
                        component="img"
                        src={randomRecipe?.meals?.[0]?.strMealThumb}
                        alt={randomRecipe?.meals?.[0]?.strMeal}
                        sx={{
                            width: 200,
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 2,
                            flexShrink: 0,
                        }}
                    />

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        flex: 1,
                    }}
                    >
                        <Typography variant="h4" paddingBottom={1} fontWeight='bold'>
                            {randomRecipe?.meals?.[0]?.strMeal}
                        </Typography>
                        <Typography variant="p" paddingBottom={1}>
                            {randomRecipe?.meals?.[0]?.strCategory} • {randomRecipe?.meals?.[0]?.strArea}
                        </Typography>
                        <Typography variant="p" paddingBottom={1}>
                            Main Ingredients
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                            {ingredients.map((item) => (
                                <Chip key={item} label={item} size="small" />
                            ))}
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                color: "text.secondary",
                                mt: 1,
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}
                        >
                            {randomRecipe?.meals?.[0]?.strInstructions}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};


export default RandomRecipe;
