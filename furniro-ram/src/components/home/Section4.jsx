import React from "react";
import styled from "styled-components";
import img1 from "./homepage/section4_1.png";
import img2 from "./homepage/section4_2.png";
import img3 from "./homepage/section4_3.png";

export const Section4 = () => {
  return (
    <Section>
      <div className="part1">
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button>Expore More</button>
      </div>

      <div className="part2">
        <div style={{ width: "50%" }}>
          <div style={{ width: "95%" }}>
            <img style={{ width: "100%" }} src={img1} alt="" />
          </div>
        </div>
        <div style={{ width: "45%" }}>
          <div style={{ width: "95%" }}>
            <img style={{ width: "100%" }} src={img2} alt="" />
          </div>
        </div>
        <div style={{ width: "5%" }}>
          <div style={{ width: "110%" }}>
            <img style={{ width: "100%" }} src={img3} alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: 600px;
  /* padding: 44px; */
  background: #fcf8f3;
  display: flex;
  align-items: center;
  gap: 42px;
  padding-top: 44px;
    padding-bottom: 44px;

  .part1 {
    width: 40%;
    margin-left: 56px;
    padding: 44px;
  }

  .part1 h1 {
    color: var(--Color-Gray-1, #3a3a3a);
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 48px */
  }

  .part1 p {
    color: var(--Color-Gray-2, #616161);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
  }

  .part1 button {
    width: 176px;
    height: 48px;
    flex-shrink: 0;
    background: var(--Primary, #b88e2f);
    border: none;

    color: var(--Color-White, #fff);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
  }

  .part2 {
    width: 47%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
   
  }
`;
