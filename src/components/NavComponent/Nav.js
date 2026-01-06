import './Nav.css';
import { Link } from 'react-router-dom';
import Auth from '../../AuthComponent/Auth';
import { useState, useEffect } from 'react';


function Nav() {

  const [NavContent, setNavContent] = useState();


  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "admin") {
        setNavContent(
          <>
            <div id="templatemo_menu">
              <ul>
                <li><a class="current"><Link to="/admin">Admin Home</Link></a></li>
                <li><a><Link to="/manageusers">Manageusers</Link></a></li>
                <li><a><Link to="/viewcharity">View Charity</Link></a></li>

                <li><a><Link to="/manageconsignment">Consignment</Link></a></li>

                {/* <li><a><Link to="/EPAdmin">Edit profile</Link></a></li>
                <li><a><Link to="/CPAdmin">Change password</Link></a></li> */}

                <li class="dropdown">
                  <a href="#" class="dropbtn">Settings</a>
                  <div class="dropdown-content">
                    <Link to="/EPAdmin">Edit Profile</Link>
                    <Link to="/CPAdmin">Change Password</Link>
                  </div>
                </li>
                <li className="dropdown">
                  <span className="dropbtn">Category</span>
                  <div className="dropdown-content">
                    <Link to="/AddCategory">Add Category</Link>
                    <Link to="/AddSubCategory">Add Sub Category</Link>
                  </div>
                </li>

                <li><a><Link to="/logout">Logout</Link></a></li>
                <h3 style={{ 'color': 'white' }} >Welcome Admin : {localStorage.getItem("email")}</h3>
              </ul>
            </div>

          </>);
      }
      else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user") {
        setNavContent(
          <>
            <div id="templatemo_menu">

              <ul>
                <li><a class="current"><Link to="/user">User Home</Link></a></li>
                <li><a><Link to="/EPUser">Edit profile</Link></a></li>
                <li><a><Link to="/CPUser">Change password</Link></a></li>
                <li><a><Link to="/viewCategory">View categories</Link></a></li>
                <li><a><Link to="/vieworder">View Orders</Link></a></li>
                <li><a><Link to="/Charity">Charity</Link></a></li>
                <li><a><Link to="/logout" style={{ 'color': 'red' }}>Logout</Link></a></li>
              </ul>

            </div>

          </>);
      }
      else {
        setNavContent(
          (
            <>
              <div id="templatemo_menu">
                <ul>
                  <li><Link to=""><a class="current">Home</a></Link></li>
                  <li><Link to="/about"><a  >About</a></Link></li>

                  <li><Link to="/service"><a  >Service</a></Link></li>
                  <li><Link to="/login"><a  >Login</a></Link></li>
                  <li><Link to="/register"><a>Register</a></Link></li>
                  <li><Link to="/aichat"><a>AI BOT</a></Link></li>
                </ul>
              </div>
            </>)
        );
      }
    }, 1);
  }, []);




  return (
    <>
      <Auth />
      {NavContent}

    </>
  );
}

export default Nav;




