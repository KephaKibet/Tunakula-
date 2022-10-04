import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";


const Search = () => {
  
  const [text, setText] = useState('')

  const {setSearchTerm, fetchRandomMeals} =useGlobalContext()
  
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text) {
      setSearchTerm(text)
      setText('')
    }
  }

  const handleRandomMeal () => {
    setSearchTerm(text)
    setText('')
    fetchRandomMeals()
  
}

  return <header className="search-container">
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='search meal here' value={text} onChange={handleChange} className="form-input" />
      <button type="submit" className="btn">Search</button>
      <button type="button" className="btn btn-hipster" onClick={handleRandomMeals}> Surprise Me!</button>
    </form>
  </header>
  
}


export default Search;