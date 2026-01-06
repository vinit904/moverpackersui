
import {useState} from 'react';
import { Navigate } from 'react-router-dom';

function Logout()
         

    // [setLogoutState , setLogoutStateFun ] = useState(true);


{
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('mobile');
    localStorage.removeItem('address');
    localStorage.removeItem('city');
    localStorage.removeItem('gender');	  
    localStorage.removeItem('role');
    localStorage.removeItem('info');
    localStorage.removeItem('_grecaptcha');
    
    
    return(
        <>
            <Navigate to='/login' />
        </>
    )
}

export default Logout