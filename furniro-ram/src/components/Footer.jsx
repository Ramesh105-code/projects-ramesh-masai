import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <DIV>
      <div className="part1 ">
        <div className="footer">
          <h1>Funiro.</h1>
          <p className="funiro">
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <div className="footer" style={{ paddingLeft: "50px", width: "70%" }}>
          <p>Links</p>
          <p>Home</p>
          <p>Shop</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="footer" style={{ paddingLeft: "50px", width: "80%" }}>
          <p>Help</p>
          <p>Payment Options</p>
          <p>Returns</p>
          <p>Privacy Policies</p>
        </div>
        <div className="footer">
          <p>Newsletter</p>
          <div style={{ display: "flex", gap: "15px" }}>
            <input type="text" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="part2">
        <p>2023 furino. All rights reverved</p>
      </div>
    </DIV>



  );
};

const DIV = styled.div`
  border-top: 0.5px solid lightgray;
  
  padding-top: 50px;
  /* padding-bottom: 50px; */

  .part1 {
    width: 85%;
    margin: auto;
    display: flex;
    gap: 30px;
    justify-content: space-between;
    border-bottom: 0.5px solid lightgray;
    /* padding-bottom: 50px; */
  }

  .part1 input {
    outline: none;
    border: none;
    padding: 10px;
    border-bottom: 1px solid lightgray;
    padding-left: 0;
    padding-bottom: 3px;
  }

  .part1 button {
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    padding: 10px;
    background-color: #ffff;
    border-bottom: 1px solid lightgray;
    padding-bottom: 3px;
  }

  .footer {
    width: 100%;
  }

  .footer p {
    margin-bottom: 45px;
  }

  .part1 .footer p:nth-child(1),
  .funiro {
    color: #9f9f9f;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .part2 {
    width: 85%;
    margin: auto;
    margin-bottom: 38px;
  }

  .part2 p {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
