import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Card} from '../Style/Card.style'
import { ClientApiContext } from '../ClientApi'
import VeganIcon from './VeganIcon'
import GlutenFreeIcon from './GlutenFreeIcon'




function Popular() {

  const {popular} = React.useContext(ClientApiContext)



  return (
    <div>
          <h3>Most popular Vegetarian's Recipe</h3>
           <Grid>
              {popular.map(recipe=>{
                return(
                  <Card key={recipe.id}>
                    <Link to={'/recipe/'+recipe.id}>
                      <img src={recipe.image} alt={recipe.title} className='image'/>
                      <VeganIcon vegan={recipe.vegan} />
                      <GlutenFreeIcon glutenFree={recipe.glutenFree}/>
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