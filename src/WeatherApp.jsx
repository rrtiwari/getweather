
import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
      city : "Kolkata",
      feelsLike : 24.84,
      temp: 25.05,
      tempMin : 25.05,
      tempMax : 25.05,
      humidity : 47,
      weather : "haze"
    });

    let updateInfo = (getInfo) => {
        setWeatherInfo(getInfo)
    }
    return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </>
    )
}

