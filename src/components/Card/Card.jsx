import React from 'react'
import photo from '../../images/katie-zaferes.png';
import startIcon from '../../images/star.png';

export default function Card({key, item}) {
    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={require(`../../images/${item.coverImg}`)} className="card--image" />
            <div className="card--stats">
                <img src={startIcon} className="card--star" />
                <span>{item.rating}</span>
                <span className="gray">({item.reviewCount}) • </span>
                <span className="gray">{item.location}</span>
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price"><span className="bold">From ${item.price}</span> / person</p>
        </div>
    )
}
