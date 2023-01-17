import React, { useRef } from 'react'
import './LoginPage2.css'
import { useState } from 'react';
import axios from 'axios';
import image from '../assets/images/account-img.png'
import { Navigate , Link} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LogInPage = () => {


	const firstNameA = useRef()
	const emailA = useRef()
	const passwordA = useRef()
	const navigate = useNavigate();
	const [firstName, setfirstName] = useState()
	const [email, setEmail] = useState()
	const [password, setepassword] = useState()
let  baseUrl = "http://localhost:8000/api/v1"
const signup = async () => {
    try {
     let data  = await axios.post(`${baseUrl}/signup`, {
        firstName: firstName,
        email: email,
        password: password
      });
console.log(data);
navigate('/Login', { replace: true })
    } catch (error) {
      console.log("err>>> ", error)
    }
  }

  return (
    <div>

<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={image} alt="IMG"/>
				</div>

				<div   class="login100-form validate-form">
<span  className='askjcbasiucaaa'>One Last Thing</span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada me</p>
			
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100"  onBlur={()=>{
console.log(firstNameA.current.value)
						}}  onChange={(e) => {
              setfirstName(e.target.value)
            }}    type="text" name="email"     ref={firstNameA}  placeholder="Full Name"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" ref={emailA}  onBlur={()=>{
console.log(emailA.current.value)
						}}  onChange={(e) => {
              setEmail(e.target.value)
            }}   type="text" name="email" placeholder="Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100"   onBlur={()=>{
console.log(passwordA.current.value)
						}}    ref={passwordA}    onChange={(e) => {
              setepassword(e.target.value)
            }} type="password" name="pass" placeholder="Password"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" onChange={(e) => {
    // setrepassword(e.target.value)
            }}    name="pass" placeholder=" ReType  Password"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="container-login100-form-btn">
					<button   type='submit' onClick={()=>{
						signup()
					}}  class="login100-form-btn">
							Signup
						</button>
						
					</div>

				
				
				</div>
			</div>
		</div>
	</div>





    </div>
  )
}

export default LogInPage