import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  Autocomplete,
  Stack
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  getAllCategories,
  getAllAreas,
  getAllIngredients,
  getRecipeByName,
  getRecipeByCategory,
  getRecipeByArea,
  getRecipeByIngredient
} from '../hooks/recipe';
import RecipeDisplayResults from "./RecipeDisplayResults";

const RecipeSearchBar = () => {
  const [recipeName, updateRecipeByName] = useState(null)
  const [recipeIngredient, updateRecipeIngredient] = useState(null)
  const [recipeCategory, updateRecipeCategory] = useState(null)
  const [recipeArea, updateRecipeArea] = useState(null)
  const [mode, setMode] = useState("name");
  const [query, setQuery] = useState("");
  const [disableButton, updateDisableButton] = useState(true)
  const [recipeResults, updateRecipeResults] = useState(null)

  const { categories } = getAllCategories();
  const { areas } = getAllAreas();
  const { ingredients } = getAllIngredients();

  const recipeByName = getRecipeByName({ recipeName });
  const recipeByCat = getRecipeByCategory({ recipeCategory });
  const recipeByArea = getRecipeByArea({ recipeArea });
  const recipeByIngredient = getRecipeByIngredient({ recipeIngredient });

  const categoryNames = (categories?.meals || []).map(m => m.strCategory);
  const areaNames = (areas?.meals || []).map(m => m.strArea);
  const ingredientNames = (ingredients?.meals || [])
    .filter(m => {
      const name = m.strIngredient?.trim();
      return name && !name.includes(' ');
    })
    .map(m => m.strIngredient.trim());

  const handleSubmit = (event) => {
    event.preventDefault()
    if (query !== "") {
      if (mode === "name") {
        updateRecipeByName(query)
      } else if (mode === "ingredient") {
        updateRecipeIngredient(query)
      } else if (mode === "category") {
        updateRecipeCategory(query)
      } else if (mode === "area") {
        updateRecipeArea(query)
      }
    }
  }

  useEffect(() => {
    if (query == "") {
      updateDisableButton(true)
    } else {
      updateDisableButton(false)
    }
  }, [query]);

  useEffect(() => {
    if (recipeByName.data || recipeByArea.data || recipeByCat.data || recipeByIngredient.data) {
      const results = recipeByName.data || recipeByArea.data || recipeByCat.data || recipeByIngredient.data;

      updateRecipeResults(results)
      updateRecipeByName(null)
      updateRecipeIngredient(null)
      updateRecipeCategory(null)
      updateRecipeArea(null)
    }
  }, [recipeByName]);

  const handleModelChange = (newValue) => {
    setQuery("")
    setMode(newValue)
  }

  return (
    <Box
      sx={{ p: 2 }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Tabs
        value={mode}
        onChange={(_, newValue) => handleModelChange(newValue)}
        sx={{ mb: 2 }}
      >
        <Tab label="Name" value="name" />
        <Tab label="Ingredient" value="ingredient" />
        <Tab label="Category" value="category" />
        <Tab label="Area" value="area" />
      </Tabs>

      <Stack direction="row" spacing={2} alignItems="center">
        {(mode === "name") && (
          <TextField
            fullWidth
            label={`Search by ${mode}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}

        {mode === "ingredient" && (
          <Autocomplete
            options={ingredientNames}
            sx={{ flex: 1 }}
            onChange={(e, value) => setQuery(value || "")}
            renderInput={(params) => (
              <TextField {...params} label="Choose an Ingredient" />
            )}
          />
        )}


        {mode === "category" && (
          <Autocomplete
            options={categoryNames}
            sx={{ flex: 1 }}
            onChange={(e, value) => setQuery(value || "")}
            renderInput={(params) => (
              <TextField {...params} label="Choose category" />
            )}
          />
        )}

        {mode === "area" && (
          <Autocomplete
            options={areaNames}
            sx={{ flex: 1 }}
            onChange={(e, value) => setQuery(value || "")}
            renderInput={(params) => (
              <TextField {...params} label="Choose area" />
            )}
          />
        )}

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={disableButton}
          size='small'
          sx={{
            paddingY: 1,
            paddingX: 4,
            borderRadius: 6,
            marginTop: 2,
            textTransform: 'capitalize'
          }}
        >
          Search
        </Button>
      </Stack>
      {recipeResults && <RecipeDisplayResults results={recipeResults}/>}
    </Box>
  );
}

export default RecipeSearchBar