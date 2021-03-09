import {babyServerCalls, sleepServerCalls} from '../api';
import React, {useState, useEffect} from 'react';

export function useGetData(){
    const [babyData, setData] = useState([]);

    async function handleFetchData (){
        const result = await babyServerCalls.get();
        setData(result)
    }

    useEffect(()=> {
        handleFetchData();
    }, [])
    return {babyData, getData:handleFetchData}
};

export function useGetDataSleep(){
    const [sleepData, setData] = useState([]);

    async function handleFetchData (){
        const result = await sleepServerCalls.get();
        setData(result)
    }

    useEffect(()=> {
        handleFetchData();
    }, [])
    return {sleepData, getData:handleFetchData}
};