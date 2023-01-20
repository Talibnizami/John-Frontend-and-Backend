import React from 'react'
import './AllProduct.css'
import Header from './Header/Header'
import './subcription.css'
import caroImage from '../assets/images/banner-img.png'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from './Footer'
const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)


  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/product`);
      console.log("response: ", response);
      // console.log(products);
      // setLoadProduct(!loadProduct)
      // setProducts(response.data.data.reverse());
    } catch (error) {
      console.log("error in getting all products", error);
    }
  };

  useEffect(() => {
    console.log('asdasd')

    
    // return () => {
    //   getAllProducts()
    // }
}, [])




  return (
    <div>
      <button onClick={getAllProducts} >DDSFDSFDSf</button>
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

<div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			<img src="https://i.imgur.com/xdbHo4E.png" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>$230.99</div>
				<div class="product-links">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Add Product 
</button>
					
				</div>
			</div>
		</div>
	</div>
<div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			<img src="https://i.imgur.com/xdbHo4E.png" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>$230.99</div>
				<div class="product-links">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Add Product 
</button>
					
				</div>
			</div>
		</div>
	</div>

</div>

<Footer/>
        
    </div>
  )
}

export default AllProduct