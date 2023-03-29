import React from 'react'
import Dog from './Dog'
import './DogList.css'

const DogList = ({dogs}) => {
  return (
    <div className='DogList'>
        <h2>Here are the dogs:</h2>
        <ul className='dogs'>
            {dogs.map(d => (<Dog dog={d} />))}
        </ul>
    </div>
  )
}

export default DogList