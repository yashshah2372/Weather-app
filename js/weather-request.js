const API_Key="742eec54303fede82145956851a55d14"
const BASE_URL="http://api.openweathermap.org/data/2.5/forecast"

const getWeather=async(city)=>{
    const http=new slhttp();
    const url=`${BASE_URL}?q=${city}&units=metric&appid=${API_Key}`;
    console.log(http.get(url));
    try{
        const res=await http.get(url);

        return {
            state:'success',
            weatherInfo:res
        };
    }catch(e){
        return{
            state:'error',
            weatherInfo:null
        };
    }
}

// getWeather("Goa")
// .then(weatherInfo=>console.log(weatherInfo))
// .catch(()=>console.log("Error"));
