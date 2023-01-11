import React from 'react'
import { useSelector } from 'react-redux';

export const HomePage = () => {
    const tours = useSelector(state => state.tours.tours)

    console.log(tours);
  

  return (
    <div>HomePage</div>
  )
}
