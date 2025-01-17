import React, { useEffect } from 'react'
import '../styles/Header.css'
import { Link } from "react-router-dom"
import logo from '../images/Logo .svg'

const Header = () => {

  useEffect(() => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("nav ul");
    const navLink = document.querySelectorAll("nav a");
    const exitMenu = [...navLink];
    exitMenu.push(hamburger);

    const displayMobileMenu = () => {
      hamburger.classList.add("active");
      navMenu.classList.add("active");
      hamburger.style.zIndex = 99;
      navMenu.style.zIndex = 99;

      // Remove the event listener for opening the menu
      hamburger.removeEventListener("click", displayMobileMenu);

      // Add event listeners for closing the menu
      exitMenu.forEach((e) => e.addEventListener("click", closeMenu));
    };

    const closeMenu = () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      navMenu.style.zIndex = 0;

      // Remove the event listeners for closing the menu
      exitMenu.forEach((e) => e.removeEventListener("click", closeMenu));

      // Add the event listener for opening the menu
      hamburger.addEventListener("click", displayMobileMenu);
    };

    hamburger.addEventListener("click", displayMobileMenu);
  });


  return (
    <header>
      <a href='/'><img src={logo} alt='Little Lemon logo.' /></a>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><a href='#about'>About</a></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/reservations'>Reservations</Link></li>
          <li><Link to='/order-online'>Order Online</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>

        <div id='hamburger'>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  )
}

export default Header