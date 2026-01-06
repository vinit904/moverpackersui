import './viewSubCategory.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { __subcategoryapiurl } from '../../../API_URL';
import { Link , useParams } from 'react-router-dom';

function ViewSubCategory() {
  const params = useParams();
  const [ subcategoryList , setSubCategoryList ] = useState([]);

  useEffect(()=>{
    axios.get(__subcategoryapiurl + "fetch",{
    	params : {"catnm":params.cnm}
    }).then((response)=>{
      setSubCategoryList(response.data);
    }).catch((err)=>{
      console.log(err);
    });
  },[]);

return (
<>   
<div id="tooplate_content">
<div class="content_box content_box_last">
<h2> View Category Here!!!!!</h2>

<center>
<div id="categorymain" >

{
  subcategoryList.map((row)=>(
    <div className="categorypart" >
      <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="120" width="150" />
      <br/>
      <b>{row.subcatnm}</b>  
    </div>
  ))
}

</div>
</center>
</div>
</div>

</>
  );
}

export default ViewSubCategory;
