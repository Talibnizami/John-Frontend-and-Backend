import React from 'react'
import './membership-vip-member.css';
import '../App.css'
import logo from '../assets/images/admin.png'
import { Link } from "react-router-dom";
const MembershipVip = () => {
  return (
    <>
<div className="main flex flex-col ">

<div className="head flex flex-col  gjhas items-center	">
  <div className='flex  items-center'>
  <img src={logo} alt="" />
  <div className=" flex flex-col">
  <h3  className='text-2xl'>Ahmed</h3> 
  <h5 className='ali text-blue-600 ' >ADMIN</h5>
  </div>
  </div>
</div>


{/* Secod Part  */}

<div className="secondpart ml-60  flex items-center w-90  ">

    {/* <h3>From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</h3> */}
    <div className="navbar 	   border-2  border-red">
    <ul className='list-none flex flex-col text-xl '>
      



    <Link to={'/DashbordOrderAdmin'}><li className='py-6 px-20 ' ><a href="#">DASHBOARD</a></li></Link>
    <Link to={'/MyreviewAdmin'}><li className='py-6   ' ><a href="#">MY REVIEW</a></li></Link>
    <Link to={'/MembershipVip'}><li className='py-6   bg-black text-white ' ><a href="#">PAYMENT</a></li></Link>
    <Link to={'/'}><li className='py-6 text-black   ' ><a href="#">LOGOUT</a></li></Link>

                  {/* <li className='py-6 px-20 ' ><a href="#">DASHBOARD</a></li>
                  <li className='py-6 ' ><a href="#">MY REVIEW</a></li>
                  <li className='py-6    ' ><a href="#">Membership</a></li>
                  <li className='py-6  ' ><a href="#">LOGOUT</a></li> */}
                </ul>
    </div>
   


    <div class="Payment-history membership-history  ml-1   w-11/12">
                      <div className="trWrapper      ">
                    <h1 className='memberShip  ml-9'>MEMBERSHIP</h1>

                    <div className="combine  border   bg-slate-200 dfsk">
                    <div  className='second'>
                        <ul  className='flex ffdsass  m-9' >

                             <li className='' >Membership </li>
                             <li className='' >Expire 	</li>
                             <li className='' >Duration		</li>
                             <li className='' >Re-New	</li>
                             <li className='' >Pricing</li>
                        </ul>
                     </div>
                     <div  className='second'>
                        <ul  className='flex ffdsass' >

                             <li className='pl-10' >451526</li>
                             <li className='' >11/04/22	</li>
                             <li className='' >3 Months	</li>
                             <li className='' >RENEW</li>
                             <li className='pr-10' >500.00</li>
                        </ul>
                     </div>
                    
                     </div>
                     </div>
            
        </div>
    </div>
    </div>
    </>
  )
}

export default MembershipVip