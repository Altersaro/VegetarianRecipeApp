import styled from 'styled-components';
import{ NavLink } from 'react-router-dom';




export const List = styled.div`
display:flex;
justify-content:space-between;
margin: 2rem 0rem;
border-radius: 2rem;

 .logo{
    width:100px;
    border-radius: 2rem;
 }

 @media(max-width:658px){
    .logo{
        width: 64px;
    }
 }





`



export const SLink = styled(NavLink)`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
text-align:center;
border-radius:2rem;
text-decoration:none;
cursor:pointer;
padding: 10px;
background: #eefff5;
box-shadow: 2px 2px 2px 2px #f57c7c;


img{
    width: 64px;
}


&.active{
    background:#de4e4e;
    color: #eefff5 ;
}
  


:hover{
    transform: scale(0.9)
}

h4{
    width:100%;
    font-size:16px;
    border-radius: 0 0 2rem 2rem;
    color:#73d28f;
    
}



@media(max-width: 658px){
    padding: 5px;
    flex-direction: row;


    
}

`