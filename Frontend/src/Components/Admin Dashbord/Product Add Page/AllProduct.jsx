import React from 'react'
// import '../../AllProduct.css'
import './allproduct.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import './'
export const AllProductDashboad = () => {
    const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)


  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/products`);
      console.log("response: ", response);
      console.log(products);
      setLoadProduct(!loadProduct)
      setProducts(response.data.data.reverse());
    //   console.log(response.data.data.reverse())
    } catch (error) {
      console.log("error in getting all products", error);
    }
  };

  useEffect(() => {
    console.log('asdasd')

    
    getAllProducts()
    // return () => {
    //     console.log('Cleanup Function');
    //  }
}, [])
  useEffect(() => {
    console.log('ASdsa')
}, [loadProduct])



const deleteData = async (id)=>{
    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/customer/${id}`)
      console.log("response: ", response.data);
      setLoadProduct(!loadProduct)
    } catch (error) {
      console.log("error in getting all products", error);
    }
  }
  return (
    <div>
        
        
        <h1 className='dasfasfkasfhoiasbfbfa'  >AllProduct  Details  </h1>




<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Product  Price
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Product Category
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    {/* <div class="flex items-center">
                        Price
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div> */}
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>



            {products.map((value)=>(
                <>
            <tr class=" border-b    bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {value.name}
                </th>
                <td class="px-6 py-4">
                ${value.price}
                </td>
                <td class="px-6 py-4">
                   {value.category}
                </td>
                <td     onClick={()=>{
                    deleteData(value._id)
                }}  style={{"color" : "red"}} class="px-6 py-4  ">
                Delete
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
           </>
            ))}
            
           
        </tbody>
    </table>
</div>


    </div>




  )
}