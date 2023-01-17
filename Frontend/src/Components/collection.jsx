import React from 'react'
import '../Components/collection.css'
import dd from '../assets/images/footer-logo.png'
import shirt from '../assets/images/t-shirt.png'
import shorts from '../assets/images/shorts.png'
import Trouser from '../assets/images/Joggers-img.png'
import Hoddie from '../assets/images/hoodies.png'
import Cap from '../assets/images/hats.png'
import caroImage from '../assets/images/banner-img.png'
import Header from '../Components/Header/Header'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <div>
      <div className='bg-black  text-white'> Spend $50 for free shipping</div>
      <Header />

      <div className='mmqqoop'>
        <div className='iiyytt'>
          <h1 className='fgd mkjbbfss  mr-20'>Tatsu Threads Products</h1> <br />
          <h1 className='fgd mkjbbfss'>Life shouldn't be so black & white. <br />
            The Brightest flame casts the darkest shadow.</h1><br />
            <Link to={'/SignupForm1'}><button className='iutrvh'>Shop Now!</button></Link>
        </div>


        <div className='ffmmkklloo'>
          <img src={caroImage} alt="" />
        </div>
      </div>

      <div className="midPart">

        {/* First Part */}


        <section id="joggers" class="thread-products">
          <div class="container ">
            <div class="row  flex   ml-16 mt-16  items-start	">
              <div class="col-xl-6 product   guduakbd	">
                <div class="t-img   border-black hjvasda">
                  <img src={shirt} className="bbvvyc" />
                </div>
              </div>
              <div class="col-xl-6 text-products    flex ml-16">
                <div class="discraption-shirt  adfeewwe">
                  <h3 className='text-2xl  qwdfqwc  font-bold'>T-Shirts</h3>
                  <p className='linehheoo'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus.
                    Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus.<br /><br />

                    Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor</p>
                    <Link to={'/SignupForm1'}><a class="teck-selling-btn button32432 mt-3" href="#" role="button">SHOP NOW!</a></Link> 
                  

                </div>

              </div>

            </div>
          </div>
        </section>

        <section id="joggers " class="thread-products">
          <div class="container ">
            <div class="row  ssssaaa flex  ml-16 mt-16  items-start	">

              <div class="col-xl-6 text-products   flex ml-16">
                <div class="discraption-shirt  adfeewwe">
                  <h3 className='text-2xl  qwdfqwc font-bold'>Shorts</h3>
                  <p className='linehheoo'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus.
                    Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus.<br /><br />

                    Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor</p>
                    <Link to={'/SignupForm1'}><a class="teck-selling-btn button32432 mt-3" href="#" role="button">SHOP NOW!</a></Link>
                  

                </div>

              </div>

              <div class="col-xl-6 product   guduakbd	">
                <div class="t-img   border-black hjvasda">
                  <img src={shorts} className="bbvvyc" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="joggers" class="thread-products">
          <div class="container ">
            <div class="row  flex  ml-16 mt-16  items-start	">
              <div class="col-xl-6 product   guduakbd	">
                <div class="t-img   border-black hjvasda">
                  <img src={Trouser} className="bbvvyc" />
                </div>
              </div>
              <div class="col-xl-6 text-products   flex ml-16">
                <div class="discraption-shirt  adfeewwe">
                  <h3 className='text-2xl  qwdfqwc font-bold'>Joggers</h3>
                  <p className='linehheoo'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus.
                    Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus.<br /><br />

                    Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor</p>
                    <Link to={'/SignupForm1'}><a class="teck-selling-btn button32432 mt-3" href="#" role="button">SHOP NOW!</a></Link>
                  

                </div>

              </div>

            </div>
          </div>
        </section>

        <section id="joggers" class="thread-products">
          <div class="container ">
            <div class="row ssssaaa  flex  ml-16 mt-16  items-start	">

              <div class="col-xl-6 text-products   flex ml-16">
                <div class="discraption-shirt  adfeewwe">
                  <h3 className='text-2xl  qwdfqwc font-bold'>Tatsu Hoodies</h3>
                  <p className='linehheoo'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus.
                    Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus.<br /><br />

                    Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor</p>
                    <Link to={'/SignupForm1'}><a class="teck-selling-btn button32432 mt-3" href="#" role="button">SHOP NOW!</a></Link>
                  

                </div>

              </div>

              <div class="col-xl-6 product   guduakbd	">
                <div class="t-img   border-black hjvasda">
                  <img src={Hoddie} className="bbvvyc" />
                </div>
              </div>

            </div>
          </div>
        </section>
        <section id="joggers" class=" mb-14 thread-products">
          <div class="container ">
            <div class="row  flex  ml-16 mt-16  items-start	">
              <div class="col-xl-6 product   guduakbd	">
                <div class="t-img   border-black hjvasda">
                  <img src={Cap} className="bbvvyc" />
                </div>
              </div>
              <div class="col-xl-6 text-products   flex ml-16">
                <div class="discraption-shirt  adfeewwe">
                  <h3 className='text-2xl  qwdfqwc font-bold'>Hats</h3>
                  <p className='linehheoo  font-2xl '>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus.
                    Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus.<br /><br />

                    Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor</p>
                    <Link to={'/SignupForm1'}><a class="teck-selling-btn button32432 mt-3  " href="#" role="button">SHOP NOW!</a></Link>
                  

                </div>

              </div>

            </div>
          </div>
        </section>

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
            <div className="footer-content-column   dsfsfdsfdscdsfds">
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

export default Collection