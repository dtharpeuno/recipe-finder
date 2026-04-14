import { useEffect, useState } from 'react';
import { Box, Typography, Link } from "@mui/material";
import theme from "../theme";
import PageLayout from '../components/PageLayout';
import {
    useUserStorage
} from "../hooks/main";
import { useNavigate } from "react-router-dom";

const RecipeSearch = () => {
  const { user } = useUserStorage()
  const navigate = useNavigate()

  useEffect(() => {
    if (user == null) {
      navigate('/');
    }
  }, []);


  return (
    <PageLayout title="Users">
      <Typography>This is the users page.</Typography>
    </PageLayout>
  )
};


export default RecipeSearch;
