import { useEffect, useState } from 'react'
import './ManageConsignment.css'
import axios from 'axios'
import { __consignmentapi , __trackingapi} from '../../API_URL'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// function ManageConsignment() {

//   const [condetails, setConDetails] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [edits, setEdits] = useState({})

//   const fetchList = async () => {
    
//     try {
//       const response = await axios.get(__consignmentapi + "fetch")
//       setConDetails(response.data)
//     } catch (err) {
//       console.error("consignment data not fetch", err)
//       setError('Failed to load consignments')
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => { fetchList() }, [])

//   const handleStatusChange = (id, value) => {
//     setEdits(prev => ({ ...prev, [id]: { ...(prev[id]||{}), status: value } }))
//   }

//   const handleCommentChange = (id, value) => {
//     setEdits(prev => ({ ...prev, [id]: { ...(prev[id]||{}), comment: value } }))
//   }

//   const handleUpdate = async (id) => {
//     const entry = edits[id]
//     if (!entry) { alert('No changes to update'); return }
//     try {
//       setLoading(true)
//       const body = { condition_obj: { _id: id }, content_obj: entry }
//       const res = await axios.post(__consignmentapi + 'update', body)
//       if (res.status === 200) {
//         alert('Updated successfully')
//         setEdits(prev => { const c = { ...prev }; delete c[id]; return c })
//         fetchList()
//       } else {
//         alert('Update failed')
//       }
//     } catch (err) {
//       console.error('update error', err)
//       alert('Update error')
//     } finally { setLoading(false) }
//   }

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this consignment?')) return
//     try {
//       setLoading(true)
//       const res = await axios.post(__consignmentapi + 'delete', { _id: id })
//       if (res.status === 200) {
//         alert('Deleted successfully')
//         fetchList()
//       } else {
//         alert('Delete failed')
//       }
//     } catch (err) {
//       console.error('delete error', err)
//       alert('Delete error')
//     } finally { setLoading(false) }
//   }

//   const handleChangeStatus = async (id, newStatus) => {
//     if (!window.confirm(`Change status to ${newStatus}?`)) return
//     try {
//       setLoading(true)
//       const body = { condition_obj: { _id: id }, content_obj: { status: newStatus } }
//       const res = await axios.post(__consignmentapi + 'update', body)
//       if (res.status === 200) {
//         alert('Status changed to ' + newStatus)
//         fetchList()
//       } else {
//         alert('Change status failed')
//       }
//     } catch (err) {
//       console.error('change status error', err)
//       alert('Change status error')
//     } finally { setLoading(false) }
//   }

//   return (
//     <>
//       <div style={{ padding: '20px', overflowX: 'auto' }}>
//         {loading && <div style={{marginBottom:12,color:'#4a5568'}}>Loading...</div>}
//         {error && <div style={{marginBottom:12,color:'crimson'}}>{error}</div>}
//         <table style={{width: '100%', borderCollapse: 'collapse'}}>
//           <thead>
//             <tr style={{ backgroundColor: '#4a5568', color: 'white' }}>
//               <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
//               <th style={{ padding: '12px', textAlign: 'left' }}>Category</th>
//               <th style={{ padding: '12px', textAlign: 'left' }}>Subcategory</th>
//               <th style={{ padding: '12px', textAlign: 'left' }}>From</th>
//               <th style={{ padding: '12px', textAlign: 'left' }}>To</th>
//               <th style={{ padding: '12px', textAlign: 'left' }}>Description</th>
//               <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
//               <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {condetails.map((row, index) => (
//               <tr key={row._id} style={{ backgroundColor: index % 2 === 0 ? '#f7fafc' : 'white', borderBottom: '1px solid #e2e8f0' }}>
//                 <td style={{ padding: '12px' }}>{row._id}</td>
//                 <td style={{ padding: '12px' }}>{row.categoryName}</td>
//                 <td style={{ padding: '12px' }}>{row.subcategoryName}</td>
//                 <td style={{ padding: '12px' }}>{row.fromlocation}</td>
//                 <td style={{ padding: '12px' }}>{row.tolocation}</td>
//                 <td style={{ padding: '12px', maxWidth: '200px' }}>{row.desDetail}</td>
//                 <td style={{ padding: '12px' }}>{(row.status || 'pending').toString()}</td>
//                 <td style={{ padding: '12px', textAlign: 'center' }}>
//                   <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
//                     <button
//                       onClick={() => handleChangeStatus(row._id, 'approved')}
//                       disabled={row.status === 'approved'}
//                       style={{ padding: '8px 12px', backgroundColor: row.status === 'approved' ? '#9AE6B4' : '#38a169', color: 'white', border: 'none', borderRadius: '4px', cursor: row.status === 'approved' ? 'default' : 'pointer' }}
//                     >
//                       Approve
//                     </button>
//                     <button
//                       onClick={() => handleChangeStatus(row._id, 'disapproved')}
//                       disabled={row.status === 'disapproved'}
//                       style={{ padding: '8px 12px', backgroundColor: row.status === 'disapproved' ? '#FEB2B2' : '#E53E3E', color: 'white', border: 'none', borderRadius: '4px', cursor: row.status === 'disapproved' ? 'default' : 'pointer' }}
//                     >
//                       Disapprove
//                     </button>
//                     <button
//                       onClick={() => handleDelete(row._id)}
//                       style={{ padding: '8px 12px', backgroundColor: '#e53e3e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
      
