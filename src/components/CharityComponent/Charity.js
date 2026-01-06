import './Charity.css';
import axios from 'axios';
import { __paymentapiurl, __userapiurl } from '../../API_URL';
import { useState } from 'react';


function Charity() {

  const[email ] = useState(localStorage.getItem("email"));

  const [amount, setAmount] = useState('0.00');

 
  const MakeCharity = async () => {

    const response = await axios.post(__paymentapiurl, { "amount": amount , "email": email });
    window.open(response.data.url);
    console.log(response);
  };

  return (
    <>
      <div class="charity-container">
        <h2>Make a Charity Donation</h2>
        <div class="charity-input">
          <label for="amount">Donation Amount:</label>
          <h1>User : {email}</h1>
          <input type="number"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount} />
          <button onClick={MakeCharity} >Click to make charity</button>
        </div>
      </div>

      </>
      );
}

export default Charity;


