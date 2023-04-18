import React from 'react'
import photoGrid from '../../images/photo-grid.png';

export default function Details() {
  return (
    <section className='details'>
        <img src={photoGrid} alt="photo grid" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
