import { useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import {
    useUserStorage
} from "../hooks/main";
import { useNavigate, useParams } from "react-router-dom";
import UserHeader from '../components/UserHeader';
import BreadCrumb from '../components/BreadCrumb';
import RecipeOutput from '../components/RecipeShowcase';

const RecipeDisplay = () => {
  const { user } = useUserStorage()
  const navigate = useNavigate()
  const {idMeal} = useParams()

  useEffect(() => {
    if (user == null || idMeal == null || !idMeal) {
      navigate('/');
    }
  }, []);

  return (
    <PageLayout title="Recipe Display">
      <UserHeader />
      <BreadCrumb title="Recipe Search" link="/recipes/"/>
      <RecipeOutput idMeal={idMeal} />
    </PageLayout>
  )
};


export default RecipeDisplay;
