// import { useState } from "react"
// import InfoBox from "./InfoBox"
// import SearchBox from "./SearchBox"



// export default function WeatherApp() {
//     let [weatherInfo, setWeatherInfo] = useState({
//         city: "Kolkata",
//         feelsLike: 19.22,
//         humidity: 88,
//         temp: 18.97,
//         tempMax: 18.97,
//         tempMin: 18.97,
//         weather: "mist"
//     });

//     let updateInfo = (newInfo) => {
//         setWeatherInfo(newInfo);
//     }
//     return (
//         <div style={{textAlign: "center"}}>
//             <h2 >Weather App by Saikat</h2>
//             <SearchBox updateInfo={updateInfo}/>
//             <InfoBox info={weatherInfo}/>
//         </div>
//     )
// }


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

