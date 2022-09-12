import React from "react";
import style from './About.module.css';

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <h1>About US</h1>
      <div className={style.shopingMart}>
        <h1>About Shoping Mart</h1>        
        <p>
          Online Shopping Mart is a E commerce Site. Here Shopping is made
          easier and convenient for the customer through the internet. Online
          shopping is a form of electronic commerce which allows consumers to
          directly buy goods or services from a seller over the Internet using a
          web browser or a mobile app. Consumers find a product of interest by
          visiting the website of the retailer directly or by searching among
          alternative vendors using a shopping search engine, which displays the
          same product's availability and pricing at different e-retailers. As
          of 2022, customers can shop online using a range of different
          computers and devices, including desktop computers, laptops, tablet
          computers and smartphones.
          
        </p>
        <h2>Advantages of Online Plateform</h2>
      </div>
      <ul className={style.listContainer}>
        <li>Saves time and efforts.</li>
        <li>The convenience of shopping at home.</li>
        <li>Wide variety/range of products are available.</li>
        <li>Good discounts / lower prices</li>
        <li>Get detailed information about the product.</li>
      </ul>
    </div>
  );
};

export default About;
