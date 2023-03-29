import React from 'react'
import { useParams } from 'react-router-dom';
import DogDetail from './DogDetail';

const GetDog = ({dogs}) => {
  const {name} = useParams();

  if (name) {
    let filtered = dogs.filter(d => d.name.toLowerCase() === name.toLowerCase())
    let currentDog = filtered[0];
    return <DogDetail dog={currentDog} />;
  }
  return <h2>Error: Dog Not Found</h2>;
}

export default GetDog;