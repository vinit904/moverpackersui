
import './App.css';

import { Route , Routes } from 'react-router-dom';

//section
import Home from './components/HomeComponent/Home';
import Nav from './components/NavComponent/Nav';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Footer from './components/FooterComponent/Footer';

//Admin component
import CPAdmin from './components/AdminComponent/CPAdminComponent/CPAdmin';
import EPAdmin from './components/AdminComponent/EPAdminComponent/EPAdmin';
import Addcategory from './components/AdminComponent/AddCategoryComponent/AddCategory';
import AddSubCategory from './components/AdminComponent/AddSubCategoryComponent/AddSubCategory';

//User component
import CPUser from './components/UserComponent/CPUserComponent/CPUser';
import EPUser from './components/UserComponent/EPUserComponent/EPUser';
import ViewCategory from './components/UserComponent/ViewCategoryComponent/viewCategory';
import ViewSubCategory from './components/UserComponent/ViewSubCategoryComponent/viewSubCategory';






import Header from './components/HeaderComponent/Header';
import Admin from './components/AdminComponent/Admin';
import UserHome from './components/UserComponent/User';
import Logout from './components/Logout/Logout';
import ManageUsers from './components/ManageUserComponent/ManageUser';




import Verifyuser from './components/VerifyUserComponent/VerifyUser';




import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


import Charity from './components/CharityComponent/Charity';
import Success from './components/successComponent/Success';
import Payment from './components/paymentComponent/Payment';
import AddConsignment from './components/addConsignmentComponent/addConsignment';
import ViewCharity from './components/ViewCharityComponent/viewCharity';
import ManageConsignment from './components/ManageConsignment/ManageConsignment';
import Service from './components/ServiceComponent/Service';
import About from './components/AboutComponent/About';
import AIClient from './components/AIClientComponent/AIClient';
import TrackConsignment from './components/UserComponent/TrackConsignmentComponent/TrackConsignment';

function App() {




  return (
  <>
  <Nav/>

  {/* <Header /> */}
   
  <Routes>
    <Route path="" element={<Home/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/vmail/:email" element={<Verifyuser/>}></Route>
    <Route path="/about" element={<About/>}></Route>
   

    <Route path="/login" element={<Login/>}></Route>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path="/manageusers" element={<ManageUsers/>}></Route>

    {/* AdminComponent */}
    <Route path="/CPAdmin" element={<CPAdmin/>}></Route>
    <Route path="/EPAdmin" element={<EPAdmin/>}></Route>
    <Route path="/AddCategory" element={<Addcategory/>}></Route>
    <Route path="/AddSubCategory" element={<AddSubCategory/>}></Route>
    <Route path="/viewcharity" element={<ViewCharity/>}></Route>
    <Route path="/manageconsignment" element={<ManageConsignment/>}></Route>

    

    {/* UserComponent */}
    <Route path="/CPUser" element={<CPUser/>}></Route>
    <Route path="/EPUser" element={<EPUser/>}></Route>
    <Route path="/viewCategory" element={<ViewCategory/>}></Route>
    <Route path="/searchsc/:cnm" element={<ViewSubCategory/>}></Route>

    <Route path="/addConsignment" element={<AddConsignment/>}></Route>
    <Route path="/vieworder" element={<TrackConsignment/>}></Route>

    

    {/* Payment Component */}
    <Route path="/Charity" element={<Charity/>}></Route>
    <Route path="/payment/:uid/:amt" element={<Payment/>}></Route>
    <Route path="/success" element={<Success/>}></Route>
    <Route path="/viewcharity" element={<ViewCharity/>}></Route>



    
    <Route path="/user" element={<UserHome/>}></Route>
    <Route path="/logout" element={<Logout/>}></Route>
     
    <Route path="/service" element={<Service/>}></Route>
    <Route path="/aichat" element={<AIClient/>}></Route>
    

  </Routes>

  

  <Footer />
      



   

  </>
  );
}

export default App;
