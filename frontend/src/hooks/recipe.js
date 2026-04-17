import { useState, useEffect } from 'react';
import config from '../config';

export const getRandomRecipe = () => {
    const [randomRecipe, updateRandomRecipe] = useState(null);
    const [loadingRandomRecipe, updateLoadingRandomRecipe] = useState(false)
    const [errorRandomRecipe, updateErrorRandomRecipe] = useState(false)
    const randomRoute = config.api.randomRecipe

    useEffect(() => {
        if (!randomRecipe) {
            updateLoadingRandomRecipe(true)
            fetch(`${randomRoute}?t=${Date.now()}`, {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                },
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    const timer = setTimeout(() => {
                        updateLoadingRandomRecipe(false)
                        updateErrorRandomRecipe(errorData)
                    }, 3000);
                    return () => clearTimeout(timer);
                }
                return response.json();
            }).then((data) => {
                if (data) {
                    updateRandomRecipe(data)
                }
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }, [randomRecipe]);

    return { randomRecipe, loadingRandomRecipe, errorRandomRecipe };
}; 


export const getAllCategories = () => {
    const [categories, updateCategories] = useState(null);
    const [loadingCategories, updateLoadingCategories] = useState(false)
    const [errorCategories, updateErrorCategories] = useState(false)
    const route = config.api.categories

    useEffect(() => {
        if (!categories) {
            updateLoadingCategories(true)
            fetch(route, {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                },
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    const timer = setTimeout(() => {
                        updateLoadingCategories(false)
                        updateErrorCategories(errorData)
                    }, 3000);
                    return () => clearTimeout(timer);
                }
                return response.json();
            }).then((data) => {
                if (data) {
                    updateCategories(data)
                }
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }, [categories]);

    return { categories, loadingCategories, errorCategories };
}; 


export const getAllAreas = () => {
    const [areas, updateAreas] = useState(null);
    const [loadingAreas, updateLoadingAreas] = useState(false)
    const [errorAreas, updateErrorAreas] = useState(false)
    const route = config.api.areas

    useEffect(() => {
        if (!areas) {
            updateLoadingAreas(true)
            fetch(route, {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                },
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    const timer = setTimeout(() => {
                        updateLoadingAreas(false)
                        updateErrorAreas(errorData)
                    }, 3000);
                    return () => clearTimeout(timer);
                }
                return response.json();
            }).then((data) => {
                if (data) {
                    updateAreas(data)
                }
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }, [areas]);

    return { areas, loadingAreas, errorAreas };
}; 

export const getAllIngredients = () => {
    const [ingredients, updateIngredients] = useState(null);
    const [loadingIngredients, updateLoadingIngredients] = useState(false)
    const [errorIngredients, updateErrorIngredients] = useState(false)
    const route = config.api.ingredients

    useEffect(() => {
        if (!ingredients) {
            updateLoadingIngredients(true)
            fetch(route, {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                },
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    const timer = setTimeout(() => {
                        updateLoadingIngredients(false)
                        updateErrorIngredients(errorData)
                    }, 3000);
                    return () => clearTimeout(timer);
                }
                return response.json();
            }).then((data) => {
                if (data) {
                    updateIngredients(data)
                }
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }, [ingredients]);

    return { ingredients, loadingIngredients, errorIngredients };
}; 


export const getRecipeByName = ({recipeName}) => {
    const [data, updateData] = useState(null);
    const [loading, updateLoading] = useState(false)
    const [error, updateError] = useState(false)
    const recipeRoute = config.api.searchName

    useEffect(() => {
        if (!data && recipeName) {
            updateLoading(true)
            fetch(`${recipeRoute}${recipeName}`, {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                },
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    const timer = setTimeout(() => {
                        updateLoading(false)
                        updateError(errorData)
                    }, 3000);
                    return () => clearTimeout(timer);
                }
                return response.json();
            }).then((data) => {
                if (data) {
                    updateData(data)
                }
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }, [recipeName]);

    return { data,  loading, error };
}; 

export const getRecipeByCategory = ({recipeCategory}) => {
    const [data, updateData] = useState(null);
    const [loading, updateLoading] = useState(false)
    const [error, updateError] = useState(false)
    const route = config.api.filterCategory

    useEffect(() => {
        if (!data && recipeCategory) {
            updateLoading(true)
            fetch(`${route}${recipeCategory}`, {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                },
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    const timer = setTimeout(() => {
                        updateLoading(false)
                        updateError(errorData)
                    }, 3000);
                    return () => clearTimeout(timer);
                }
                return response.json();
            }).then((data) => {
                if (data) {
                    updateData(data)
                }
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }, [recipeCategory]);

    return { data,  loading, error };
}; 

export const getRecipeByArea = ({recipeArea}) => {
    const [data, updateData] = useState(null);
    const [loading, updateLoading] = useState(false)
    const [error, updateError] = useState(false)
    const route = config.api.filterArea

    useEffect(() => {
        if (!data && recipeArea) {
            updateLoading(true)
            fetch(`${route}${recipeArea}`, {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                },
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    updateLoading(false)
                    updateError(errorData)
                }
                return response.json();
            }).then((data) => {
                if (data) {
                    updateData(data)
                    updateLoading(false)
                }
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }, [recipeArea]);

    return { data,  loading, error };
}; 

export const getRecipeByIngredient = ({recipeIngredient}) => {
    const [data, updateData] = useState(null);
    const [loading, updateLoading] = useState(false)
    const [error, updateError] = useState(false)
    const route = config.api.filterIngredient

    useEffect(() => {
        if (!data && recipeIngredient) {
            updateLoading(true)
            fetch(`${route}${recipeIngredient}`, {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                },
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    updateLoading(false)
                    updateError(errorData)
                }
                return response.json();
            }).then((data) => {
                if (data) {
                    updateData(data)
                    updateLoading(false)
                }
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }, [recipeIngredient]);

    return { data,  loading, error };
}; 

export const getRecipeByIdMeal = ({idMeal}) => {
    const [data, updateData] = useState(null);
    const [loading, updateLoading] = useState(false)
    const [error, updateError] = useState(false)
    const route = config.api.recipeByIdMeal

    useEffect(() => {
        if (!data && idMeal) {
            updateLoading(true)
            fetch(`${route}${idMeal}`, {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                },
            }).then(async (response) => {
                if (!response.ok) {
                    const errorData = await response.json();
                    updateLoading(false)
                    updateError(errorData)
                }
                return response.json();
            }).then((data) => {
                if (data) {
                    updateData(data)
                    updateLoading(false)
                }
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }, [idMeal]);

    return { data,  loading, error };
}; 