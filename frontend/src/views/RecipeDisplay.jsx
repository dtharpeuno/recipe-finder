import { useEffect, useState } from 'react';
import { Box, Typography, Link } from "@mui/material";
import theme from "../theme";
import PageLayout from '../components/PageLayout';
import {
    useUserStorage
} from "../hooks/main";
import { useNavigate } from "react-router-dom";

const RecipeDisplay = () => {
  const { user } = useUserStorage()
  const navigate = useNavigate()

  useEffect(() => {
    if (user == null) {
      navigate('/');
    }
  }, []);


  return (
    <PageLayout title="Recipe Display">
      
    </PageLayout>
  )
};


export default RecipeDisplay;
