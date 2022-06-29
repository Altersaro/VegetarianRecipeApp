import React from 'react';
import Navbar from './Component/Navbar';
import Pages from './Pages/Pages';
import{ BrowserRouter } from 'react-router-dom'
import Search from './Component/Search';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Search/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;


