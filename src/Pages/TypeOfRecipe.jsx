import React from 'react'
import vegan from '../Image/vegan.png'
import glutenFree from '../Image/gluten-free.png'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';
import {Grid, Card} from '../Style/Card.style'


function TypeOfRecipe() {

  const API_KEY = 'c41d0c9866ad4d0b82d54842a326c2ed'

  
  
  const[typeOfRecipe, setTypeOfRecipe] = React.useState([])
  let params = useParams()



  async function getTypeOfRecipe(type){

    const check = localStorage.getItem('TypeOfRecipe')

    if(check){
      setTypeOfRecipe(JSON.parse(check))
    }else{
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=vegetarian&${type}&addRecipeInformation=true&sort=random`)
      localStorage.setItem('TypeOfRecipe', JSON.stringify(res.data.results))
      setTypeOfRecipe(res.data.results);
    }
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