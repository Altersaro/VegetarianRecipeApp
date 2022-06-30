import React from 'react';
import{List, SLink} from "../Style/Navbar.style";
import logo from '../Image/logo.png';
import clock from '../Image/clock.png';
import glutenFree from '../Image/gluten-free.png';
import legumes from '../Image/legumes.png';


function Navbar() {


    const [windowSize, setWindowSize] = React.useState(window.innerWidth)

    function resizeListener(){
        setWindowSize(window.innerWidth)
    }
    React.useEffect(()=>{
        window.addEventListener('resize', resizeListener);
    },);
    
   
  return (
    <List>
        <SLink to={'/'}>
            <img src={logo} className='logo' alt='logo'/>
        </SLink>
        <SLink to={'/TypeOfRecipe/maxReadyTime=15'}>
            <img src={clock} alt='clock_icon'/>
           {windowSize > 658 ? <h4>Quick recipes</h4>:''}
        </SLink>
        <SLink to={'/TypeOfRecipe/intolerances=gluten'}>
            <img src={glutenFree} alt='glutenFree_icon'/>
            {windowSize > 658 ? <h4>Gluten Free Recipes</h4>:''}
        </SLink>
        <SLink to={'/TypeOfRecipe/maxProtein=100'}>
            <img src={legumes} alt='legumes_icon'/>
            {windowSize > 658 ? <h4>Protein Recipes</h4>:''}
        </SLink>
    </List>
  )
}




export default Navbar