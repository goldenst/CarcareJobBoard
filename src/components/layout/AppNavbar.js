import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class AppNavbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-mb navbar-dark bg-primary mb-4'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            Status Board
          </Link>
          <button 
          className='navbar-toggler'
          type='button'
          data-toggle='colapse'
          data-target='#navbarMain'>
          <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-colapse' id='navbarMain'>
            <ul className='navbar-navmr-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default AppNavbar;
