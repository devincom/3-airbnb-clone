import React from 'react'
import Card from '../Card/Card'

export default function Offerings({ myData }) {
    const cards = myData.map(d =>
        <Card
            key={d.id}
            item={d}
        />
    )
    return (
        <div className='cards-list'>
            {cards}
        </div>
    )
}
