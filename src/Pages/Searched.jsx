import React from 'react';
import axios from 'axios';
import vegan from '../Image/vegan.png'
import glutenFree from '../Image/gluten-free.png'
import{Link} from 'react-router-dom'
import {useParams} from 'react-router-dom';
import {Grid, Card} from '../Style/Card.style'

function Searched() {

    const API_KEY = 'c41d0c9866ad4d0b82d54842a326c2ed'

    const [searchedRecipes, setSearchedRecipes] =React.useState([])
    let params = useParams()


    async function getSearchedRecipes(name){
          const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=vegetarian&query=${name}&addRecipeInformation=true&sort=random`)
          setSearchedRecipes(res.data.results);
}

React.useEffect(()=> {
    getSearchedRecipes(params.search)
},[params.search]);


  return (

    <Grid>
    {searchedRecipes.map(elem=>{
      return(
        <Link to={'/recipe/'+elem.id}  key={elem.id}>
         <Card>
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




export default Searched