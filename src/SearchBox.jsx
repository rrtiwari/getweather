
import { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    
    const API_KEY="540a04177ffdf8af70e0e44553bb865f";

    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description
        }
        console.log(result);
        updateInfo(result);
        } catch(err) {
            throw err;
        }


    }

    let handleSubmit = (event) => {
        try {
            event.preventDefault();
            console.log(city);
            getWeatherInfo();
            setCity("");
        } catch(err) {
            setError(true);
        }
    }

    return (
        <div className="SearchBox">
            <h2>Search for the Weather</h2>
            <form onSubmit={handleSubmit}>
               <TextField id="City"
               label="City Name" 
               variant="outlined" 
               value={city}
               onChange={handleChange}
               required
               />
            <br /><br />
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color : "red"}}>No such place in our API</p>}
            </form>
            
        </div>
    )
}