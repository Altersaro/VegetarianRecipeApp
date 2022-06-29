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

  const API_KEY = 'c41d0c9866ad4d0b82d54842a326c2ed'
 
  React.useEffect(()=>{
    getRecipe()
  },[])


    async function getRecipe(){

      const check = localStorage.getItem('veggieDessert');

      if(check){
        setVeggieDessert(JSON.parse(check))
      }else{
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=9&diet=vegetarian&apiKey=${API_KEY}&sort=random&addRecipeInformation=true&type=dessert`)
        localStorage.setItem('veggieDessert', JSON.stringify(res.data.results));  
        setVeggieDessert(res.data.results)
        console.log(res.data.results)
      }




    
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
                      <img src={recipe.image} alt={recipe.title}/>
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