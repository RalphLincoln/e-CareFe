/*
  PublicNav.js is the navbar for all public pages
  Admin, Medical Personel and Patient will have their
  own navs
*/

import React, { Component } from "react";
import Logo from "../../../Images/logo.png";

export default class PublicNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">
          <img
            className="img-fluid"
            src={Logo}
            alt="e-care brand logo"
            loading="lazy"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
<<<<<<< HEAD
          <div className="row">
            <form style={{ border: '1px solid #006F76', borderRadius: '5px' }} className="my-2 pl-2 pr-5 form-inline my-lg-0">
              <label htmlFor=""><ImSearch style={{ color: '#007D85' }} /></label>
              <input
                className="form-control search-field mr-sm-2"
                type="search"
                placeholder="Search for hospital, Pharmacy, Diagonst...."
              />
            </form>
            <button className="btn btn-danger ml-lg-3 mr-auto px-3">
              <MdPhoneIphone className='mr-2 icon' />
            Emergency call <span className='pl-1'>| 0011</span>
            </button>
          </div>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
=======
          <form className="my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for hospital"
            />
          </form>
          <button className="btn btn-danger ml-lg-3 mr-auto px-3">
            Emergency call
          </button>
          <ul className="navbar-nav mt-2 mt-lg-0 ">
>>>>>>> 57391473d744dc84854246c718acf130095e4b58
            <li className="nav-item d-inline-block mx-auto d-lg-inline">
              <a
                className="btn btn-outline-success px-3"
                href="#"
                aria-disabled="true"
              >
                Login
              </a>
            </li>
            <li
              className="mx-3 d-none d-lg-block"
              style={{
                border: "1px solid #28a745",
              }}
            ></li>
            <li className="nav-item d-inline-block mx-auto d-lg-inline mt-3 mt-lg-0 ">
              <a className="btn btn-success px-3" href="#" aria-disabled="true">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
