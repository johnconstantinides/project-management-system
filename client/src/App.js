import logo from './logo.svg';
import './App.css';

import Projects from './components/Projects';
import Add from "./components/Add"
import Update from "./components/Update"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className='container'>
          <Navbar />
          <Projects/>
      </div>


  );
}

export default App;
