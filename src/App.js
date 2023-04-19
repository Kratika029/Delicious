import React from 'react';
import './App.css';
import Main from './Main';
import ByArea from './ByArea';
import { BrowserRouter, Router, Route, Switch, Routes } from 'react-router-dom';

import ByCategory from './ByCategory';
const App=()=> {
  return(

  <BrowserRouter>
    <Routes>
    
      <Route exact path="/" element={<Main/>} />
      <Route exact path ="/ByCategory/Dessert" element={<ByCategory category="Dessert"/>} />
      <Route exact path ="/ByCategory/Beef" element={<ByCategory category="Beef"/>} />
      <Route exact path ="/ByCategory/Chicken" element={<ByCategory category="Chicken"/>} />
      <Route exact path ="/ByCategory/Vegetarian" element={<ByCategory category="Vegetarian"/>} />
      <Route exact path ="/ByCategory/Seafood" element={<ByCategory category="Seafood"/>} />
      <Route exact path ="/ByCategory/Pork" element={<ByCategory category="Pork"/>} />
      <Route exact path ="/ByCategory/Starter" element={<ByCategory category="Starter"/>} />

      <Route exact path ="/ByArea/British" element={<ByArea area="British"/>} />
      <Route exact path ="/ByArea/Malaysian" element={<ByArea area="Malaysian"/>} />
      <Route exact path ="/ByArea/Indian" element={<ByArea area="Indian"/>} />
      <Route exact path ="/ByArea/Russian" element={<ByArea area="Russian"/>} />
      <Route exact path ="/ByArea/Dutch" element={<ByArea area="Dutch"/>} />
      <Route exact path ="/ByArea/American" element={<ByArea area="American"/>} />
      <Route exact path ="/ByArea/French" element={<ByArea area="French"/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;
