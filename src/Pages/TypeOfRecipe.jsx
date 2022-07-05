import React from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';
import {Grid, Card, veganClasses, glutenFreeClasses} from '../Style/Card.style'
import {API_KEY} from'../key'



function TypeOfRecipe() {
  
  
  const[typeOfRecipe, setTypeOfRecipe] = React.useState([])
  let params = useParams()



  async function getTypeOfRecipe(type){
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=vegetarian&${type}&addRecipeInformation=true&sort=random`)
      setTypeOfRecipe(res.data.results);
  }

  React.useEffect(()=>{
    getTypeOfRecipe(params.type)
  },[params.type])

  return (
  <Grid
  animate={{opacity:1}}
  initial={{opacity:0}}
  exit={{opacity:0}}
  transition={{duration:0.5}} 
  >
    {typeOfRecipe.map(elem=>{
      return(
        <Link to={'/recipe/'+elem.id} key={elem.id} >
          <Card >
            <img src={elem.image} alt={elem.title} className='image'/>
            {elem.vegan ? <img src='/vegan.png' className={veganClasses} alt='veganIcon'/> : ''}
            {elem.glutenFree ? <img src='/gluten-free.png' className={glutenFreeClasses} alt='glutenFree_icon'/> : ''}
            <p>{elem.title}</p>
           </Card>
        </Link>
      )
    })}
  </Grid>
  )
}






export default TypeOfRecipe