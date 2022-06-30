import React from 'react'
import vegan from '../Image/vegan.png'
import glutenFree from '../Image/gluten-free.png'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';
import {Grid, Card} from '../Style/Card.style'


function TypeOfRecipe() {
  
  
  const[typeOfRecipe, setTypeOfRecipe] = React.useState([])
  let params = useParams()



  async function getTypeOfRecipe(type){
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&diet=vegetarian&${type}&addRecipeInformation=true&sort=random`)
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
            {elem.vegan ? <img src={vegan} className='icon veganIcon' alt='veganIcon'/> : ''}
            {elem.glutenFree ? <img src={glutenFree} className='icon glutenFreeIcon' alt='glutenFree_icon'/> : ''}
            <p>{elem.title}</p>
           </Card>
        </Link>
      )
    })}
  </Grid>
  )
}






export default TypeOfRecipe