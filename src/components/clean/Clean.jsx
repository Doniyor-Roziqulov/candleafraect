import React from "react";
import cleanimg from "../../images/clean.png";

const data = [
    {
        id: 1,
        title: "Eco-sustainable:",
        text: "All recyclable materials, 0% CO2 emissions",
    },
    {
        id: 2,
        title: "Hyphoallergenic:",
        text: "100% natural, human friendly ingredients",
    },
    {
        id: 2,
        title: "Handmade:",
        text: "All candles are craftly made with love.",
    },
    {
        id: 3,
        title: "Long burning:",
        text: "No more waste. Created for last long.",
    },
];

const Clean = () => {
    return (
        <section className="clean">
            <div className="container">
                <div className="clean__box">
                    <div>
                        <h2 className="clean__title">
                            Clean and <br /> fragrant soy wax
                        </h2>
                        <p className="clean__text">
                            Made for your home and for your wellness
                        </p>
                        <ul className="clean__list">
                            {data?.map((el) => (
                                <li className="clean__item" key={el.id}>
                                    <strong className="clean__bold">
                                        {el.title}
                                    </strong>{" "}
                                    <p className="clean__deck">{el.text}</p>
                                </li>
                            ))}
                        </ul>
                        <a className="clean__link" href="#">
                            Learn more
                        </a>
                    </div>
                    <img src={cleanimg} alt="clean img" />
                </div>
            </div>
        </section>
    );
};

export default Clean;
