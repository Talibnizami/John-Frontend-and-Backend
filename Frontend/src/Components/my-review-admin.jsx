import React from 'react'
import './membership-vip-member.css';
import '../App.css'
import logo from '../assets/images/admin.png'
import { Link } from "react-router-dom";
const MyreviewAdmin = () => {
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

<div className="secondpartert ml-60  flex items-center w-90  ">
    <div className="navbar">
    <ul className='list-none flex flex-col text-xl '>
    <Link to={'/DashbordOrderAdmin'}><li className='py-6 px-20 text-black ' ><a href="#">DASHBOARD</a></li></Link>
    <Link to={'/MyreviewAdmin'}><li className='py-6  bg-black text-white  ' ><a href="#">MY REVIEW</a></li></Link>
    <Link to={'/MembershipVip'}><li className='py-6    text-black ' ><a href="#">PAYMENT</a></li></Link>
    <Link to={'/'}><li className='py-6 text-black   ' ><a href="#">LOGOUT</a></li></Link>
   
                </ul>
    </div>

  <div className="wrapper self-start flex flex-col items-start">

<div className=' ml-10 self-start gsvcf flex flex-col items-start pb-3	' >
<h1   className='Text-size-set mb-10'>My Reviews</h1>
<div class="grid grid-cols-1 gap-4 pr-10 ">
  <div  className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint debitis cupiditate voluptate iste atque illo, ipsa nostrum ab voluptates enim quas, libero, aperiam itaque ipsum perferendis reiciendis perspiciatis aspernatur. Tenetur.</div>
</div>
<div>

</div>

</div>
<div className=' ml-10 self-start gsvcf flex flex-col items-start pb-3	' >
<h1   className='Text-size-set mb-10'>My Reviews</h1>
<div class="grid grid-cols-1 gap-4 pr-10 ">
  <div  className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint debitis cupiditate voluptate iste atque illo, ipsa nostrum ab voluptates enim quas, libero, aperiam itaque ipsum perferendis reiciendis perspiciatis aspernatur. Tenetur.</div>
</div>
<div>

</div>

</div>


</div>
    
    </div>
    </div>
    </>
  )
}

export default MyreviewAdmin