import React from 'react'
import { Link } from 'react-router-dom';

const ColorList = ({colors}) => {
  return (
    <ul>
        {colors.map(c => <li key={c}><Link>{c}</Link></li>)}
    </ul>
  )
}

export default ColorList