const baseRecipeApi = 'https://www.themealdb.com/api/json/v1/1/'
const CORSProxy = 'https://corsproxy.io/?'

const config = {
    api: {
        randomRecipe: `${CORSProxy}${baseRecipeApi}random.php`,
        searchByName: `${CORSProxy}${baseRecipeApi}search.php?s=`,
        categories: `${CORSProxy}${baseRecipeApi}list.php?c=list`,
        areas: `${CORSProxy}${baseRecipeApi}list.php?a=list`,
        ingredients: `${CORSProxy}${baseRecipeApi}list.php?i=list`,
        searchName: `${CORSProxy}${baseRecipeApi}search.php?s=`,
        filterIngredient: `${CORSProxy}${baseRecipeApi}filter.php?i=`,
        filterCategory: `${CORSProxy}${baseRecipeApi}filter.php?c=`,
        filterArea: `${CORSProxy}${baseRecipeApi}filter.php?a=`
    }
};

export default config;