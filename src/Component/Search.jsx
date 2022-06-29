import React from 'react';
import {useNavigate} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa';
import {FormStyle} from '../Style/FormStyle.style'





function Search() {


const [input, setInput] = React.useState('');
const navigate = useNavigate();

const submitHandler=(e) => {
  e.preventDefault();
  navigate('/searched/'+ input)
}


  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <button><FaSearch></FaSearch></button>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
    </FormStyle>
  )
}







export default Search