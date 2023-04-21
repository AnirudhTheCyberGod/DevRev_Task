import React from 'react';
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Best Online Library Ever</h2><br />
                <p className='header-text fs-18 fw-3 '><b>Find your next adventure between the pages with just a search away!!</b></p>
                <Searchbar />
            </div>
            <br/>
        </header>
    </div>
  )
}

export default Header