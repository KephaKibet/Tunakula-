import React from "react";
import { useGlobalContext } from '../context';
import {BsHandThumbsUp} from 'react-icons/bs'

const Meals = () => {

  const { loading, meals, selectMeal, addToFavorites} = useGlobalContext();
  
  if (loading) {
    return <section className="section">
      <h4>Loading</h4>

    </section>
  }
 

  if (meals.length < 1) {
    return <section className="section">
      <h4>No Meals matched your search term, please check and search again...</h4>

    </section>
  }

  return <section className="section-center">

    {meals.map((singleMeal) => {

      const { idMeal, strMeal: tittle, strMealThumb: image } = singleMeal
      
      return <article key={idMeal} className="single-meal" >
        <img src={image} className="img" alt="mealImage"  onClick={() => selectMeal(idMeal)} />

          <footer>
          <h5>{tittle}</h5>
          <button className="like-btn" onClick={()=>addToFavorites(idMeal)}>  <BsHandThumbsUp/> </button>
          </footer>

      </article>
      
   })}
  
  </section>
  }
  


export default Meals;