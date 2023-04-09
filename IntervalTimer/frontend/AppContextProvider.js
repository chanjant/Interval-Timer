import React from 'react';
import { useState } from 'react';

export const AppContext = React.createContext({});

export function AppContextProvider( { children }) {

    const [slider, setSlider] = useState({
        //default slider value on first load
        work: 60,
        rest: 30, 
        exercises: 5,
        rounds: 3,
        roundRest: 30
    })
    
    function handleSlider(key, value) {
        //get value on slider change
        const newSlider = {...slider, [key]: value}
        setSlider(newSlider)
    }

    function formatTime(totalSec) {
        //convert seconds into min:sec format for slider label and countdown timer
        let minutes = Math.floor(totalSec / 60)
        let seconds = totalSec % 60
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return `${minutes}:${seconds}`
    }
    
    const context = {
        slider, handleSlider, formatTime
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}
  