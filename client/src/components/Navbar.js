import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className='navbar-brand'>Project Manager</Link>
        </nav>
    )

}


export default Navbar;