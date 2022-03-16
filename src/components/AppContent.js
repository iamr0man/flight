import React, {useLayoutEffect} from 'react';
import lottie from "lottie-web";
import pageAnimation from '../assets/img/page_animation.json'

function AppContent() {

    useLayoutEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector(".app-content__gif"),
            animationData: pageAnimation,
            renderer: "svg",
            loop: true,
            autoplay: true
        });
    }, [])

    return (
        <div className="app-content">
            <div className="app-content__gif" />
            <h1 className="app-content__headline">
                We are about to change everything you know about finding a flight
            </h1>
            <p className="app-content__title">Customize to your trip and your desires</p>
            <button className="app-content__button">Check our deals</button>
            <div className="break-line" />
        </div>
    );
}

export default AppContent;