import { useEffect, useState } from 'react';
import './addConsignment.css';
import axios from 'axios';
import { __categoryapiurl, __consignmentapi, __subcategoryapiurl } from '../../API_URL';
import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import { __geomapapi } from '../../API_URL';

function AddConsignment() {

  const [categories, setCategories] = useState([]);
  const [categoryName, setcategoryName] = useState()

  const [subcategories, setSubCategories] = useState([]);
  const [subcategoryName, setSubCategoryName] = useState();

  const [fromlocation, setFromLocation] = useState("");
  const [tolocation, setToLocation] = useState("");
  const [desDetail, setdesDetail]= useState();
  const [output, setOutput]= useState();


    const onPlaceSelect = (value) => {
    console.log("Selected Address Data:", value);
    };


  useEffect(() => {

    axios.get(__categoryapiurl + "fetch").then((response) => {
      setCategories(response.data);

    }).catch((err) => {
      console.log("Add consignment category error", err)

    }, [])

  })

  useEffect((response) => {

    // axios.get(__subcategoryapiurl + "fetch",
    //   {params : {"catnm": categoryName}}
    // ).then((response) => {
    //   setSubCategories(response.data);

    // }).catch((err) => {
    //   console.log("Add consignment subcategory error", err)

    // }) 

    axios
      .get(__subcategoryapiurl + "fetch", {
        params: { "catnm": categoryName },
      })
      .then((response) => {
        setSubCategories(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        console.log("Add consignment subcategory error", err);
      });



  }, [categoryName])

  const handleSubmit=(e)=>{
    const conDetails={"categoryName":categoryName , "subcategoryName":subcategoryName,"desDetail":desDetail,"fromlocation":fromlocation,"tolocation":tolocation}
    axios.post(__consignmentapi+"save",conDetails).then(()=>{
      setOutput("Consignment Add successfully");
      setcategoryName("");
      setSubCategoryName("");
      setFromLocation("");
      setToLocation("");
      setdesDetail("");
    }).catch((error)=>{
      setOutput("Consignment Failed");
    })


  }


  return (
    <>
      
      <div className="form-container">
        <h1>{output}</h1>
        <h2>Consignment Form</h2>
        <form >
          <label>Category</label>
          <select value={categoryName} onChange={e => setcategoryName(e.target.value)}>
            <option value="">select category</option>
            {categories.map((row, index) => (
              <option key={index} value={row.catnm}>{row.catnm}</option>))
            }
          </select>

          <label>Sub Category</label>
          <select value={subcategoryName} onChange={e => setSubCategoryName(e.target.value)}>
            <option value="">Select Sub Category</option>
            {subcategories.map((row, index) => (

              <option key={index} value={row.subcatnm}>{row.subcatnm}</option>))
            }
          </select>



          <label htmlFor="from">From (Location)</label>
          <input
            type="text"
            name="from"
            placeholder="Enter origin location"
            value={fromlocation} onChange={e=>setFromLocation(e.target.value)}

          />

          <label htmlFor="to">To (Location)</label>
          <input
            type="text"
            name="to"
            placeholder="Enter destination location"
            value={tolocation} onChange={e=>setToLocation(e.target.value)}

          />
          {/* <GeoapifyContext apiKey="255d7862e5fe49a9a917a9be204456c8">
            <label>From:</label>
            <GeoapifyGeocoderAutocomplete placeholder="Enter pickup"  value={fromlocation} onChange={e=>setFromLocation(e.target.value)} placeSelect={onPlaceSelect} />

            {fromlocation}  

            <label>To:</label>
            <GeoapifyGeocoderAutocomplete placeholder="Enter dropoff" value={tolocation} onChange={e=>setToLocation(e.target.value)} placeSelect={onPlaceSelect} />

              {tolocation}
          </GeoapifyContext> */}

          <label for="description">Description</label>
          <textarea id="description" name="description" value={desDetail} onChange={e=>setdesDetail(e.target.value)} placeholder="Enter consignment details"></textarea>
          



          <button className="btn" type='button' onClick={handleSubmit}>Confirm Consignment</button>
        </form>
      </div>
    </>
  );
};



export default AddConsignment;