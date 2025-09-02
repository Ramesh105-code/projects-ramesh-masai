import React from "react";
import { Section1 } from "../components/home/Section1";
import { Section2 } from "../components/home/Section2";
import { Section3 } from "../components/home/Section3";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Section4 } from "../components/home/Section4";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <Home>
      <Section1 />
      <Section2 />
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "700",
            fontStyle: "normal",
            color: "var(--Font-Color1, #3A3A3A)",
            lineHeight: "120%",
          }}
        >
          Our Products
        </h1>
        <Section3 />

        <button className="show">
          <Link to={"/shop"}>Show more</Link>{" "}
        </button>
      </div>

      <Section4 />

      <Footer/>
    </Home>
  );
};

const Home = styled.div`
  .show {
    display: block;
    margin: auto;
    width: 245px;
    height: 48px;
    flex-shrink: 0;
    border: 1px solid var(--Primary, #b88e2f);
    background: #fff;
    color: var(--Primary, #b88e2f);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    cursor: pointer;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .show a {
    text-decoration: none;
    color: var(--Primary, #b88e2f);
  }
`;
