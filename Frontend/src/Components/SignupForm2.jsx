import React from 'react'
import shirt from '../assets/images/1.png'
import trouser from '../assets/images/2.png'
import shoe from '../assets/images/3.png'
import upper from '../assets/images/4.png'
import cap from '../assets/images/5.png'
import './SignupForm2.css'
import { Link } from "react-router-dom";
const SignupForm2 = () => {
  return (
    <div>
        {/*  */}
<div className='ceterthediv' >
<div  className='toponessssmko'>

<div  className='OuterDivFillUo'>

<Link to={'/'}> <div>   <button  className='VButoontherS' > SKIP THE QUIZ</button>  </div></Link>
   
<div>1 of 3</div>
</div>
<hr />




<div>
    <h1 className='secondHead' >Which New VIP Offer do you <br />  want?</h1>
</div>


<div>


    <div   className='edcvfr'>
    <h1  className='setHeadSizemko'>Buy 1 Get 2 <br />
Free Shirts
</h1>   
    <img src={shirt} alt="" />

    </div>
    <div  className='edcvfr'>
    <h1  className='setHeadSizemko'>Buy 1 Get 2 <br />
Free Shorts
</h1>
    <img src={trouser} alt="" />

    </div>
    <div  className='edcvfr'>
<h1  className='setHeadSizemko'>$15 Joggers</h1>
    <img src={shoe} alt="" />
    </div>
    <div  className='edcvfr'>
<h1  className='setHeadSizemko'>$20 Hoodies </h1>
    <img src={upper} alt="" />
    </div>
    <div className='edcvfr'>
    <h1  className='setHeadSizemko'>Buy 1 Get 2 <br />
Free Shirts
</h1>
    <img src={cap} alt="" />

    </div>

</div>





<div>
<Link to={'/SignupForm1'}><button  className='VButoontherS'>Previous</button></Link>
<Link to={'/Login'}><button  className='VButoontherS'>Next Step</button></Link>
   
    
</div>
</div>
</div>

    </div>
  )
}

export default SignupForm2