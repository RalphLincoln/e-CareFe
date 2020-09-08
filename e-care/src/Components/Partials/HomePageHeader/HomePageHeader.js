import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./HomePageHeader.css";

class HomePageHeader extends Component {
  render() {
    return (
      <header className="header">
        <div className="hero-image">
<<<<<<< HEAD
          <ul className="nav text-center d-flex justify-content-center pb-3 py-3 hero__top-nav">
=======
          <ul className="nav justify-content-center py-3 hero__top-nav">
>>>>>>> 57391473d744dc84854246c718acf130095e4b58
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Patient care
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="#">
                Doctor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Hospitals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact us
              </a>
            </li>
          </ul>
<<<<<<< HEAD
          <div className="pt-5 mx-auto text-center mt-5">
            <h1 className='font-weight-bold bb text-white'>Book an appointment</h1>
            <p className='text-white bb2'>Reach out to our doctors or build your appointment right away</p>
            <div className='mt-5'>
              <button className="btn mid px-3">Book now</button>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4 ">
            <p className='pp my-auto d-none d-md-block text-white'>Powered By</p>
            <img className='d-none d-md-block' src={logo} alt="transparent" />
          </div>
          <div className="container d-flex align-items-end">
            <div className="row mx-auto mt-5">
              <div className='d-none d-md-block'>
                <img src={image1} alt="image1" />
                <p className='text-white'>Pharmacy</p>
              </div>

              <div className='d-none d-md-block'>
                <img src={image2} alt="image2" />
                <p className='text-white'>Diagnostic</p>
              </div>

              <div className='d-none d-md-block'>
                <img src={image3} alt="image3" />
                <p className='text-white'>Wellness</p>
              </div>

              <div className='d-none d-md-block'>
                <img src={image4} alt="image4" />
                <p className='text-white'>Healthy Blog</p>
              </div>
            </div>
=======
          <div className="hero-mid-text">
            <h1>Book an appointment</h1>
            <p>Reach out to our doctors or build your appointment right away</p>
            <Link to='/booking'>
               <button className="btn btn-danger px-3">Book now</button>
            </Link>
>>>>>>> 57391473d744dc84854246c718acf130095e4b58
          </div>
        </div>
      </header>
    );
  }
}

export default HomePageHeader;
