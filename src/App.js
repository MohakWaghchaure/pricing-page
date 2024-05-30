import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Fragment } from 'react';
import Header from './components/Header';
import Pricing from './components/Pricing';

function App() {
  return (
    <Fragment>
      <div className="body-container">
        <Header></Header>
        <Pricing></Pricing>
      </div>
    </Fragment>
    
  );
}

export default App;
