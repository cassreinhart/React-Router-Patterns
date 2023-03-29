import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'


const Nav = ({dogs}) => {
  
    return (
    <ul className='Nav'>
        {dogs.map(dog => (
            <li key={dog.name}>
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
            </li>
        ))}
    </ul>
  )
}

export default Nav