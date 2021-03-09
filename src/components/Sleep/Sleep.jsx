import React, { useState, useEffect } from 'react';

export const Sleep = () =>{
    const [newSleep, currentSleep] = useState(0);
    const [isActive, setIsActive] = useState(0);

    function toggle() {
        setIsActive(!isActive);
    }
    function reset(){
        currentSleep(0);
        setIsActive(false);
    }
    useEffect(() =>{
        let interval = null;
        if (isActive){
            interval = setInterval(()=>{
                currentSleep(newSleep => newSleep +1);
            }, 1000);
        } else if (!isActive && newSleep !==0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, newSleep]);

    return(
        <div>
            <h1>Sleep Tracker</h1>
            {newSleep}
            <button onClick={toggle}>{isActive ? 'Pause' : 'Start'} Sleep</button>
            <button onClick={reset}>End Sleep</button>
        </div>
    )
}