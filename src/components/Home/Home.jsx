import React from 'react'
import './Home.css';
import disImage from '../../assets/Display.png'
import GS from '../../assets/GS.png'
function Home() {
  return (
    <div className="home-container">
        <div className="home-image">
            <img src={disImage} alt="display" />
        </div>
        <div className="right-content">
            <p className='right-desc'>
                Want To <span>Know</span> More.... 
            </p>
            <img src={GS} alt="GS" className='GS' />
        </div>
    </div>
  )
}

export default Home