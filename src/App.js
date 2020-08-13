import React from 'react';
import './App.css';
import Navbar from './screens/Navbar';
import TopContainer from './screens/TopContainer';
import HTUContainer from './screens/HTUContainer';
import NRContainer from './screens/NRContainer';
import ShopList from './screens/ShopList';
import ForRestaurant from './screens/ForRestaurant';
import Footer from './screens/Footer';
import { Link , BrowserRouter , Switch , Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
        <Switch>
          {/* <Route exact path="/" component={TopContainer} /> */}
          <Route
              exact
              path="/"
              render={() => <TopContainer/>}
            />
          
          <HTUContainer/>
          <NRContainer/>
          <ShopList/>
          <ForRestaurant/>
        </Switch>
      <Footer/>
    </BrowserRouter>
  )
}
export default App;
