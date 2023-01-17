import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './SignupForm.css'
const SignupForm = () => {
  
  return (
    <div   className='ceterthediv'>


 <div    className='topone'>
    <h1  className='setHeadSpewl'>Welcome To Tatsu </h1>
    <h1  className='setHeadSpewl'>Threads</h1>


    <div  className='widthControl'  >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor.</p>
    </div>


    <div>
    <Link to={'/SignupForm2'}><button className='buttonyhbnji' >Get Started</button></Link>
    </div>
</div> 









    </div>
  )




}

export default SignupForm