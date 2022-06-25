import React from 'react'
import './head.css'

function Head() {
  return (
    <div className='navbar flexCenter'>
        <h3 className='title'>TouristHub</h3>
        <nav>
            <ul>
                <li>Food</li>
                <li>Hotels</li>
                <li>TravelSpots</li>
            </ul>
        </nav>
    </div>
  )
}

export default Head