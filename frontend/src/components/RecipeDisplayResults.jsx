import {
    Box
} from "@mui/material";
import RecipeCard from './RecipeCard'

const RecipeDisplayResults = ({ results }) => {

    return (
        <Box
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 2, 
                justifyContent: 'center',
            }}
        >
            {results?.meals.map((meal) => (
                <RecipeCard
                    key={meal.idMeal}
                    title={meal.strMeal}
                    image={meal.strMealThumb}
                    link={`/recipes/v/${meal.idMeal}`}
                />
            ))}
        </Box>
    );
}

export default RecipeDisplayResults