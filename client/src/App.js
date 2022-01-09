import logo from './logo.svg';
import './App.css';

import Projects from './components/Projects';
import Add from "./components/Add"
import Update from "./components/Update"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Projects />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </div>
      </Router>


  );
}

export default App;
