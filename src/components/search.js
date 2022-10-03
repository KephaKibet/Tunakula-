import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";


const Search = () => {
  
  const [text, seTtext] = useState('')
  
  const handleChange = (e) => {
    seTtext(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return <header className="search-container">
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='search meal here' value={text} onChange={handleChange} className="form-input" />
      <button type="submit" className="btn">Search</button>
      <button type="button" className="btn btn-hipster"> Surprise Me!</button>
    </form>
  </header>
  
}


export default Search;