import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {DetailsPage} from '../Style/DetailsPage.style'
import vegan from '../Image/vegan.png'
import glutenFree from '../Image/gluten-free.png'
import {API_KEY} from'../key'


function Recipe() {

  const[recipeDetails, setRecipeDetails] = React.useState({
    extendedIngredients:[]
  })
  let params = useParams()

  async function getRecipeDetails(name){
    const res = await axios.get(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${API_KEY}`)
    setRecipeDetails(res.data)
    console.log(res.data)

  }

  React.useEffect(()=>{
    getRecipeDetails(params.name)
  },[params.name])


  return (
    <DetailsPage>
        <h1>{recipeDetails.title}</h1>

        <div className='img-grid'>
          <img src={recipeDetails.image} alt={recipeDetails.title} className='img'/>
          <div className='icon-container'>
            {recipeDetails.vegan ? <img src={vegan} className=' icon veganIcon' alt='vegan_icon'/> : ''}
            {recipeDetails.glutenFree ? <img src={glutenFree} className='icon glutenFreeIcon' alt='glutenFree_icon'/> : ''}
          </div>
        </div>


        <div className='ingredients-container'>
          <h2>Description:</h2>
          <p dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></p>
      
        <h2>Ingredients:</h2>
        <ul>
          {recipeDetails.extendedIngredients.map(ingredient => {
            return(<li key={ingredient.id}>{ingredient.original}</li>)
          })}
        </ul>
        <h2>Instructions: </h2> 
        <p dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}></p>
      </div>
      </DetailsPage>
  )
}






export default Recipe