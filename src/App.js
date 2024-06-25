import React from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import Iconairbnb from './Iconairbnb';
import Imagecarousal from './Imagecarosal.jsx';
import Footer from './Footer.jsx';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Iconairbnb/>
      <Imagecarousal />
      <Footer />
    </div>
  );
}
export default App;
