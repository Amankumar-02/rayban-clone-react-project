import React from 'react'
import logo from '../../../img/raybanlogo.png'

function Header() {
  return (
    <>
    <div id='nav'>
        <div id="nLeft">
        <img src={logo} alt="rayban-logo"/>
        <a href="#">Products</a>
        <a href="#">About</a>
        </div>
        <div id="nRight">
            <a href="#">LUXE</a>
            <a href="#">Pricing</a>
        </div>
    </div>
    </>
  )
}

export default Header