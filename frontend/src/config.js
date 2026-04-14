const baseRecipeApi = 'https://www.themealdb.com/api/json/v1/1/'
const CORSProxy = 'https://corsproxy.io/?'

const config = {
    api: {
        randomRecipe: `${CORSProxy}${baseRecipeApi}random.php`,
        searchByName: `${baseRecipeApi}search.php?s=`,
    }
};

export default config;