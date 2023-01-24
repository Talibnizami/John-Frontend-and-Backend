import React, { useState } from 'react'
import './AddtoCard.css'
 import plus  from './plus.svg';
 import bb from '../assets/images/menu-icon.svg'
import logo from '../assets/images/header-logo-1.svg'
import man from '../assets/images/user.svg'
import shopping from '../assets/images/shopping-icon.svg'
 import Minus   from'./minus.svg';
 import Heart from './twitter-heart.png'
 import Delete from './delete-icn.svg'
 import shirt  from '../assets/images/shirt-2.png'
 import dd from  '../assets/images/footer-logo.png'
 import image from './images/veg.png'
 import caroImage from '../assets/images/banner-img.png'
 import Header from './Header/Header';

const AddtoCard = () => {
    const [product1,Setproduct1 ] = useState(1)
    const [product2,Setproduct2 ] = useState(1)
   const [price, setPrice ] = useState(2)
   const [price1, setPrice1 ] = useState(2)
   console.log(typeof price) 
    return (
      <div>
        <div className='bg-black py-1  text-center	  text-white'> Spend $50 for free shipping</div>
  
        <Header />
     <div class="CartContainer   mt-10">
          <div class="Header">
            <h3 class="Heading">QUANTITY</h3>
            <h3 class="Heading">QUANTITY</h3>
            <h3 class="Heading">Total</h3>
  
          </div>
  
          <div class="Cart-Items">
              <div class="image-box">
                <img src={shirt} style={{ "height":"120px" }} />
              </div>
              <div class="about">
                <h1 class="title">Apple Juice</h1>
                {/* <h3 class="subtitle">250ml</h3> */}
                {/* <img src={image} style={{ "height":"30px" }}/> */}
              </div>
              <div class="counter">
                <div class="btn" onClick={()=>{
                  Setproduct1(product1+1)

                  setPrice( (value)=>{
      setPrice(price1+ value)
                   })
              }}   >+</div>
                <div class="count">{product1}</div>
                <div class="btn" onClick={(e)=>{
  e.preventDefault()
  if(product1 != 1 ){
                      
      Setproduct1(product1-1)
      setPrice( price - price1  )     
  }
                  
              }} >-</div>
              </div>
              <div class="prices">
                <div class="amount">${price}</div>
                {/* <div class="save"><u>Save for later</u></div>
                <div class="remove"><u>Remove</u></div> */}
              </div>
          </div>
  
        
        <hr/> 
        <div class="checkout">
        <div class="total">
          <div>
            <div class="Subtotal">Sub-Total</div>
            <div class="items">{product1} items</div>
          </div>
          <div class="total-amount">${price}</div>
        </div>
        <button class="buttondcdscds"  onClick={()=>{
          alert('Working On Project ')
        }}   >Checkout</button></div>
     </div>
  
  
  
  
      <div className="pg-footer">
        <footer className="footer">
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
                <input className='border-1  kkll border-whites rounded-sm px-4 py-1'  placeholder='Email Address' type="text" name="" id="" />
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

export default AddtoCard
