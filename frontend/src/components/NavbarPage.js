import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Navbar, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

function NavbarPage({ setSearchKeyword, showSearch, setShowSearch }) {
  return (
    <div className="NavbarContainer">
      <Navbar>
        {showSearch ? (
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
        ) : (
          <>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-start ">
              <div className="logo">
                <HiSearch
                  onClick={() => setShowSearch(true)}
                  className="SearchIcon"
                />
              </div>
            </Navbar.Collapse>
            <Navbar.Brand href="#home" className="justify-content-center Brand">
              <Link to="/" className="Brand-Link">
                <div className="NamaBrand">
                  <p className="namaHalu">HALU</p>
                  <p className="namaDulu">DULU</p>
                </div>
              </Link>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <div className="logo2">
                <Link to="/cart" className="link2">
                  <AiOutlineShopping />
                </Link>
              </div>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
      <div className="Border">
        <div className="borderkiri"></div>
        <div className="borderkanan"></div>
      </div>
    </div>
  );
}

export default NavbarPage;
