
import React from 'react'
import './Header.css';
import logo from '../../assets/logo.png';
import { headOptions } from '../../constants';
import { Link } from 'react-router-dom';

function HeadOptions(props) {
  return (
    <Link to={props.navItems} >
      {props.navItems}
    </Link>
  );
}

function Header() {
  return (
    <div className="main-container">
    <div className='header-container'>
      <div className='header-logo'>
        <img src={logo} alt='image'/>
      </div>
      <div className="head-items">
        {
          headOptions.map(function(item,index){
            return(
              <HeadOptions key={item} navItems={item}/>
            )
          })
        }
      </div>
      <div className="button-container">
        <button className='login'>log in</button>
        <button className='Signup'>Get Started</button>
      </div>
      </div>
    </div>

  )
}

export default Header