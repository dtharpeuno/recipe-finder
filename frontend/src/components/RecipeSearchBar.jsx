import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  Autocomplete,
  Stack
} from "@mui/material";
import { useState } from "react";

const RecipeSearchBar = () =>  {
  const [mode, setMode] = useState("name");
  const [query, setQuery] = useState("");

  const categories = ["Chicken", "Seafood", "Vegetarian"];
  const areas = ["Chinese", "American", "Italian"];

  return (
    <Box sx={{ p: 2 }}>
      <Tabs
        value={mode}
        onChange={(e, newValue) => setMode(newValue)}
        sx={{ mb: 2 }}
      >
        <Tab label="Name" value="name" />
        <Tab label="Ingredient" value="ingredient" />
        <Tab label="Category" value="category" />
        <Tab label="Area" value="area" />
        <Tab label="Random" value="random" />
      </Tabs>

      <Stack direction="row" spacing={2} alignItems="center">
        {(mode === "name" || mode === "ingredient") && (
          <TextField
            fullWidth
            label={`Search by ${mode}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}

        {mode === "category" && (
          <Autocomplete
            options={categories}
            sx={{ flex: 1 }}
            onChange={(e, value) => setQuery(value || "")}
            renderInput={(params) => (
              <TextField {...params} label="Choose category" />
            )}
          />
        )}

        {mode === "area" && (
          <Autocomplete
            options={areas}
            sx={{ flex: 1 }}
            onChange={(e, value) => setQuery(value || "")}
            renderInput={(params) => (
              <TextField {...params} label="Choose area" />
            )}
          />
        )}

        <Button variant="contained">
          {mode === "random" ? "Get Random" : "Search"}
        </Button>
      </Stack>
    </Box>
  );
}

export default RecipeSearchBar