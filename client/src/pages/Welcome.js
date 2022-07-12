import React from 'react'
import Footer from '../components/Footer'

const Welcome = () => {
  return (
    <div>
        <div className='welcome-div'>
            <h4>Welcome to Club Academy!</h4>
            <p>This is a project I made using the MERN Stack</p>
            <p>This is just a practice project. I'm used to using ejs and decided to use react cause ya know</p>
        </div>
        <div className='welcome-div-two'>
            <div>
            <h4>Features</h4>
            <hr/>
            </div>
            <div>

           
            <p>
                <ul>
                    <li>
                        <p>Login/Register</p>
                    </li>
                    <li>
                        <p>Profile</p>
                    </li>
                    <li>
                        <p>Clubs</p>
                    </li>
                </ul>
            </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Welcome