import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Card, veganClasses, glutenFreeClasses} from '../Style/Card.style'
import { ClientApiContext } from '../ClientApi'




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