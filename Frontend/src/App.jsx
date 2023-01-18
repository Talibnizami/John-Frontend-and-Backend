import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import DashbordOrderAdmin from './Components/dashboard-vip-member'
import MembershipVip from './Components/membership-vip-member';
import OrderVipMember from './Components/Orders-vip-memeber'
import MyreviewAdmin from './Components/my-review-admin';
import Login from './Components/Login12';
import About from './Components/About';
import Contactuss from './Components/contactus';
import Tatsu from './Components/tatsu-landing-page';
import Collection from './Components/collection';
import Productdetail from './Components/product-detail'
import Subcription from './Components/subcription';
import Signup3 from './Components/Signup3';
import SignupForm from './Components/signupForm';
import AddtoCard from './Components/AddtoCard';
import SignupForm2 from './Components/SignupForm2';
import LogInPage from './Components/Signup';
import Header from './Components/Header/Header';
// import AdminDashboard from './Components/Admin Dashbord/AdminDashboard';
function App() {
  return (
    <div className="App">
      {/* <Collection/> */}
      {/* <Home/> */}
      {/* <Tatsu/> */}
      {/* <MyreviewAdmin/> */}
      {/* <About/> */}
      {/* <Contactuss/> */}
      {/* <Subcription/> */}
      {/* <SignupForm/> */}
      {/* <Signup3/>  */}
      {/* <LogInPage/> */}
      {/* <Login/> */}
      {/* <Login/> */}
      {/* <SignupForm/> */}
      {/* <SignupForm2/>       */}
       {/* <Third/> */}
      {/* <AddtoCard/> */}

      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/AddtoCard"} element={<AddtoCard/>} />
          <Route path={"/Signup"} element={<LogInPage />} />
          <Route path={"/SignupForm1"} element={<SignupForm />} />
          <Route path={"/SignupForm2"} element={<SignupForm2 />} />
          <Route path={"/SignupForm3"} element={<Signup3 />} />
          <Route path={"/subcription"} element={<Subcription />} />
          <Route path={"/contactus"} element={<Contactuss />} />
          <Route path={"/collection"} element={<Collection />} />
          <Route path={"/Tatsu"} element={<Tatsu />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/AddtoCard"} element={<AddtoCard />} />
          <Route path={"/DashbordOrderAdmin"} element={<DashbordOrderAdmin />} />
          <Route path={"/MyreviewAdmin"} element={<MyreviewAdmin />} />
          <Route path={"/MembershipVip"} element={<MembershipVip />} />
          <Route path={"/OrderVipMember"} element={<OrderVipMember />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
