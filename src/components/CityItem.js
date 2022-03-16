import React from 'react';
import { ReactComponent as Arrow } from '../assets/img/arrow.svg'

function CityItem({ city }) {
    return (
        <li className="city-item">
            <div className="city-item__box">
                <img className="city-item__image" src={city.imgSrc} alt={city.name} />
                <p className="city-item__name">{city.name}</p>
            </div>
            <Arrow />
        </li>
    );
}

export default CityItem;