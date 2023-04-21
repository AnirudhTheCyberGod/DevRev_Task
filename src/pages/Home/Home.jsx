import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import About from '../About/About';
import Card from '../../components/Card/Card';
import { Outlet } from 'react-router-dom';
import image1 from './book1.jpg';
import image2 from './book2.jpg';
import image3 from './book3.jpg';


const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{ textAlign: 'center' }}>
  <h1><b>Some great books you might come across :D</b></h1>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="card-container">
        <Card
          img={image1}
          title="The Hidden Life of Trees"
          author="Peter Wohlleben"
        />

        <Card
          img={image2}
          title="The Master Key"
          author="L.Frank Baum"
        />
        <Card
          img={image3}
          title="The Real Wizard OZ"
          author="Rebecca Loncraine"
        />
      </div>
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>   
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
    </main>
  )
}

export default Home
