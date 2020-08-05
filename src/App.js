import React from 'react';
import './App.css';
import Navbar from './screens/Navbar';
import TopContainer from './screens/TopContainer';
import  {HTUContainer}  from './screens/HTUContainer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <TopContainer/>
      <HTUContainer/>
    </div>
  )
}
export default App;
