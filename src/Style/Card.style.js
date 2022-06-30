import styled from "styled-components";
import { motion } from "framer-motion";

export const Grid = styled(motion.div)`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap:3rem;

@media(max-width:768px){
  width: 80%;
  margin: 0 auto;
  grid-gap: 2rem;

}

@media(max-width:400px){
  width: 100%;
}


`


 export const Card = styled.div`
 min-height: 200px;
 border-radius: 2rem;
 overflow: hidden;
 position:relative;
 box-shadow: 2px 2px 2px 2px #f0f0f0;

 :hover{
  transform: scale(0.9)
}
 
  .veggieImage{
    max-height: 230px;
  }

 .image{
  border-radius: 2rem;
  height:100%;
  width:100%;
  position:absolute;
  left:0;
  object-fit: cover;

 }

 p{
  background-color:rgba(0 ,0 ,0 ,0.4);
  z-index: 20;
  position: absolute;
  width: 100%;
  color:white;
  left:50%;
  bottom:0%;
  transform: translate(-50%, 0%);
  text-align: center;
  padding-bottom: 10px;
  margin:0;
  font-weight: 600;
  font-size: 14px;
  padding: 7px;

 }

 .icon{
  width: 42px;
  height: 42px;
  position:absolute;
  z-index:2;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
 }

 .veganIcon{
  top:10px;
  left:10px;
 }

 .glutenFreeIcon{
  top:10px;
  right:10px;
 }


 @media(max-width:658px){
  width: 100%;
 }

`