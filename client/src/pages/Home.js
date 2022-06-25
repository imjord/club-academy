import React from 'react'
import FirstNav from '../Components/FirstNav'
import './Home.css';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='home-main'>
        <FirstNav/>
          <section>
            <h1>Welcome to Club Academy</h1>
        
            <p>Club Academy is a web application that allows users to join clubs or create clubs.</p>
            <p>Created using React, Express, Nodejs, and mySQL</p>
          </section>
          <section className='home-list'>
            <h1>Features</h1>
            <ul>
              <li>Create clubs</li>
              <li>Join clubs</li>
              <li>View clubs</li>
              <li>View club members W.I.P.</li>
              <li>View club events W.I.P.</li>
              <li>View club posts W.I.P.</li>
              <li>View club photos W.I.P.</li>
              <li>View club videos W.I.P.</li>
            </ul>
            </section>
          <Footer />
    </div>
  )
}

export default Home