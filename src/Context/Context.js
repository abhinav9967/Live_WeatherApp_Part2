
import React, { useReducer, useContext } from "react";

import { WeatherReducer } from './Reducer';



const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({ children }) => {

    const [state, dispatch] = useReducer(WeatherReducer, {
        city: {

            "city": "Gaya",
            "lat": "24.7500",
            "lng": "85.0167",
            "country": "India",
            "iso2": "IN",
            "admin_name": "Bihār",
            "capital": "",
            "population": "474093",
            "population_proper": "474093"
        },
        current: '',
        daily: ''
    })


    //const APIKEY = ''
    return (
        <WeatherAPPContext.Provider value={{ state, dispatch }} >
            {children}
        </WeatherAPPContext.Provider>
    )
}

export default WeatherAPPProvider;

export const UseWeatherAppContext = () => {
    return useContext(WeatherAPPContext);
}