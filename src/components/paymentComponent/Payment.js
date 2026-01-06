import { Navigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __paymentdoneapiurl } from '../../API_URL';

function Payment() {
    const params = useParams();

    const [userId, setUserId] = useState(params.uid);
    const [amount, setAmount] = useState(params.amt);

    useEffect(() => {
            const paymentdetail = { "userId": userId, "amount": amount, "paymentDate": Date() };
            
                axios.post(__paymentdoneapiurl, paymentdetail).then(() => {
                    console.log("payment details save successfully");
                }).catch((err) => {
                    console.log("payment details not save",err);
                })



            }, []);

    return (
        <div>
            <Navigate to='/success' />
        </div>
    )
}

export default Payment;