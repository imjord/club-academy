import React from 'react'
import FirstNav from '../Components/FirstNav'
import './Home.css';
import mountain from '../mountain.jpg'
import tree from '../tree.jpg'
import cap from '../cap.png'

const Home = () => {
  return (
    <div className='wrapper'>
        <FirstNav/>
          <div className='images'>
          <img  src={mountain} className='background'></img>
          <img   src={cap} className='foreground'></img>
          </div>
          
       
    </div>
  )
}

export default Home