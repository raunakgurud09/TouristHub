import React from 'react'
import './minicard.css'

function MiniCard({imageURL,name,rating,availablePlaces}) {

  // console.log(availablePlaces?.map(single => single?.name))
  // console.log(availablePlaces?.[0]?.name)

  return (
    <div className='minicard '>
        <div className='image-container'>
          <img src={imageURL} alt='Room suite'/>
        </div>
        <div className='text-container'>
          <h5 className='overflow-ellipsis'>{name}</h5>
          <p>Rating: {rating}</p>
          <p className="overflow-ellipsis">Places: {availablePlaces?.map(single => <p id='inline'>| {single?.name} </p>)}</p>
        </div>
    </div>
  )
 
}


/*Ginger Mumbai Andheri East 

map(single => )

naviMumbai  | Andheri | palava | kalyan*/

export default MiniCard