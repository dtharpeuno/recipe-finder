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