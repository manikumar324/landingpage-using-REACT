import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Deliver from './Components/Deliver/Deliver';
import Menu from './Components/Menu/Menu';
import Offer from './Components/Offer/Offer';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Deliver />
      <Menu />
      <Offer />
      <Footer />
    </div>
  )
}

export default App;