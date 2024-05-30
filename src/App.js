import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.scss';
import { Fragment } from 'react';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import './animations/Animation.js';

function App() {
  return (
    <Fragment>
      <div className="body-container">
        <Header></Header>
        <Pricing></Pricing>
        <Faq></Faq>
        <Footer></Footer>
        
      </div>
    </Fragment>
    
  );
}

export default App;
