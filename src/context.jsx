import React, {useState, useContext, useEffect } from "react";
import axios from 'axios'

const AppContext = React.createContext()

const allMeals ='https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiat';
const randomMeals ='https://www.themealdb.com/api/json/v1/1/random.php';
// http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no

// https://catfact.ninja/fact
// https://www.themealdb.com/api/json/v1/1/random.php

const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([])
  
  const fetchMeals = async (url) => {
    
    try {
      const { data } = await axios(url)
      console.log(data)
      setMeals(data.meals)
   
   
    }
    catch (e) {
      console.log(e.response)
    }
    
  }


  useEffect(() => {
    fetchMeals(allMeals)
  }, [])


  return <AppContext.Provider value = {{meals}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}