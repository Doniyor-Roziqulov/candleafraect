import React from "react";
import "../../sass/_hero.scss";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__box">
                    <h1 className="hero__title">
                        🌱 <br /> The nature candle
                    </h1>
                    <p className="hero__text">
                        All handmade with natural soy wax, Candleaf is a
                        companion for all your pleasure moments
                    </p>
                    <a className="hero__link" href="#">
                        Discovery our collection
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