//     </>
    
//   )
// }

function ManageConsignment() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [descriptions, setDescriptions] = useState({});

  const [oid, setOrderId] = useState("");

  useEffect(() => {
    axios.get(__consignmentapi+ "fetch")
      .then((result) => setOrders(result.data))
      .catch((error) => console.log(error));
  });

  const Changeorderstatus = (_id, action) => {
    if (action === "approve") {
      axios.patch(__consignmentapi + "update", {
        condition_obj: { _id },
        content_obj: { status: 1 }
      }).then(() => navigate("/manageconsignment"));
    }

    if (action === "disapprove") {
      axios.patch(__consignmentapi + "update", {
        condition_obj: { _id },
        content_obj: { status: 0 }
      }).then(() => navigate("/manageconsignment"));
    }

    if (action === "delete") {
      axios.delete(__consignmentapi + "delete", {
        data: { _id }
      }).then(() => {
        toast.success("Order Deleted Successfully");
        navigate("/manageconsignment");
      });
    }
  };
const HandleSubmit = (orderId) => {
  const trackingDescription = descriptions[orderId];

  if (!trackingDescription || trackingDescription.trim() === "") {
    toast.error("Please enter tracking description");
    return;
  }

  axios.post(__trackingapi  + "save", {
    orderId: orderId,
    description: trackingDescription
  })
  .then(() => {
    toast.success("Tracking status saved successfully");

    // optional: clear textarea
    setDescriptions((prev) => ({
      ...prev,
      [orderId]: ""
    }));
  })
  .catch((err) => {
    console.error(err);
    toast.error("Failed to save tracking status");
  });
};


  return (
    <div className="admin-orders-page">
      <h2 className="page-title">Manage Orders</h2>

      <div className="orders-grid">
        {orders.map((order) => (
          <div className="order-card" key={order._id}>
            <div className="order-header">
              <span className="order-id">#{order._id}</span>
              <span className={`status ${order.status ? "approved" : "pending"}`}>
                {order.status ? "Approved" : "Pending"}
              </span>
            </div>

            <div className="order-body">
              <p><strong>Email:</strong> {order.email}</p>
              <p><strong>Category:</strong> {order.categoryName}</p>
              <p><strong>Subcategory:</strong> {order.subcategoryName}</p>
              <p><strong>Pickup:</strong> {order.fromlocation}</p>
              <p><strong>Drop:</strong> {order.tolocation}</p>
              <p className="desc"><strong>Description:</strong> {order.desDetail}</p>
            </div>

            <div className="order-actions">
              {order.status ? (
                <button
                  className="btn warning"
                  onClick={() => Changeorderstatus(order._id, "disapprove")}
                >
                  Disapprove
                </button>
              ) : (
                <button
                  className="btn success"
                  onClick={() => Changeorderstatus(order._id, "approve")}
                >
                  Approve
                </button>
              )}

              <button
                className="btn danger"
                onClick={() => Changeorderstatus(order._id, "delete")}
              >
                Delete
              </button>
              <div className="form-group">
                <label>Update Tracking Status</label>

                <textarea
                  placeholder="Describe about tracking status"
                  value={descriptions[order._id] || ""}
                  onChange={(e) =>
                    setDescriptions((prev) => ({
                      ...prev,
                      [order._id]: e.target.value
                    }))
                  }
                  rows="5"
                />


                <input type='text' value={order._id} onChange={(e) => setOrderId(e.target.value)} />
                <button onClick={() => HandleSubmit(order._id)}
                  className="btn danger"
                >
                  update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ManageConsignment