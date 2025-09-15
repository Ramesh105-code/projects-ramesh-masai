import React, { useState } from "react";
import image1 from "./homepage/image 1.jpg";
import image2 from "./homepage/image 2.jpg";
import image3 from "./homepage/image 3.jpg";
import image4 from "./homepage/image 4.jpg";
import image5 from "./homepage/image 5.jpg";
import image6 from "./homepage/image 6.jpg";
import image7 from "./homepage/image 7.jpg";
import image8 from "./homepage/image 8.jpg";

import share from "./homepage/gridicons_share.svg";
import compare from "./homepage/compare-svgrepo-com 1.svg";
import heart from "./homepage/Heart.svg";

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section3 = (props) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const { shop } = props;

  var products = [
    {
      image: image1,
      product: "Syltherine",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      dis: "Rp 3.500.000",
    },
    {
      image: image2,
      product: "Leviosa",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: image3,
      product: "Lolito",
      desc: "Luxury big sofa",
      price: "Rp 7.000.000",
      dis: "Rp 14.000.000",
    },
    {
      image: image4,
      product: "Respira",
      desc: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
    {
      image: image5,
      product: "Grifo",
      desc: "Night lamp",
      price: "Rp 1.500.000",
    },
    { image: image6, product: "Muggo", desc: "Small mug", price: "Rp 150.000" },
    {
      image: image7,
      product: "Pingky",
      desc: "Cute bed set",
      price: "Rp 2.500.000",
      dis: "Rp 3.500.000",
    },
    {
      image: image8,
      product: "Potty",
      desc: "Minimalist flower pot",
      price: "Rp 500.000",
    },
  ];

  // const product = []

  if (shop == "shop") {
    products = [...products, ...products];
  }

  console.log(products, shop);
  return (
    <DIV>
      {products.length > 0 &&
        products.map((el, i) => {
          return (
            <Link to={"/single"}>
              <CARD
                key={i}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div style={{ width: "100%" }}>
                  <img
                    style={{ width: "100%", overflow: "cover" }}
                    src={el.image}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    background: "var(--Color-Light-BG, #F4F5F7)",
                    padding: "15px",
                  }}
                >
                  <p
                    style={{
                      color: "var(--Color-Gray-1, #3A3A3A)",
                      fontFamily: "Poppins",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "120%",
                      margin: "0",
                      marginTop: "10px",
                    }}
                  >
                    {el.product}
                  </p>
                  <p
                    style={{
                      color: "var(--Color-Gray-3, #898989)",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "150%",
                      margin: "0",
                      marginTop: "10px",
                    }}
                  >
                    {el.desc}
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p
                      style={{
                        color: "var(--Color-Gray-1, #3A3A3A)",
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "150%",
                        margin: "0",
                        marginTop: "10px",
                      }}
                    >
                      {el.price}
                    </p>
                    <p
                      style={{
                        color: "var(--Color-Gray-4, #B0B0B0)",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "150%",
                        textDecorationLine: "line-through",
                        margin: "0",
                        marginTop: "10px",
                      }}
                    >
                      {el.dis}
                    </p>
                  </div>
                </div>

                {hoverIndex === i && (
                  <AddToCartButton>
                    <button>Add to Cart</button>
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          cursor: "pointer",
                        }}
                      >
                        <img src={share} alt="" />
                        <p style={{ color: "white" }}>Share</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          cursor: "pointer",
                        }}
                      >
                        <img src={compare} alt="" />
                        <p style={{ color: "white" }}>Compare</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          cursor: "pointer",
                        }}
                      >
                        <img src={heart} alt="" />
                        <p style={{ color: "white" }}>Like</p>
                      </div>
                    </div>
                  </AddToCartButton>
                )}
              </CARD>
            </Link>
          );
        })}
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 85%;
  margin: auto;

  a {
    text-decoration: none;
  }
`;

const CARD = styled.div`
  position: relative;
  width: 100%;
  &:hover {
    //transform: translateY(-10px);
    /* opacity: 0.72; */

    /* transition: transform 0.5s ease; */
  }
`;

const AddToCartButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);

  /* background: var(--Color-Gray-1, #3A3A3A); */

  text-align: center;
  z-index: 2;
  transition: transform 0.5s ease;

  button {
    width: 80%;
    height: 48px;
    flex-shrink: 0;
    background: var(--Color-White, #fff);
    border: none;
    color: var(--Primary, #b88e2f);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    margin-bottom: 10px;
    cursor: pointer;
    transition: transform 0.5s ease;
  }
`;
