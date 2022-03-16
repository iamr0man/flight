import React from 'react';
import CityItem from "./CityItem";

function CityList() {
    const cityList = [
        { id: 0, name: 'Los Angeles (US)', imgSrc: require("../assets/img/los_angeles.png") },
        { id: 1, name: 'Los Vegas (US)', imgSrc: require("../assets/img/los_vegas.png") },
        { id: 2, name: 'Miami (US)', imgSrc: require("../assets/img/miami.png") },
        { id: 3, name: 'Orlando (US)', imgSrc: require("../assets/img/orlando.png") }
    ]
    return (
        <div className="city-list">
            <h3 className="city-list__header">
                Check the popular destinations
            </h3>
            <ul className="city-list__body">
                {cityList.length > 0 && cityList.map((city) => <CityItem city={city} key={city.id} />)}
            </ul>
        </div>
    );
}

export default CityList;