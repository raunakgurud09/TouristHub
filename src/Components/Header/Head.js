import React from 'react'
import './head.css'

function Head() {
  return (
    <div className='navbar flexCenter'>
        <h2 className='title'>TouristHub</h2>
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