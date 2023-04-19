import React, {useState, useEffect} from 'react'
import Head from './Head';
import Filter from './Filter';
import Flashcards from './Flashcards';
import './Home.css';
// import ByCategory from './ByCategory';
// import {useCollapse} from 'react-collapsed';
const Main = () => {
    const [searchName, setSearchName] = useState([]);
    const[meals, setMeals] = useState([]);
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
        .then((res) => res.json())
        .then((data) => setMeals(data.meals))
        
    }, []);

    useEffect(() =>{
        try {
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchName)
          .then((res) => res.json())
          .then((data) => setMeals(data.meals));
        } catch(err){ console.error(err)}; 
    }, [searchName]);
  
    const handleSearch = (event) => {
        const searchText = event.target.value;
        if (searchText === "") {
        console.log("not found");
            } else {
        setSearchName(searchText);
        }
  };

  const styles ={
    filter:{
      width: "40%",
    },
    homecont:{
      marginTop:"10px",
      display: "flex",
      
    },
    searchbar:{
      padding: "5px",
      marginTop : "15px",
      width : "11%",
      height : "25px",
      marginRight : "15px",
      borderRadius : "15px",
    },
  };
 
  return (
    <div className="App">
      <Head/>
      
      <div className='Homecont' style= {styles.homecont} >
      <div className="filter" style= {styles.filter}>
        <Filter/>
      </div>
      <div className='menu'>
          <div>
          <input className = "searchbar" style = {styles.searchbar} onChange={handleSearch}
          placeholder="  Search Meals" type ="text" />
          </div>
         <div className = "row">
            {meals?.map((meal) => (
                <Flashcards key={meal.idMeal} meal={meal}></Flashcards>
          ))} 
             </div>
        </div>
      </div> 
      
    </div>
  );
}

export default Main;