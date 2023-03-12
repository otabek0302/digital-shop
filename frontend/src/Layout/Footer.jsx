import React from 'react'
import { Link } from 'react-router-dom';
import {BsLinkedin, BsGithub, BsYoutube,BsInstagram } from 'react-icons/bs';
const Footer = () => {
  return (<>
      <footer className='py-3 '>
        <div className="container-xxl">
            <div className="row align-items-center">
              <div className="col-5">
                <div className="footer-top-data d-flex gap-15 aligin-items-center">
                  <img src="./images/newsletter.png" alt="News Letter" />
                  <h4 className='mb-0 text-white'> Sing Up for Newsletter </h4>
                </div>
              </div>
              <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address ..."
                  aria-label="Your Email Address ..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-2" id="basic-addon2">
                  Subsribe
                </span>
              </div>
              </div>
            </div>
        </div>
      </footer>
      <footer className='py-3 '>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='mb-4 text-white'>Conatact Us</h4>
              <div className=''>
                <address className='text-white fs-6'>
                  Samarqand Shahar <br />
                  Street: Yangi Obod Road: Samara House 13 <br />
                  Pincode: 141001
                </address>
                <a href="tel: +998 915566474" className='text-white mt-3 d-block mb-1'>+99891 556 64 74</a>
                <a href="mailto: otabekjon2002@mail.ru" className='text-white mt-2 d-block mb-0'>otabekjon2002@mail.ru</a>
                <div className='social_icons d-flex aligin-items-center gap-15 mt-4'>
                  <a className='text-white' href="/">
                    <BsLinkedin className='fs-5' />
                  </a>
                  <a className='text-white' href="/">
                    <BsGithub  className='fs-5'/>
                  </a>
                  <a className='text-white' href="/">
                    <BsYoutube  className='fs-5'/>
                  </a>
                  <a className='text-white' href="/">
                    <BsInstagram  className='fs-5'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='mb-4 text-white'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy policy</Link>
                <Link className='text-white py-2 mb-1'>Refound Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='mb-4 text-white'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='mb-4 text-white'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptop</Link>
                <Link className='text-white py-2 mb-1'>Head Phones</Link>
                <Link className='text-white py-2 mb-1'>Tablet</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4 '>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 mb-0 text-white">
            <p className="text-center">&copy; { new Date().getFullYear() } Create by otabek_0302 </p>
          </div>
        </div>
      </div>
      </footer>
  </>)
}

export default Footer