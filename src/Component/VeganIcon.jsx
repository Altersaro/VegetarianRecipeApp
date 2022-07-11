import React from 'react'
import {veganClasses} from '../Style/Card.style'

function VeganIcon(props) {
  return (
    props.vegan ? <img src='/vegan.png' className={veganClasses} alt='veganIcon'/> : ''
  )
}

export default VeganIcon