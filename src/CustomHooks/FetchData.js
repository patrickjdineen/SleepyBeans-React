import {babyServerCalls, sleepServerCalls} from '../api';
import Z, {useState, useEffect} from 'react';

export function useGetData(){
    const [babyData, setData] = useState([]);

    async function handleFetchData (){
        const result = await babyServerCalls.get();
        setData(result)
        console.log("useget1")
    }
    useEffect(()=> {
        handleFetchData();
        console.log("useget2")
    }, [])
    console.log("useget3")
    return {babyData, getData:handleFetchData}
};

export function useGetDataSleep(baby_id){
    const [sleepData, setData] = useState([]);

    async function handleFetchData (){
        const result = await sleepServerCalls.get(baby_id);
        setData(result)
    }

    useEffect(()=> {
        handleFetchData();
    }, [])
    return {sleepData, getData:handleFetchData}
};