import React from "react";
import "../../sass/_popular.scss";
import img1 from "../../images/image1.png";
import img2 from "../../images/image2.png";
import img3 from "../../images/image3.png";
import img4 from "../../images/image4.png";

const data = [
    {
        id: 1,
        url: img1,
        title: "Spiced Mint",
        price: 9.99,
    },
    {
        id: 2,
        url: img2,
        title: "Sweet Straweberry",
        price: 9.99,
    },
    {
        id: 3,
        url: img3,
        title: "Cool Blueberries",
        price: 9.99,
    },
    {
        id: 4,
        url: img4,
        title: "Juicy Lemon",
        price: 9.99,
    },
];

const Popular = () => {
    return (
        <section className="pop">
            <div className="container">
                <h2 className="pop__title">Popular</h2>
                <p className="pop__text">
                    Our top selling product that you may like
                </p>
                <ul className="pop__list">
                    {data?.map((el) => (
                        <li className="pro__item" key={el.id}>
                            <div className="pro__imgbox">
                                <img src={el.url} alt={el.title} />
                            </div>
                            <h3 className="pro__bold">{el.title}</h3>
                            <strong className="pro__price">{el.price}$</strong>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Popular;
