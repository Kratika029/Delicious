import React from 'react';
import { Link} from 'react-router-dom';
import './Filter.css';
function Filter() {
  return (
    <div className = "sidenav">
    
        <h2>Filter by Category</h2>
       
        <Link to = "ByCategory/Dessert"><p>Dessert</p></Link>
        <Link to = "ByCategory/Chicken"><p>Chicken</p></Link>
        <Link to = "ByCategory/Beef"><p>Beef</p></Link>
        <Link to = "ByCategory/Vegetarian"><p>Vegetarian</p></Link>
        <Link to = "ByCategory/Seafood"><p>Seafood</p></Link>
        <Link to = "ByCategory/Pork"><p>Pork</p></Link>
        <Link to = "ByCategory/Starter"><p>Starter</p></Link>
<div>
        <h2>Filter by Area</h2>
        <Link to = "ByArea/British"><p>British</p></Link>
        <Link to = "ByArea/Malaysian"><p>Malaysian</p></Link>
        <Link to = "ByArea/Indian"><p>Indian</p></Link>
        <Link to = "ByArea/Russian"><p>Russian</p></Link>
        <Link to = "ByArea/Dutch"><p>Dutch</p></Link>
        <Link to = "ByArea/American"><p>American</p></Link>
        <Link to = "ByArea/French"><p>French</p></Link>
    </div>
</div>

    
  )
}

export default Filter