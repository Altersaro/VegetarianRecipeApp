import React from 'react'
import {glutenFreeClasses} from '../Style/Card.style'


function GlutenFreeIcon(props) {
  return (
    props.glutenFree ? <img src='/gluten-free.png' className={glutenFreeClasses} alt='glutenFree_icon'/> : ''
  )
}

export default GlutenFreeIcon