import React from 'react'
import Home from './Home'
import{ Route, Routes, useLocation }from 'react-router-dom'
import TypeOfRecipe from './TypeOfRecipe'
import Searched from './Searched'
import Recipe from '../detailsPage/Recipe'
import{AnimatePresence} from 'framer-motion'
import {RecipeProvider} from '../ClientApi'


function Pages() {
  const location = useLocation();
  return (
  <RecipeProvider>
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/TypeOfRecipe/:type' element={<TypeOfRecipe/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipe/:name' element={<Recipe/>}/>
      </Routes>
    </AnimatePresence>
  </RecipeProvider>
  )
} 

export default Pages