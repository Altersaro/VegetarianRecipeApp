import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Grid, Card, veganClasses, glutenFreeClasses} from '../Style/Card.style'
import {API_KEY} from'../key'




function Popular() {

  const[popular, setPopular] = React.useState([])

 
  React.useEffect(()=>{
    getRecipe()
  },[])


    async function getRecipe(){

        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=6&diet=vegetarian&apiKey=${process.env.REACT_APP_KEY}&sort=random&addRecipeInformation=true&type=mainCourse`)
        setPopular(res.data.results)
  
      }

      

  return (
    <div>
          <h3>Most popular Vegetarian's Recipe</h3>
           <Grid>
              {popular.map(recipe=>{
                return(
                  <Card key={recipe.id}>
                    <Link to={'/recipe/'+recipe.id}>
                      <img src={recipe.image} alt={recipe.title} className='image'/>
                      {recipe.vegan ? <img src='/vegan.png' className={veganClasses} alt='vegan_icon'/> : ''}
                      {recipe.glutenFree ? <img src='/gluten-free.png' className={glutenFreeClasses} alt='glutenFree_icon'/> : ''}
                      <p>{recipe.title}</p>
                    </Link>
                  </Card>
                );
              })}
           </Grid>
      
    </div>
  )
}






export default Popular