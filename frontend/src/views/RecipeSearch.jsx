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

const RecipeSearch = () => {
  const { user } = useUserStorage()
  const navigate = useNavigate()

  useEffect(() => {
    if (user == null) {
      navigate('/');
    }
  }, []);

  const userData = (
    <Typography
      variant='body3'
      color='success'
      marginTop={1}
      paddingX={2}
      marginBottom={2}
    >
     Welcome,  {user.firstName} {user.lastName} / {user.emailAddress}
    </Typography>
  )

  return (
    <PageLayout title="Recipe Search">
      {userData}
      <RandomRecipe />
      <RecipeSearchBar />
    </PageLayout>
  )
};


export default RecipeSearch;
