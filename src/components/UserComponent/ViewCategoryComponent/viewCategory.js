import './viewCategory.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { __categoryapiurl } from '../../../API_URL';
import { Link } from 'react-router-dom';

function ViewCategory() {
  const [ categoryList , setCategoryList ] = useState([]);

  useEffect(()=>{
    axios.get(__categoryapiurl + "fetch").then((response)=>{
      setCategoryList(response.data);
    }).catch((err)=>{
      console.log(err);
    });
  },[]);

return (
<>   
<div id="tooplate_content">
<div class="content_box content_box_last">
<h2> View Category Here!!!!!</h2>


<div id="categorymain" >

{
  categoryList.map((row)=>(
    <Link to={`/searchsc/${row.catnm}`} >  
    <div className="categorypart" >
      <img src={`assets/uploads/caticons/${row.caticonnm}`} height="120" width="150" />
      <br/>
      <b>{row.catnm}</b>  
    </div>
    </Link>   
  ))
}

</div>
</div>
</div>

</>
  );
}

export default ViewCategory;
