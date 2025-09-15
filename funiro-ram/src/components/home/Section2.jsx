import React from "react";
import img1 from "./homepage/section2_1.png";
import img2 from "./homepage/section2_2.png";
import img3 from "./homepage/section2_3.png";

export const Section2 = () => {

  

  return (
    <div style={{ marginTop: "60px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
          fontStyle: "normal",
        }}
      >
        Browse The Range
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "700",
          fontStyle: "normal",
          color: "var(--Font-Color1, #666)",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          margin: "auto",
          marginTop: "60px",
        }}
      >
        <div style={{ width: "32%" }}>
          <div style={{ width: "100%" }}>
            <img style={{ width: "100%" }} src={img1} alt="" />
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "600",
              fontStyle: "normal",
              color: "var(--Font-Color1, #333)",
            }}
          >
            Dining
          </p>
        </div>
        <div style={{ width: "32%" }}>
          <div style={{ width: "100%" }}>
            <img style={{ width: "100%" }} src={img2} alt="" />
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "600",
              fontStyle: "normal",
              color: "var(--Font-Color1, #333)",
            }}
          >
            Living
          </p>
        </div>
        <div style={{ width: "32%" }}>
          <div style={{ width: "100%" }}>
            <img style={{ width: "100%" }} src={img3} alt="" />
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "600",
              fontStyle: "normal",
              color: "var(--Font-Color1, #333)",
            }}
          >
            Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};
