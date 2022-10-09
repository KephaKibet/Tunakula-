import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {

  const { selectedMeal, closeModal } = useGlobalContext();
  
  const {strMealThumb:image, strMeal:tittle, strInstructions:text,strSource:source} = selectedMeal
  
  return <aside className="modal-overlay">
    <div className="modal-container">
      <img src={image} alt={tittle} classsName="img modal-img" />
      <div className="modal-content">
        <h4>{tittle}</h4> 
        <p> Cooking Instructions</p> 
        <p> {text}</p>
        <a href ={source} target="_blank" rel="noreferrer">Original Source</a>
      </div>

      <div>
        <button className="btn btn-hipster close-btn" onClick={closeModal}>close</button>
      </div> 
    </div>
  </aside>
  
}


export default Modal;