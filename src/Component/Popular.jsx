import React from 'react'
import axios from 'axios'
import vegan from '../Image/vegan.png'
import glutenFree from '../Image/gluten-free.png'
import {Link} from 'react-router-dom'
import {Grid, Card} from '../Style/Card.style'





function Popular() {

  const[popular, setPopular] = React.useState([])

  const API_KEY = 'c41d0c9866ad4d0b82d54842a326c2ed'
 
  React.useEffect(()=>{
    getRecipe()
  },[])


    async function getRecipe(){

      const check = localStorage.getItem('popular');

      if(check){
        setPopular(JSON.parse(check))
      }else{
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=6&diet=vegetarian&apiKey=${API_KEY}&sort=random&addRecipeInformation=true&type=mainCourse`)
        localStorage.setItem('popular', JSON.stringify(res.data.results));
        setPopular(res.data.results)
        console.log(res.data.results)
      }



      

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
                      {recipe.vegan ? <img src={vegan} className=' icon veganIcon' alt='vegan_icon'/> : ''}
                      {recipe.glutenFree ? <img src={glutenFree} className='icon glutenFreeIcon' alt='glutenFree_icon'/> : ''}
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