import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Flashcards from './Flashcards';
import './Home.css';
import Head from './Head';
const ByCategory = (props) =>{
    const[meals, setMeals] = useState([]);
    
    const category= props.category;
    // const cat = "Dessert";
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?category=${category}`)
        .then((res) => res.json())
        .then((data) => setMeals(data.meals));

        console.log(meals);
    //     // console.log
        
    }, []);
  

  return (
    <div >
        <Head/>
        <div className="grids">
            <h2>{category}</h2>
            <div className = "row">
            {meals.map((meal) => (
                <Flashcards key={meal.idMeal} category={category} meal={meal}></Flashcards>
          ))}
            </div>
        </div>
    </div>
  )
}

export default ByCategory;