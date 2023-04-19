import React from 'react';
import banner from './banner.jpg';
import logo2 from './logo3.png';
const Head = (props) =>{
    
    const styles = {
        header:{
            // backgroundImage: `url(${banner})`,
            backgroundColor: "#b3b300",
            padding : "20px",
            display : "flex",
            height : "70px",
            // alignItems : "center",
            justifyContent: "spaceBetween",
            justifyContent : "center",
            boxShadow : "5px 5px 15px 2px",
            
        },

        
        btn:{
            fontSize : "20px",
            width : "10%"
        },
        icon:{
            height: "18px",
            width : "20%",
            marginLeft :"4px"
        },
        
        title:{
            color: "#FFFFFF",
            textAlign: "center",
        },
        im:{
          marginTop: "-20px",
          height : "120px",
          justifyContent : "center"
        }
      };
  return (
    <div className = "header">
        
        <div style = {styles.header}>
        <img style ={styles.im} src = {logo2}/>
        {/* <h2 style = {styles.title}>MealDB</h2> */}
        </div>
        
    </div>
  )
}

export default Head;