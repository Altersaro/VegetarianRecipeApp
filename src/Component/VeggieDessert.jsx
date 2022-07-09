import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'
import {Card, glutenFreeClasses, veganClasses} from '../Style/Card.style'
import { ClientApiContext } from '../ClientApi';



function VeggieDessert() {

  const {veggieDessert} = React.useContext(ClientApiContext)





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
                      {recipe.vegan ? <img src='/vegan.png' className={veganClasses} alt='veganIcon'/> : ''}
                      {recipe.glutenFree ? <img src='/gluten-free.png' className={glutenFreeClasses} alt='glutenFree_icon'/> : ''}
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