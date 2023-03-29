import React from 'react';
import {Link} from "react-router-dom";

const DogDetail = ({dog}) => {
  return (
    <div className='DogDetail'>
        <h2>Hi, my name is {dog.name}!</h2>
        <h3>Age: {dog.age}</h3>
        <img src={dog.src} alt={dog.name} />
        <h3>Here are some facts about me!</h3>
        <ol className='facts'>
            {dog.facts.map((f, idx) => {
                return <li key={idx}>{f}</li>
            })}
        </ol>
        <Link to="/dogs">Go Back</Link>
    </div>
  )
}

export default DogDetail