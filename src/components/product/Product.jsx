import React from "react";
import "../../sass/_product.scss";
import img1 from "../../images/image1.png";
import img2 from "../../images/image2.png";
import img3 from "../../images/image3.png";
import img4 from "../../images/image4.png";
import img5 from "../../images/image5.png";
import img6 from "../../images/image6.png";
import img7 from "../../images/image7.png";
import img8 from "../../images/image8.png";

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
    {
        id: 5,
        url: img5,
        title: "Product name",
        price: 9.99,
    },
    {
        id: 6,
        url: img6,
        title: "Fragrant Cinnamon",
        price: 9.99,
    },
    {
        id: 7,
        url: img7,
        title: "Summer Cherries",
        price: 9.99,
    },
    {
        id: 8,
        url: img8,
        title: "Clean Lavander  ",
        price: 9.99,
    },
];

const Product = () => {
    return (
        <section className="pro">
            <div className="container">
                <h2 className="pro__title">Products</h2>
                <p className="pro__text">
                    Order it for you or for your beloved ones
                </p>
                <ul className="wrapper">
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

export default Product;
