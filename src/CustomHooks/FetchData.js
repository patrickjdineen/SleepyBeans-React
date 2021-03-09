import {createAccount, login} from '../api';
import react, {useState, useEffect} from 'react';

export function useCreateAccountData(){
    const [data, setData] = useState([]);

    async function handleFetchData (){
        const result = await createAccount.get();
        setData(result)
    }

    useEffect(()=> {
        handleFetchData();
    }, [])
    return {data, getData:handleFetchData}
};

export function useLoginData(){
    const [data, setData] = useState([]);

    async function handleFetchData (){
        const result = await login.get();
        setData(result)
    }

    useEffect(()=> {
        handleFetchData();
    }, [])
    return {data, getData:handleFetchData}
};