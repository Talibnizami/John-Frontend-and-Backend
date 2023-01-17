import React from 'react'
import './membership-vip-member.css';
import logo from '../assets/images/admin.png'
import { Link } from "react-router-dom";
const OrderVipMember = () => {
  return (
    <>
<div className=" ">

<div className="head flex flex-col  gjhas items-center	">
  <div className='flex  items-center'>
  <img src={logo} alt="" />
  <div className="flex flex-col">
  <h3  className='text-2xl'>Ahmed</h3> 
  <h5 className='ali text-blue-600 ' >ADMIN</h5>
  </div>
  </div>
</div>

<div className="secondpart ml-60  flex items-center w-90  ">
    <div className="navbar 	   border-2  border-red">
    <ul className='list-none flex flex-col text-xl '>

    <Link to={'/DashbordOrderAdmin'}><li className='py-6 px-20 bg-black  ' ><a href="#">DASHBOARD</a></li></Link>
    <Link to={'/MyreviewAdmin'}><li className='py-6  bg-black  ' ><a href="#">MY REVIEW</a></li></Link>
    <Link to={'/MembershipVip'}><li className='py-6   bg-black text-white ' ><a href="#">PAYMENT</a></li></Link>
    <Link to={'/'}><li className='py-6 text-black   ' ><a href="#">LOGOUT</a></li></Link>


    <Link to={'/DashbordOrderAdmin'}><li className='py-6 px-20 bg-black  ' ><a href="#">DASHBOARD</a></li></Link>
    <Link to={'/MyreviewAdmin'}><li className='py-6  bg-black  ' ><a href="#">MY REVIEW</a></li></Link>
    <Link to={'/MembershipVip'}><li className='py-6   ' ><a href="#">PAYMENT</a></li></Link>
    <Link to={'/'}><li className='py-6 bg-black text-white ' ><a href="#">LOGOUT</a></li></Link>
                </ul>
    </div>
   
<div className='headingpdd' >
<h1   className='Text-size-set'>ORDERS HISTORY</h1>

<div class="grid fgh grid-cols-7 gap-19 justify-items-center ml-9 justify-center">
  <div className='py-10'  >Order No.	</div>
  <div className='py-10'  >Order Name	</div>
  <div className='py-10'  >Amount</div>
  <div className='py-10'  >Currency</div>
  <div className='py-10'  >Status</div>
  <div className='py-10'  >Status</div>
  <div className='py-10  mr-3'  >Delivery Date</div>
</div>
<div class="grid gsvcf grid-cols-7 gap-x-15 justify-items-center ml-9 justify-center">
  <div className='py-10'  >Order No.	</div>
  <div className='py-10'  >Order Name	</div>
  <div className='py-10'  >Amount</div>
  <div className='py-10'  >Currency</div>
  <div className='py-10'  >Status</div>
  <div className='py-10'  >Status</div>
  <div className='py-10  mr-3'  >Delivery Date</div>
</div>
<div class="grid gsvcf grid-cols-7 gap-19 justify-items-center ml-9 justify-center">
  <div className='py-10'  >Order No.	</div>
  <div className='py-10'  >Order Name	</div>
  <div className='py-10'  >Amount</div>
  <div className='py-10'  >Currency</div>
  <div className='py-10'  >Status</div>
  <div className='py-10'  >Status</div>
  <div className='py-10  mr-3'  >Delivery Date</div>
</div>
</div>

    
    </div>
    </div>
    </>
  )
}

export default OrderVipMember