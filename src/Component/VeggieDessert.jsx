import React from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import vegan from '../Image/vegan.png'
import glutenFree from '../Image/gluten-free.png'
import {Link} from 'react-router-dom'
import {Card} from '../Style/Card.style'


function VeggieDessert() {
  const[veggieDessert, setVeggieDessert] = React.useState([])

 
  React.useEffect(()=>{
    getRecipe()
  },[])


    async function getRecipe(){
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=9&diet=vegetarian&apiKey=${process.env.REACT_APP_KEY}&sort=random&addRecipeInformation=true&type=dessert`)
        setVeggieDessert(res.data.results)  
    }


  return (
    <div>
          <h3>VeggieDessert</h3>
        <div className='veggieDessert_container'>
          <Splide options={{
            perPage: 4,
            gap: '2rem',
            arrows:false,
            pagination: false,
            drag:'free',
            breakpoints:{
              768:{
                perPage:2,
              }
            }
          }}>
              {veggieDessert.map(recipe=>{
                return(
                  <SplideSlide  key={recipe.id}>
                  <Card>
                    <Link to={'/recipe/'+ recipe.id}>
                      <img src={recipe.image} alt={recipe.title} className='veggieImage'/>
                      {recipe.vegan ? <img src={vegan} className='icon veganIcon' alt='veganIcon'/> : ''}
                      {recipe.glutenFree ? <img src={glutenFree} className='icon glutenFreeIcon' alt='glutenFree_icon'/> : ''}
                      <p>{recipe.title}</p>
                    </Link>
                  </Card>
                  </SplideSlide>
                );
              })}
          </Splide>
        </div>
    </div>
  )
  }





export default VeggieDessert