import React from 'react'

const Header = () => {
  return (
    <header>
        <img src='./images/Logo.svg' alt='Holding plate of food.' />
        <nav>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/menu'>Menu</a></li>
              <li><a href='/reservations'>Reservations</a></li>
              <li><a href='/order-online'>Order Online</a></li>
              <li><a href='/login'>Login</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header