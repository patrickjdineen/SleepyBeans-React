import React, {useState} from 'react';
import axios from 'axios';

let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJlMWZkM2I5My1iNjRhLTQyMDctOThhMC0zYWUwZjg4MzFmZDYiLCJpc3N1ZV90aW1lIjoiXCIyMDIxLTAzLTEyIDE3OjI2OjQ5LjQ1Nzc4OVwiIn0.RdgBtgpnn7Ugipq99shMCMXvC_Cu2gQrqzSs3QXiptQ"


function NewSleep () {
    const [sleep, setSleep] = useState([]);
    const [error, setError] = useState(null);

    componentDidMount(){
        axios.get('/sleep',{
            'headers':{
                'Content-type':'application/json',
                'x-access-token':`${token}`
            }
        });
        .then(res =>{
            const sleeps= res.json()
        }

    return(
        <>
        Sleep will go here
        </>
    );
};