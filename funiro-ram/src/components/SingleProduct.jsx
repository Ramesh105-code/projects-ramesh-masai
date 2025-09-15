import React from "react";
import styled from "styled-components";

import arrow from "../Assets/singleProduct/dashicons_arrow-up-alt2.svg";
import img1 from "../Assets/singleProduct/Asgaard sofa 3.png";
import star from "../Assets/singleProduct/dashicons_star-filled.svg";
import halfstar from "../Assets/singleProduct/carbon_star-half.svg";
export const SingleProduct = () => {
  return (
    <Single>
      <div></div>
      <div
        style={{
          height: "100px",
          width: "100%",
          background: "#F9F1E7",
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <p style={{ marginLeft: "50px" }}>Home</p>
        <dir>
          <img src={arrow} alt="" />
        </dir>
        <p>Shop</p>
        <dir>
          <img src={arrow} alt="" />
        </dir>
        <p>Asgaard sofa</p>
      </div>

      <div className="proDesc">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "10%",
            }}
          >
            <div
              style={{
                width: "100%",
                background: "#F9F1E7",
                borderRadius: "10px",
              }}
            >
              <img style={{ width: "100%" }} src={img1} alt="" />
            </div>
            <div
              style={{
                width: "100%",
                background: "#F9F1E7",
                borderRadius: "10px",
              }}
            >
              <img style={{ width: "100%" }} src={img1} alt="" />
            </div>
            <div style={{ width: "100%", background: "#F9F1E7" }}>
              <img style={{ width: "100%" }} src={img1} alt="" />
            </div>
            <div
              style={{
                width: "100%",
                background: "#F9F1E7",
                borderRadius: "10px",
              }}
            >
              <img style={{ width: "100%" }} src={img1} alt="" />
            </div>
          </div>
          <div>
            <div style={{ background: "#F9F1E7", borderRadius: "10px" }}>
              <img src={img1} alt="" />
            </div>
          </div>
        </div>

        <div>
          <h1>Asgaard sofa</h1>
          <p>Rs. 250,000.00</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img src={star} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div>
              <img src={halfstar} alt="" />
            </div>
            <div
              style={{
                width: "1px",
                background: "#333",
                height: "30px",
                marginLeft: "10px",
              }}
            ></div>
            <p style={{ marginLeft: "10px" }}>5 Customer Review</p>
          </div>

          <p style={{ marginLeft: "10px", width: "70%" }}>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          <p>Size</p>

          {/* button */}

          <div
            style={{
              width: "40%",
              // margin: "auto",
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              marginBottom: "50px",
              gap: "20px",
            }}
          >
            <button
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "5px",
                background: "var(--Primary, #B88E2F)",
                border: "none",
                color: "white",
                fontSize: "13px",
                fontFamily: "400",
                cursor: "pointer",
              }}
            >
              L
            </button>
            <button
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "5px",
                background: "var(--Primary, #F9F1E7)",
                border: "none",
                // color:'white',
                fontSize: "13px",
                fontFamily: "400",
                cursor: "pointer",
              }}
            >
              XL
            </button>
            <button
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "5px",
                background: "var(--Primary, #F9F1E7)",
                border: "none",
                // color:'white',
                fontSize: "13px",
                fontFamily: "400",
                cursor: "pointer",
              }}
            >
              XS
            </button>
          </div>

          {/* button */}

          <p>Color</p>

          <div style={{ display: "flex", gap: "20px" }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "20px",
                backgroundColor: "#816DFA",
              }}
            ></div>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "20px",
                backgroundColor: "#000",
              }}
            ></div>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "20px",
                backgroundColor: "#B88E2F",
              }}
            ></div>
          </div>

          <div style={{ marginTop: "20px", gap:"20px",display:'flex', marginBottom:'30px'}}>
            <button
              style={{
                height: "64px",
                border: "1px solid",
                borderRadius: "10px",
                background: "#fff",
                width: "100px",
              }}
            >
              - 1 +
            </button>
            <button
              style={{
                height: "64px",
                border: "1px solid",
                borderRadius: "10px",
                background: "#fff",
                width: "150px",
              }}
            >
              Add To Cart
            </button>
            <button
              style={{
                height: "64px",
                border: "1px solid",
                borderRadius: "10px",
                background: "#fff",
                width: "150px",
              }}
            >
              + Compare
            </button>
          </div>

            <div style={{width:'80%', height:'0.5px', background:"lightgray"}}></div>
        </div>
      </div>
    </Single>
  );
};

const Single = styled.div`
  .proDesc {
    display: flex;
    width: 100%;
  }
`;
