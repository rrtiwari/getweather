
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {
   const INIT_URL = "https://images.unsplash.com/photo-1485395578879-6ba080c9cdba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D"
   
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1613416721396-6565d7b3dcb2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHwwD"
    const RAIN_URL = "https://images.unsplash.com/photo-1694153049828-1a5c38def8e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnklMjB3ZWF0aGVyJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D"

   return (
      <div className="InfoBox">
         
         <div className='Card'>
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
             sx={{ height: 140 }}
             image={info.humidity>80 
                        ? RAIN_URL 
                        : (info.temp<10 
                        ? COLD_URL 
                        : (info.temp>30 
                        ? HOT_URL 
                        : INIT_URL))}
             title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {info.city}{info.humidity>80 
                        ? <ThunderstormIcon/> 
                        : info.temp<20 
                        ? <AcUnitIcon/> 
                        : <WbSunnyIcon/>
}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
               <p>Temperature = {info.temp}&deg;C</p>
               <p>Humidity = {info.humidity}</p>
               <p>Min Temp = {info.tempMin}&deg;C</p>
               <p>Max Temp = {info.tempMax}&deg;C</p>
               <p>The weather can be described
                  as <b>{info.weather}</b> and feelslike <b>{info.feelsLike}&deg;C</b>
               </p>
            </Typography>
            </CardContent>
         </Card>
         </div>
      </div>
   )
}