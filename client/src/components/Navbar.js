import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className='navbar-brand'>Project Manager</Link>
            <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                    <Link to="/add" className='nav-link'>Add Project</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/update" className='nav-link'>Update Project</Link>
                </li>
            </ul>
            </div>
        </nav>
    )

}


export default Navbar;