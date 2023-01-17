import React from 'react'
import image from '../assets/images/about-us-2.png'
import dd from '../assets/images/footer-logo.png'
import aa from '../assets/images/Ellipse 6.png'
import caroImage from '../assets/images/banner-img.png'
import vv from '../assets/images/memeber-img.png'
import './Contact.css'
import './Contact-us.css';
import './Contact2.css.css';
import Header from './Header/Header'
import { Link } from 'react-router-dom'
const Contact = () => {



  return (

    <div>
      <div className='bg-black  text-white'> Spend $50 for free shipping</div>
      <Header />
      <div className='mmqqoop'>

        <div className='iiyytt'>
          <h1 className='fgd mkjbbfss notfillmine'>Subscription</h1> <br />
          {/* <h1  className='fgd mkjbbfss'></h1> */}
          <p className='mkjbbfss awdw notfillmine'>Life shouldn't be so black & white. <br />
            The Brightest flame casts the <br /> darkest shadow.</p>
            <Link to={'/SignupForm1'}><button className='iutrvh'>Shop Now!</button></Link>   
        </div>


        <div className='ffmmkklloo'>
          <img src={caroImage} alt="" />
        </div>
      </div>

      <img src={image} alt="" />



      <div className=' max-w-full  items-center	  justify-center	rrhh flex flex-col py-16	bg-white h-72	   dsad'    >
        <h1 className='ndsjfi' >Tales Of Tatsu Threads</h1>
        <p className='Ssad' >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus. Pellentesque in sollicitudin tellus. Mauris dignissim viverra nunc, eu consectetur turpis vulputate a. Nullam vulputate condimentum nunc, a tempus tortor molestie sit amet. Morbi tempor, metus ut aliquet laoreet, augue sapien dictum nibh, id bibendum lorem arcu vitae orci. Proin finibus, turpis at aliquam posuere, arcu erat commodo massa, ac aliquet nulla ligula at augue. Sed eros tellus, consequat vel lobortis sit amet, dignissim quis metus. In nulla quam, luctus porttitor accumsan vitae, interdum a orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit magna at lacinia eleifend.</p>
      </div>


      <div className='flex items-center max-w-full sfasffs   rrff bg-white h-64	Ssad dsad py-40'>
        <h1 className='sabv  asdfas mx-10	mb-20'>Story of Tatsu Threads</h1>
        <p className='Ssad'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus. Pellentesque in sollicitudin tellus. Mauris dignissim viverra nunc, eu consectetur turpis vulputate a. Nullam vulputate condimentum nunc, a tempus tortor molestie sit amet. Morbi tempor, metus ut aliquet laoreet, augue sapien dictum nibh, id bibendum lorem arcu vitae orci. Proin finibus, turpis at aliquam posuere, arcu erat commodo massa, ac aliquet nulla ligula at augue. Sed eros tellus, consequat vel lobortis sit amet, dignissim quis metus. In nulla quam, luctus porttitor accumsan vitae, interdum a orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit magna at lacinia eleifend.</p>
      </div>

      <div className='flex rrff  items-center max-w-full asdxa bg-white h-64	Ssad dsad py-40'>

        <div>
          <h1 className='sabv  asdfas mx-10	mb-20 '>How did all Started</h1>

        </div>

        <div>
          <p className='Ssad'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus. Pellentesque in sollicitudin tellus. Mauris dignissim viverra nunc, eu consectetur turpis vulputate a. Nullam vulputate condimentum nunc, a tempus tortor molestie sit amet. Morbi tempor, metus ut aliquet laoreet, augue sapien dictum nibh, id bibendum lorem arcu vitae orci. Proin finibus, turpis at aliquam posuere, arcu erat commodo massa, ac aliquet nulla ligula at augue. Sed eros tellus, consequat vel lobortis sit amet, dignissim quis metus. In nulla quam, luctus porttitor accumsan vitae, interdum a orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit magna at lacinia eleifend.</p>
        </div>
      </div>



      {/*  Carousel*/}
      <div>
        <h1 className='text-6xl mt-12'>Our Testimomials</h1>
        <div class="testimonials-section">
          <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav" />
          <input type="radio" name="slider" title="slide2" class="slider__nav" />
          <input type="radio" name="slider" title="slide3" class="slider__nav" />
          <input type="radio" name="slider" title="slide4" class="slider__nav" />
          <input type="radio" name="slider" title="slide5" class="slider__nav" />
          <div class="slider__inner">
            <div class="slider__contents">
              <img src={aa} alt="" />
              <quote>&rdquo;</quote>
              <p class="slider__txt">We love you guys. It's easy to order, we get shipments quick and my rep solves tough problems the right way. We get answers that work.</p>
              <h2 class="slider__caption mt-16">Rhonda | NylonCraft</h2>
            </div>
            <div class="slider__contents">
              <img src={vv} alt="" />
              <quote>&rdquo;</quote>
              <p class="slider__txt">You all bend over backwards to get it done. Inside sales and the Account Managers are great! It's your service...you all know that it's not just about taking orders </p>
              <h2 className='slider__caption  mt-16'>Jared | Rexam</h2>
            </div>
            <div class="slider__contents">
              <img src={aa} alt="" />
              <quote>&rdquo;</quote>
              <p class="slider__txt">It's the long-term relationship we have with Proheat that keeps me calling you guys. I trust you, you're quick, and everybody </p>
              <h2 class="slider__caption">Chris | C&M Fine Pack</h2>
            </div>
            <div class="slider__contents">
              <img src={vv} alt="" />
              <quote>&rdquo;</quote>
              <p class="slider__txt">You answer my questions, always takes care of problems, and I never have a hassle.</p>
              <h2 class="slider__caption">Rex | LNP Engineering Plastics</h2>
            </div>
            <div class="slider__contents">
              <img src={vv} alt="" />
              <quote>&rdquo;</quote>
              <p class="slider__txt">Proheat's staff are all so friendly and everybody goes above and beyond. Everyone is courteous, everything is quick and you get us what we need. I have to shop around for everything and we ALWAYS come back to Proheat.</p>
              <h2 class="slider__caption">Darlene | Russel Stover</h2>
            </div>
          </div>
        </div>
      </div>




      <div>

        <div class="pg-footer">
          <footer class="footer">
            {/* <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg> */}
            <div class="footer-content">
              <div class="footer-content-column">
                <div class="footer-logo">
                  <a class="footer-logo-link" href="#">
                    <span class="hidden-link-text">LOGO</span>
                    <img src={dd} alt="" />
                  </a>
                </div>
                <div class="footer-menu">
                  <h2 class="footer-menu-name"> Get Started</h2>
                  <ul id="menu-get-started" class="footer-menu-list">
                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                      <a href="#">Start</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                      <a href="#">Documentation</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                      <a href="#">Installation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-content-column">
                <div class="footer-menu">
                  <h2 class="footer-menu-name"> Company</h2>
                  <ul id="menu-company" class="footer-menu-list">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="#">Contact</a>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                      <a href="#">News</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div class="footer-menu">
                  <h2 class="footer-menu-name"> Legal</h2>
                  <ul id="menu-legal" class="footer-menu-list">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                      <a href="#">Privacy Notice</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-content-column">
                <div class="footer-menu">
                  <h2 class="footer-menu-name"> Quick Links</h2>
                  <ul id="menu-quick-links" class="footer-menu-list">
                    <li class="menu-item menu-item-type-custom menu-item-object-custom">
                      <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom">
                      <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="#">Security</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="#">Blog</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                      <a href="#">Customers</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="#">Reviews</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-content-column">
                <div class="footer-call-to-action">
                  <h2 class="footer-call-to-action-title"> Let's Chat</h2>
                  <p class="footer-call-to-action-description"> Have a support question?</p>

                  <div className='adsufv'>
                    <input className='border-1  kkll border-whites rounded-sm px-4 py-1' placeholder='Email Address' type="text" name="" id="" />
                    <button className='nnju  border-black text-xl text-black mt-6 px-11 py-4 '>SUBSCRIBE</button>
                  </div>
                </div>
                <div class="footer-call-to-action">
                  <h2 class="footer-call-to-action-title"> You Call Us</h2>
                  <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> Ahmed</a></p>
                </div>
              </div>

            </div>

          </footer>
        </div>
      </div>



    </div>


  )
}

export default Contact