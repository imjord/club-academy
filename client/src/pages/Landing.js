import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './Home.css';

const Landing = () => {
  return (
    <div className='home-main'>
        <Navbar />
          <section className='section-homepage'>
            <h1>Your club homepage</h1>
            
          </section>
          <section className='section-land'>
          <p>Welcome to your club homepage 
            </p>
            <p>Here you can see the current members of your club, and the current events that are happening in your club.</p>
            <p>
            You can also see the current events that are happening in your club.
            </p>
            <p>
              Go ahead and click on the links above to create and see current CLUBS!
            </p> 
          </section>
        <Footer />
    </div>
  )
}

export default Landing