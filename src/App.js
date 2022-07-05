import React from 'react';
import Navbar from './navbar/Navbar';
import Pages from './Pages/Pages';
import{ BrowserRouter } from 'react-router-dom'
import Search from './search/Search';
import ScrollButton from './scrollButton/ScrollButton';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Search/>
        <Pages/>
        <ScrollButton/>
      </BrowserRouter>
    </div>
  );
}

export default App;


