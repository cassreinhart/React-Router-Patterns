import React from 'react';
import { Link } from "react-router-dom";
import './Dog.css'

const Dog = ({dog}) => {
  return (
    <li className='Dog'>
        <img src={dog.src} alt={dog.name}/>
        <Link>{dog.name}</Link>
    </li>
  )
}

export default Dog