import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/navbar/Meubel House_Logos-05.svg";
import accAlert from "../Assets/navbar/mdi_account-alert-outline.svg";
import search from "../Assets/navbar/akar-icons_search.svg";
import heart from "../Assets/navbar/akar-icons_heart.svg";
import cart from "../Assets/navbar/ant-design_shopping-cart-outlined.svg";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "12%",
            marginLeft: "56px",
            gap: "10px",
          }}
        >
          <div>
            <img src={logo} alt="" />
          </div>

          <h2
            style={{
              fontSize: "34px",
              fontWeight: "700",
              fontFamily: "Montserrat",
            }}
          >
            Funiro
          </h2>
        </div>
      </Link>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "28%",
        }}
      >
        <Link
          to={"/"}
          style={{ fontSize: "16px", textDecoration: "none", color: "black" }}
        >
          Home
        </Link>
        <Link
          to={"/shop"}
          style={{ fontSize: "16px", textDecoration: "none", color: "black" }}
        >
          shop
        </Link>
        <Link
          to={"/about"}
          style={{ fontSize: "16px", textDecoration: "none", color: "black" }}
        >
          about
        </Link>
        <Link
          to={"/contact"}
          style={{ fontSize: "16px", textDecoration: "none", color: "black" }}
        >
          contact
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "13%",
          marginRight: "100px",
        }}
      >
        <div>
          <img src={accAlert} alt="" />
        </div>
        <div>
          <img src={search} alt="" />
        </div>
        <div>
          <img src={heart} alt="" />
        </div>
        <div>
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  );
};
