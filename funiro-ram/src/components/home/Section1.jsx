import React from "react";
import homeimg from "./homepage/Homepage_image.jpeg";

export const Section1 = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "800px",
          backgroundImage: `url(${homeimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            // width: "580px",
            // height: "400px",
            backgroundColor: "#FFF3E3",
            borderRadius: "10px",
            marginLeft: "auto",
            marginRight: "58px",
            paddingLeft: "41px",
            paddingTop: "62px",
            paddingBottom: "37px",
            paddingRight: "56px",
          }}
        >
          <p
            style={{
              color: "var(--Font-Color, #333)",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              letterSpacing: "3px",
            }}
          >
            New Arrival
          </p>

          <h1
            style={{
              color: "var(--Primary, #B88E2F)",
              fontFamily: "Poppins",
              fontSize: "52px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "65px", // You can also use a number directly without quotes if it's unitless
              width: "459px",
              height: "127px",
              flexShrink: 0,
              margin: "0px",
            }}
          >
            Discover Our New Collection
          </h1>

          <p
            style={{
              color: "var(--Font-Color, #333)",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              width: "550px",
              marginBottom: "46px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <button
            style={{
              padding: "24px",
              paddingLeft: "72px",
              paddingRight: "72px",
              background: "var(--Primary, #B88E2F)",
              border: "none",
              color: "white",
              fontSize: "16px",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
