import React from 'react'
import axios from 'axios'


export const ClientApiContext = React.createContext()

export const RecipeProvider = (props) =>{
    const[popular, setPopular] = React.useState([])
    const[veggieDessert, setVeggieDessert] = React.useState([])
    const[typeOfRecipe, setTypeOfRecipe] = React.useState([])
    const[path, setPath] = React.useState('')



 
    React.useEffect(()=>{
    getRecipe()
    getRecipeDessert()
    if (path) getTypeOfRecipe()
  },[path]) //eslint-disable-line react-hooks/exhaustive-deps


    async function getRecipe(){
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=6&diet=vegetarian&apiKey=${process.env.REACT_APP_KEY}&sort=random&addRecipeInformation=true&type=mainCourse`)
        setPopular(res.data.results)
      }

    async function getRecipeDessert(){
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=9&diet=vegetarian&apiKey=${process.env.REACT_APP_KEY}&sort=random&addRecipeInformation=true&type=dessert`)
        setVeggieDessert(res.data.results)  
    }

    async function getTypeOfRecipe(){
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&diet=vegetarian&${path}&addRecipeInformation=true&sort=random`)
      setTypeOfRecipe(res.data.results);
  }





      return(
        <ClientApiContext.Provider 
            value={{
                popular:popular,
                veggieDessert:veggieDessert,
                typeOfRecipe: typeOfRecipe,
                setPath:setPath,
                }}>
            {props.children}
        </ClientApiContext.Provider>
      )

}