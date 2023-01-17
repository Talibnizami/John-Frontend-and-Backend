import React from 'react'
import './constactOffical.css';
import address from '../assets/images/address.svg'
import number from '../assets/images/number.svg'
import mail from '../assets/images/mail.svg'
import dd from '../assets/images/footer-logo.png'
import Iframe from 'react-iframe'
import './Contact.css'
import './Contact-us.css';
import './Contact2.css.css';
import caroImage from '../assets/images/banner-img.png'
import Header from './Header/Header';
import { Link } from 'react-router-dom'


const Contactuss = () => {
  return (
    <div>
      <div className='bg-black  text-white'> Spend $50 for free shipping</div>
    <Header />
      <div className='mmqqoop'>

        <div className='iiyytt'>
          <h1 className='fgd mkjbbfss notfillmine'>Contact Us
          </h1> <br />
          {/* <h1  className='fgd mkjbbfss'></h1> */}
          <p className='mkjbbfss awdw notfillmine'>Life shouldn't be so black & white. <br />
            The Brightest flame casts the <br /> darkest shadow.</p>
            <Link to={'/SignupForm1'}><button className='iutrvh'>Shop Now!</button></Link> 
        </div>


        <div className='ffmmkklloo'>
          <img src={caroImage} alt="" />
        </div>
      </div>



      {/* Card */}

      <div className="cards">
        <div className="tatsu-contact">
          <div className="contact-icon   flex justify-center  my-7	ssqq   ">
            <img src={address} className="img-fluid" alt="" />
          </div>
          <div className="contact-matter">
            <h4 className='mb-7'>ADDRESS</h4>
            <p>(508) 435-4715 15 Hill St
              Hopkinton, Massachusetts(MA), 01748</p>
          </div>
        </div>


        <div className="tatsu-contact sadasdas">
          <div className="contact-icon flex  justify-center ssqq">
            <img src={mail} className="img-fluid" alt="" />
          </div>
          <div className="contact-matter">
            <h4 className='my-7'>E-MAIL</h4>
            <p>info@tatsuthreads.com</p>
          </div>
        </div>


        <div className="tatsu-contact">
          <div className="contact-icon flex  justify-center ssqq">
            <img src={number} className="img-fluid" alt="" />
          </div>
          <div className="contact-matter">
            <h4 className='my-7'>PHONE NUMBER</h4>
            <p>(156) 1536 5512</p>
          </div>
        </div>

      </div>






      <div className="container asjvdasyu">
        <div className="row   notyhnjii">
          <div className='h-80'>

            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.2027269050786!2d-71.59821908423797!3d42.231481751203745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e40b402872e2cb%3A0xdc506f8f5d40df8c!2s!5e0!3m2!1sen!2s!4v1663141720598!5m2!1sen!2s"
              id=""
              width='100%'
              height='100%'
              className="edcrfv"
              display="block"
              styles={{ "border-radius": "50px" }}
              position="relative" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 nmbvcxz  form-col">
            <h4 className='text-6xl   my-16  font-bold'>Have Any Queries?</h4>

            <div className="row  flex flex-col justify-center	items-center	">
              <div className="col">
                <input type="text" className="form-control    inputsetburs  " placeholder="Your Name" />
              </div>
              <div className="col">
                <input type="email" className="form-control  inputsetburs   " id="inputEmail4" placeholder="Email Address" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input type="tel" className="form-control  inputsetburs   " placeholder="Phone Number" />
              </div>
              <div className="col">
                <input type="email" className="form-control  inputsetburs " id="inputEmail4" placeholder="Subjects" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <textarea className="form-control edcrfv inputsetburs " id="exampleFormControlTextarea1" rows="6" placeholder="Write a Message"></textarea> <br />
                <button type="submit" className="submit-btn buttonsadasd  bg-black  text-white">SUBMIT</button>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Footer */}


      <div className="pg-footer">
        <footer className="footer">
          {/* <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg> */}
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <a className="footer-logo-link" href="#">
                  <span className="hidden-link-text">LOGO</span>
                  <img src={dd} alt="" />
                </a>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Get Started</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Start</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Documentation</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Installation</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Company</h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Contact</a>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <a href="#">News</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <a href="#">Privacy Notice</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Security</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Blog</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    <a href="#">Customers</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                <p className="footer-call-to-action-description"> Have a support question?</p>

                <div className='adsufv'>
                  <input className='border-1  kkll border-whites rounded-sm px-4 py-1' placeholder='Email Address' type="text" name="" id="" />
                  <button className='nnju  border-black text-xl text-black mt-6 px-11 py-4 '>SUBSCRIBE</button>
                </div>
              </div>
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> You Call Us</h2>
                <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> Ahmed</a></p>
              </div>
            </div>

          </div>

        </footer>
      </div>

    </div>
  )
}

export default Contactuss