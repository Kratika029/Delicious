// import React from 'react'
import React, { useEffect, useState } from 'react';
import Flashcards from './Flashcards';
import './Home.css';
import Head from './Head';
const ByArea = (props) => {
    const[meals, setMeals] = useState([]);
    const area= props.area;
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        .then((res) => res.json())
        .then((data) => setMeals(data.meals));
        console.log(meals);
    }, []);
  return (
    <div>
        <Head/>
         <div className="grids">
            <h2>{area}</h2>
            <div className = "row">
            {meals.map((meal) => (
                <Flashcards key={meal.idMeal} area={area} meal={meal}></Flashcards>
               
          ))}
            </div>
        </div>
    </div>
  )
}

export default ByArea