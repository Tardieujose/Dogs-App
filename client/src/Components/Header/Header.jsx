import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar';
import './Header.css';
import menu from '../../images/menu.svg';


function Header() {

  const [menuHome, setMenuHome] = useState(false)

  function handleClick() {
    setMenuHome(!menuHome)
  }

  return(
    <div className="header">
      <div className="header_cont">
        <div className='div_responsive_header'>
          <Link to="/home" className="logo"><h1 className="logo">PERRITOS</h1></Link>
          <button className='button_header_menu' onClick={handleClick}>
            <img className='menu' src={menu} alt="menu" />
          </button>
        </div>

        {/* <div className={menuHome  ? "menu_hiden active" : "menu_hiden"}>
          {}
        </div> */}

        <div className="nav">
          {}
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header;