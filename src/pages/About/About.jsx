import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-us.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About DevRevBookStore</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <p className='fs-17'>We are the largest and best online library management curently available in Cyber Space. We've developed this website in a way where it provides users with a simple and intuitive way to browse and manage books. The website features a comprehensive list of books that users can filter and search based on various criteria, including title, author, subject, and publish-date. Additionally, the website implements paging to improve performance and ensure a smooth browsing experience. With a user-friendly interface and robust functionality, the website provides an excellent resource for users looking to explore and manage their book collections.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
