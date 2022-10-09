 import React, {useState, useContext, useEffect } from "react";
import axios from 'axios'

const AppContext = React.createContext()

const allMeals ='https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMeals ='https://www.themealdb.com/api/json/v1/1/random.php';
// http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no

// https://catfact.ninja/fact
// https://www.themealdb.com/api/json/v1/1/random.php

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem('favorites');
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem('favorites'))
  }
  else {
    favorites = []
  }
  return favorites
}


const AppProvider = ({ children }) => {

  const [loading, setLoading] =useState(false)
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(false);
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage())
  
  const fetchMeals = async (url) => {
    setLoading(true)
    
    try {
      const { data } = await axios(url)

      if(data.meals){
        setMeals(data.meals)
      }
      else {
        setMeals([])
      }
   
   
    }
    catch (e) {
      console.log(e.response)
    }

    setLoading(false)
    
  }

  const fetchRandomMeals = () => {
    
    fetchMeals(randomMeals)
  }

  const selectMeal = (idMeal, favoriteMeal) => {
  
    let meal;
    if(favoriteMeal)
    meal = favorites.find((meal) => meal.idMeal === idMeal)
  
    setSelectedMeal(meal);
    setShowModal(true);
  }

  const closeModal = () => {
    
    setShowModal(false)
  }

  const addToFavorites = (idMeal) => {
    console.log(idMeal)
    
    const meal = meals.find((meal) => meal.idMeal === idMeal)
    const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
    
    if (alreadyFavorite) return
    
    const updatedFavorites = [...favorites, meal]
    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  }

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  }

 
  useEffect(() => {
    fetchMeals(allMeals)
  }, [])


  useEffect(() => {
    if(!searchTerm) return
    fetchMeals(`${allMeals}${searchTerm}`)
  }, [searchTerm])


  return <AppContext.Provider value = {{loading,meals, setSearchTerm, fetchRandomMeals, showModal, selectedMeal, selectMeal ,closeModal ,addToFavorites, removeFromFavorites, favorites}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

