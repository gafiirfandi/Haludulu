import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/auth/auth.action";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Navbar, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

function NavbarPage({ setSearchKeyword, showSearch, setShowSearch }) {
  const dispatch = useDispatch();

  return (
    // <div className="NavbarContainer">
    <>
      <Navbar>
        {/* {showSearch ? (
          <>
            <Form.Control
              className="Input-Box"
              type="text"
              placeholder="search"
              onChange={(ev) => {
                setSearchKeyword(ev.target.value);
                console.log(ev.target.value);
              }}
            />
            <button onClick={() => setShowSearch(false)}>X</button>
          </>
        ) : ( */}
        <>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-start NavLeft">
            <div className="logo">
              <input
                className={`InputSearch ${showSearch && "SearchOn"}`}
                type="search"
                onChange={(ev) => {
                  setSearchKeyword(ev.target.value);
                  console.log(ev.target.value);
                }}
                placeholder="search"
              />
              <HiSearch
                onClick={() => {
                  if (showSearch) setShowSearch(false);
                  else setShowSearch(true);
                }}
                className={`SearchIcon ${showSearch && "SearchIconBorder"}`}
              />
              {/* <Form.Control
                className="InputSearch"
                type="text"
                placeholder="search"
                onChange={(ev) => {
                  setSearchKeyword(ev.target.value);
                  console.log(ev.target.value);
                }}
              /> */}
            </div>
          </Navbar.Collapse>
          <Navbar.Brand href="#home" className="justify-content-center Brand">
            <Link to="/" className="Brand-Link">
              <div className="NamaBrand">
                <img
                  className="LogoNav"
                  src="/media/logo_haludulu_real_cropped.png"
                  alt=""
                />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <div className="logo2">
              <Link to="/cart" className="link2">
                <AiOutlineShopping />
              </Link>
              <button onClick={() => dispatch(actions.logout())}>LOGOUT</button>
            </div>
          </Navbar.Collapse>
        </>
      </Navbar>
      <div className="Border">
        <div className="borderkiri"></div>
        <div className="borderkanan"></div>
      </div>
      {/* </div> */}
    </>
  );
}

export default NavbarPage;
