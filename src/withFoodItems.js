import React from 'react'

export const withFoodItems = (Component) => {
    const foodItems = ["cassava", "garri", "ewa"]
    const isLoggin = false
  
    return(
        isLoggin?<Component food={foodItems}/>: alert("Pls Login")
    )
  
}
