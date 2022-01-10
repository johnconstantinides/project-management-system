import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='shadow-lg p-3 mb-5 bg-white rounded'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className='navbar-brand'>Project Manager</Link>
            <div className='collpase navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                    <Link to="/add" className='nav-link'>Add Project</Link>
                </li>
            </ul>
            </div>
        </nav>
        </div>
    )

}


export default Navbar;