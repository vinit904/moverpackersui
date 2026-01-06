import './User.css';
import { Link } from 'react-router-dom';

function UserHome() {


  return (
    <>

      <div className='user-home-banner'>
        <div className='banner-overlay'>
          <h1>Welcome MOVER & PACKER </h1>
          <p>Your trusted platform for Shifting and Packing Services</p>
          <li><a><Link to="/addConsignment">Add Consignment</Link></a></li>
        </div>
      </div>



    </>
  );


}

export default UserHome;

