import React from 'react'
import Sidebar from './Sidebar'
import './Sidebar.css'
// import img from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fman%2F&psig=AOvVaw3hsuoqtL_xgdod30ZKJk-C&ust=1674161319129000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICamIj_0fwCFQAAAAAdAAAAABAE'
// import { Input } from '@chakra-ui/react'

const Dashbord = () => {
  return (
    
    <div>
   <div  className='flex '   >
<Sidebar/>

<div   className='bg-slate-200	   w-full		'  >


<div className='bg-red w-full   flex justify-between' >
  

  <input type="text"     placeholder='Search Here '   className='pl-4  asjdbasdvijasd' />


<div>



<div  style={{ 'margin-top' : '17px'}}    className='flex  items-center	  justify-between'  >

    <img className='asdjasbk'   src={'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg'} alt="" />
    <div>
        <h3 className='jasdhiavjf'  >Ahmed </h3>
       
    </div>
</div> 
</div>


</div>
</div>

        </div>


    </div>
  )
}

export default Dashbord