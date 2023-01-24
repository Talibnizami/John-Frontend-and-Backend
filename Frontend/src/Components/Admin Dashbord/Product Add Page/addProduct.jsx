import React, { useState } from 'react'
import './Product.css'
import axios from 'axios'




const AddProduct = () => {
const [Name ,setName] = useState()
const [Price ,setPrice] = useState()
const [Description ,setDescription] = useState()
const [Input ,setInput] = useState()
const [category ,Setcategory] = useState()
const baseUrl = 'http://localhost:8000/api/v1'


const getInitialState = () => {
  const value = "Shirt";
  return value;
};

const [value, setValue] = useState(getInitialState);

const handleChange = (e) => {
  setValue(e.target.value);
};


const sendData = ()=>{
if(!Name || !Input || !Price || !Description ) {
    alert('Product Not Added')
}else{
  alert('Product Added ')
  let formData = new FormData();

console.log(Input);
console.log(value)
formData.append("Name", Name);
formData.append("Price", Price);
formData.append("Description", Description);
formData.append("Image", Input );
formData.append("category", value );


  axios({
    method: 'post',
    url: `${baseUrl}/product`,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
})
    .then(res => {
        console.log(`upload Success` + res.data);
    })
    .catch(err => {
        console.log("error: ", err);
    })

}

   
}

  return (
    <div>
 <div class="bg-slate-200    asddasdasdasdasdas flex items-center">
   <div class="w-full elokpkk">
     <h2 class="text-center text-black font-bold text-2xl uppercase dasdsd mb-10">Add Product </h2>
     <div class="asdasdasdasdasdas  p-6  rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       
         <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-white">Name</label>
           <input  onChange={(e)=>{
setName(e.target.value)
           }}  type="text" id="name" name="name" placeholder="Enter Prouct Name ." class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>

         <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-white">Price</label>
           <input    onChange={(e)=>{
setPrice(e.target.value)
           }}  type="number" required='true'  id="twitter" name="twitter" placeholder="Enter Product Price" class="border  border-gray-300 shadow p-3 w-full rounded mb-"/>
    
         </div>
         <div class="mb-5">
          
           <label for="twitter" class="block mb-2 font-bold text-white">Category</label>
           <select  class="border  border-gray-300 shadow p-3 w-full rounded mb-"  value={value} onChange={handleChange}>
        <option value="Shirt">Shirt</option>
        <option value="Trouser">Trouser</option>
        <option value="T-Shirt">T-Shirt</option>
        <option value="Shirt">Shirt</option>
        <option value="Cap">Cap</option>
      </select>
      <p>{`You selected ${value}`}</p>
           {/* <input     type="text" required='true'  id="twitter" name="twitter" placeholder="Enter Product Category" class=""/> */}
    
         </div>
         <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-white">Description</label>
           {/* <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." /> */}
    <textarea style={{"height" : "100px"}}   onChange={(e)=>{
setDescription(e.target.value)
           }}  class="border  border-gray-300 shadow p-3 w-full rounded mb-"  id="" cols="30" rows="10"></textarea>
         </div>
         <div class="file-input">
      <input  onChange={(event)=>{
        		setInput(event.target.files[0]);
            console.log(Input)
                var url = URL.createObjectURL(Input)
                document.getElementById("img22").innerHTML = `<img src="${url}" alt="" id="img"> `
        // setInput(e.files[0])
      }}
        type="file"
        name="file-input"
        id="file-input"
        class="file-input__input"
      />
      <label class="file-input__label" for="file-input">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="upload"
          class="svg-inline--fa fa-upload fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
          ></path>
        </svg>
        <span>Upload file</span></label
      >
    </div>
      <div id='img22'   className='mkbdsds' >

      </div>
         <button  onClick={sendData}  class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Add Product </button>
       
     </div>
   </div>
 </div>





        
    </div>
  )
}

export default AddProduct