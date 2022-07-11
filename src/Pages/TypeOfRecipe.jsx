import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Grid, Card} from '../Style/Card.style'
import { ClientApiContext } from '../ClientApi';
import VeganIcon from '../Component/VeganIcon'
import GlutenFreeIcon from '../Component/GlutenFreeIcon'



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
            <VeganIcon vegan={elem.vegan}/>
            <GlutenFreeIcon glutenFree={elem.glutenFree}/>
            <p>{elem.title}</p>
           </Card>
        </Link>
      )
    })}
  </Grid>
  )
}






export default TypeOfRecipe