import React, {useState, useEffect} from 'react';
import './Home.css';
import {useCollapse} from 'react-collapsed';


const Collapsible= (props)=>{
  const [ isExpanded, setExpanded ] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  function handleOnClick() {
        setExpanded(!isExpanded);
    }
return (
        <div className="collapsible">
            
            <div {...getCollapseProps()}>
                <div className="content">
                {props.instru.slice(40, 400)}
                </div>
            </div>
            <button className="header" {...getToggleProps({onClick: handleOnClick})}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </button>
        </div>
    );

};
const Flashcards = (props)=> {
  const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = props.meal;
  const category = strCategory ? strCategory : props.category?props.category:"";
  const area = strArea? strArea: props.area?props.area:"";
  return (
    
      <div className='base'>
        <img
            src={strMealThumb}
            className="imgi"
            alt="..."
          />
        <div className ='desc'>
            <h5 className="card-title">{strMeal}</h5>
            <p className="card-text">{strInstructions ? strInstructions.slice(0, 40): ""}</p>
            
        </div>
        {strInstructions?<Collapsible instru ={strInstructions}/>:""}
        {area?<p>Area: <small>{area}</small></p>:""}
        {category?<p> Category: <small>{category}</small></p>:""}
      </div>
    
  )
}

export default Flashcards;