
import './viewCharity.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { __paymentdoneapiurl } from '../../API_URL'


function ViewCharity() {

  const [charitydetails, setCharityDetails] = useState([])

  useEffect(() => {

    axios.get(__paymentdoneapiurl).then((response) => {
      setCharityDetails(response.data)
    }).catch((err) => {
      console.error("consignment data not fetch", err)
    })


  }, [])


  return (
    // <div>
    //   <h1>View Charity Page</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>User ID</th>
    //         <th>Amount</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {charitydetails.map((charity) => (
    //         <tr key={charity._id}>

    //           <td>{charity._id}</td> 
    //           <td>{charity.userId}</td>
    //           <td>{charity.amount}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div>
  <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
    View Charity Page
  </h1>
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      margin: "0 auto",
      backgroundColor: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}
  >
    <thead>
      <tr>
        <th
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            textAlign: "left",
            padding: "12px",
            fontSize: "16px"
          }}
        >
          ID
        </th>
        <th
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            textAlign: "left",
            padding: "12px",
            fontSize: "16px"
          }}
        >
          User ID
        </th>
        <th
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            textAlign: "left",
            padding: "12px",
            fontSize: "16px"
          }}
        >
          Amount
        </th>
      </tr>
    </thead>
    <tbody>
      {charitydetails.map((charity, index) => (
        <tr
          key={charity._id}
          style={{
            backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
            cursor: "pointer"
          }}
        >
          <td style={{ border: "1px solid #ddd", padding: "10px", color: "#555" }}>
            {charity._id}
          </td>
          <td style={{ border: "1px solid #ddd", padding: "10px", color: "#555" }}>
            {charity.userId}
          </td>
          <td style={{ border: "1px solid #ddd", padding: "10px", color: "#555" }}>
            {charity.amount}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default ViewCharity;