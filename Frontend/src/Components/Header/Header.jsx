import React, { useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import { Drawer, Button, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from '@ant-design/icons';
import Svg from '../../assets/images/header-logo-1.svg'
import bannerImg from '../../assets/images/banner-img.png';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import man from '../../assets/images/user.svg'
import shopping from '../../assets/images/shopping-icon.svg'
import logo from '../../assets/images/header-logo-1.svg'
import bb from '../../assets/images/menu-icon.svg'
import caroImage from '../../assets/images/banner-img.png'
import { positions } from "@mui/system";


export default function Header() {

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [isVisible, setIsVisible] = useState(false);

    const showDrawer = () => { setIsVisible(true); };
    const closeDrawer = () => { setIsVisible(false); };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
      };

      
    const styles = {
        button: {
            background: "transparent",
            outline: "none",
            color: "black",
            border: "none",
            fontSize: 26,
            position : "relative",
            left : 18,
            top : 16

        },
    };



const getData = ()=>{
    
}


    
    return (
        <div>


            <div className='mmmmiok' id="navHeader" >
                <div className='mmnnhhyy'>
                    {/* <img src={bb} className='sasaasjmj' alt="Not Found" /> */}

                    {/* <nav> */}
                    <Button shape="circle" style={styles.button} onClick={showDrawer}>
                        <MenuOutlined style={{ color: "white" }} />
                    </Button>
                    {/* </nav> */}
                   

                    <img src={logo} alt="" />

                    {/* Inner Logo */}
                    <div className='setrtmn'>
                    <Link   onClick={()=>{
                        getData()
                    }} to={'/DashbordOrderAdmin'}><img    id="notALLog" className='pr-3' src={man} alt=""/></Link>
                        
                        <span className='text-white pr-3' > |</span>
                        <Link to={'/SignupForm1'}><img className='pr-3' src={shopping} alt="" /></Link>
                        

                    </div>

                </div>



                {/* Second */}

                {/* <div className='mmqqoop'> */}

                {/* <div className='iiyytt'>
            <h1 className='fgd mkjbbfss'>Do Well, Live Well &</h1> <br />
            <h1 className='fgd mkjbbfss'>Dress Really Well</h1><br />
            <p className='mkjbbfss awdw'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est</p>
            <button className='iutrvh'>Shop Now!</button>
          </div> */}


                {/* <div className='ffmmkklloo'>
            <img src={caroImage} alt="" />
          </div> */}
            </div>



            {/* </div> */}



            <Drawer
                visible={isVisible}
                placement="left"
                onClose={closeDrawer}
                
            >
                {/* <button type="button" class="btn-close text-reset" onClick={closeDrawer} data-bs-dismiss="offcanvas" aria-label="Close"></button> */}

                {/* <Divider /> */}
                <p id="nav-item"><Link to="/" class="text-white">Home</Link></p>
                <Divider />
                <p id="nav-item"><Link to="/about" class="text-white">About Us</Link></p>
                <Divider />
                <p id="nav-item"><Link to="/collection" class="text-white">Collection</Link></p>
                <Divider />
                <p id="nav-item"><Link to="/subcription" class="text-white">Subcription</Link></p>
                <Divider />
                <p id="nav-item"><Link to="/contactus" class="text-white">Contact Us</Link></p>
            </Drawer>

        </div>
    )
}