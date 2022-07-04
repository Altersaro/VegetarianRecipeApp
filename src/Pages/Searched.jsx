import React from 'react';
import axios from 'axios';
import{Link} from 'react-router-dom'
import {useParams} from 'react-router-dom';
import {Grid, Card} from '../style/Card.style'
import {API_KEY} from'../key'


function Searched() {


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
            {elem.vegan ? <img src='/vegan.png' className='icon veganIcon' alt='veganIcon'/> : ''}
            {elem.glutenFree ? <img src='/gluten-free.png' className='icon glutenFreeIcon' alt='glutenFree_icon'/> : ''}
            <p>{elem.title}</p>
          </Card>
        </Link>
      )
    })}
  </Grid>
  )
}




export default Searched