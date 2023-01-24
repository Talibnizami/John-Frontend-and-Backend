import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import axios from 'axios';
import './modal.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Name ,setName] = useState()
  const [Price ,setPrice] = useState()
const [Description ,setDescription] = useState()
const [Input ,setInput] = useState()
const [category ,Setcategory] = useState()
const getInitialState = () => {
    const value = "Shirt";
    return value;
  };
  
  const [value, setValue] = useState(getInitialState);
  
  const handleChange = (e) => {
    Setcategory(e.target.value);
  };
  
const sendData = (e)=>{
    handleClose()
    console.log(e);
let id  = e

axios.post(`http://localhost:8000/api/v1/update/${id}`, {
     
    name : Name , 
    price : Price , 
    description : Description , 
    category : category, 
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}




  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <label htmlFor="" className=' text-black'   >Name  :</label>
        <input  onChange={(e)=>{
setName(e.target.value)
           }}  type="text" id="name" name="name" placeholder="Enter Prouct Name ." class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
 <label for="twitter" class="block mb-2 font-bold text-black">Price</label>
           <input    onChange={(e)=>{
setPrice(e.target.value)
           }}  type="number" required='true'  id="twitter" name="twitter" placeholder="Enter Product Price" class="border  border-gray-300 shadow p-3 w-full rounded mb-"/>

<div class="mb-5">
          
          <label for="twitter" class="block mb-2 font-bold text-black">Category</label>
          <select  class="border  border-gray-300 shadow p-3 w-full rounded mb-"  value={value} onChange={handleChange}>
       <option value="Shirt">Shirt</option>
       <option value="Trouser">Trouser</option>
       <option value="T-Shirt">T-Shirt</option>
       <option value="Shirt">Shirt</option>
       <option value="Cap">Cap</option>
     </select>
     <p>{`You selected ${category}`}</p>
          {/* <input     type="text" required='true'  id="twitter" name="twitter" placeholder="Enter Product Category" class=""/> */}
   
        </div>
        <label for="twitter" class="block mb-2 font-bold text-black">Description</label>
           {/* <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." /> */}
    <textarea style={{"height" : "100px"}}   onChange={(e)=>{
setDescription(e.target.value)
           }}  class="border  border-gray-300 shadow p-3 w-full rounded mb-"  id="" cols="30" rows="10"></textarea>
    
<div  className='flex justify-between'  >

          <button    className='asdasdasdasdasdalojubb1'  onClick={handleClose} > Close <i class="fa fa-window-close" aria-hidden="true"></i></button>
          <button   className='asdasdasdasdasdalojubb'      onClick={()=>{
            sendData(id)
          }}  >  Save  <i class="icon-ok"></i>
 </button>
</div>
        </Box>
      </Modal>
    </div>
  );
}