import {
    Box,
    Card,
    Chip,
    Divider,
    Link,
    Stack,
    Typography,
} from '@mui/material';
import { getRecipeByIdMeal } from '../hooks/recipe';

function getIngredients(recipeObj) {
    const items = [];

    if (recipeObj) {
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipeObj[`strIngredient${i}`]?.trim();
            const measure = recipeObj[`strMeasure${i}`]?.trim();

            if (ingredient) {
                items.push({
                    ingredient,
                    measure: measure || null,
                });
            }
        }

    }

    return items;
}

const RecipeShowcase = ({ idMeal }) => {
    const recipeOutput = getRecipeByIdMeal({ idMeal })
    const recipe = recipeOutput?.data?.meals[0] || {}
    const ingredients = getIngredients(recipe);

    return recipe && (
        <Box
            sx={{
                p: 4,
                bgcolor: '#f7f7f7',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Card
                elevation={0}
                sx={{
                    width: '100%',
                    maxWidth: 900,
                    p: 4,
                    borderRadius: 3,
                    border: '1px solid #e0e0e0',
                }}
            >
                <Stack spacing={3}>
                    <Box display="flex"
                        flexDirection="row">

                        <Box
                            component="img"
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                            sx={{
                                width: 250,
                                height: 250,
                                objectFit: "cover",
                                borderRadius: 2,
                                flexShrink: 0,
                                marginRight: 2
                            }}
                        />

                        <Box>
                            <Typography variant="h4" fontWeight={700}>
                                {recipe.strMeal}
                            </Typography>

                            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                                {recipe.strCategory} • {recipe.strArea}
                            </Typography>
                        </Box>

                    </Box>


                    <Divider />

                    <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Ingredients
                        </Typography>

                        <Stack direction="row" flexWrap="wrap" gap={1}>
                            {ingredients.map((item) => (
                                <Chip
                                    key={item.ingredient}
                                    label={
                                        item.measure
                                            ? `${item.ingredient} — ${item.measure}`
                                            : item.ingredient
                                    }
                                    variant="outlined"
                                />
                            ))}
                        </Stack>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Instructions
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}
                        >
                            {recipe.strInstructions}
                        </Typography>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Details
                        </Typography>

                        <Stack spacing={1}>
                            <Typography>
                                <strong>Meal ID:</strong> {recipe.idMeal}
                            </Typography>

                            <Typography>
                                <strong>Alternate Name:</strong>{' '}
                                {recipe.strMealAlternate || 'N/A'}
                            </Typography>

                            <Typography>
                                <strong>Tags:</strong> {recipe.strTags || 'N/A'}
                            </Typography>

                            <Typography>
                                <strong>Date Modified:</strong> {recipe.dateModified || 'N/A'}
                            </Typography>
                        </Stack>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            External Links
                        </Typography>

                        <Stack spacing={1}>
                            {recipe.strSource && (
                                <Link href={recipe.strSource} target="_blank" rel="noreferrer">
                                    Source Recipe
                                </Link>
                            )}

                            {recipe.strYoutube && (
                                <Link href={recipe.strYoutube} target="_blank" rel="noreferrer">
                                    YouTube Video
                                </Link>
                            )}
                        </Stack>
                    </Box>
                </Stack>
            </Card>
        </Box>
    );
}

export default RecipeShowcase