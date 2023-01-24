import React from 'react'
import './AllProduct.css'
import Header from './Header/Header'
import './subcription.css'
import caroImage from '../assets/images/banner-img.png'
import axios from "axios";
import { useNavigate , Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import Footer from './Footer'

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/products`);
      console.log("response: ", response);
      console.log(products);
      setLoadProduct(!loadProduct)
      setProducts(response.data.data.reverse());
    } catch (error) {
      console.log("error in getting all products", error);
    }
  };

  useEffect(() => {
    console.log('asdasd')

    
    getAllProducts()
    // return () => {
    //   console.log('Cleanup Function');
    //  }
}, [])




  return (
    <div>
<div className='bg-black  text-white'> Spend $50 for free shipping</div>
      <Header />
      <div className='mmqqoop'>

        <div className='iiyytt'>
          <h1 className='fgd mkjbbfss notfillmine'>Subscription</h1> <br />
          {/* <h1  className='fgd mkjbbfss'></h1> */}
          <p className='mkjbbfss awdw notfillmine'>Life shouldn't be so black & white. <br />
            The Brightest flame casts the darkest shadow.</p>
          {/* <button className='iutrvh'>Shop Now!</button> */}
          <Link to={'/SignupForm1'}><button className='iutrvh'>Shop Now!</button></Link> 
        </div>


        <div className='ffmmkklloo'>
          <img src={caroImage} alt="" />
        </div>
      </div>



<div  className='asfddsfdsfdsmkj' >


{products.map((eachProduct, i) => (   
  <div   key={i}  class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			<img src={eachProduct.imageUrl} alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory  fdsfdsfdsfdsfds text-lg  font-semibold">{eachProduct.name}</span>
			<h4  className='fdsfdsfdsfdsfds1'   ><a >{eachProduct.category}</a></h4>
			<p  className='text-black'  >{eachProduct.description}</p>
			<div class="product-bottom-details">
				<div class="product-price">${eachProduct.price}</div>
				<div class="product-links">
          <Link  to={'/Signup3'}  state={{
            id : eachProduct._id
          }}  >

                <button    class="bg-red-700 hover:bg-black text-white font-bold py-4 px-4 rounded-full">
                <i class="fa-solid fa-cart-shopping"></i>   Buy Now  
</button>
          </Link>
					
				</div>
			</div>
		</div>
	</div>   
)) } 

   











</div>

<Footer/>
        
    </div>
  )
}

export default AllProduct