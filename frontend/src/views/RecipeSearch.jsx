import { useEffect } from 'react';
import { Typography} from "@mui/material";
import theme from "../theme";
import PageLayout from '../components/PageLayout';
import {
  useUserStorage
} from "../hooks/main";
import { useNavigate } from "react-router-dom";
import RandomRecipe from '../components/RandomRecipe'
import RecipeSearchBar from '../components/RecipeSearchBar';
import UserHeader from '../components/UserHeader';

const RecipeSearch = () => {
  const { user } = useUserStorage()
  const navigate = useNavigate()

  useEffect(() => {
    if (user == null) {
      navigate('/');
    }
  }, []);

  return (
    <PageLayout title="Recipe Search">
      <UserHeader />
      <RandomRecipe />
      <RecipeSearchBar />
    </PageLayout>
  )
};


export default RecipeSearch;
