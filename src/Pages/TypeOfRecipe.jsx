import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Grid, Card, veganClasses, glutenFreeClasses} from '../Style/Card.style'
import { ClientApiContext } from '../ClientApi';



function TypeOfRecipe() {

  
  
  const {typeOfRecipe, setPath} = React.useContext(ClientApiContext)

  
  let params = useParams()



  React.useEffect(()=>{
    setPath(params.type)
  },[setPath,params.type])

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