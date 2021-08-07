import axios from "axios";


const apiClient = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/",
  });
const REACT_APP_API_KEY = "7c7aad546625d1da0665b0222c4945f9";

function getCurrentWeather(location){
   return apiClient
   .get(
        `/weather?q=${location}&units=imperial&appid=${REACT_APP_API_KEY}&units=imperial`
    );
}

function getForeCast(lat, lon){
    return apiClient
    .get(
      `/onecall?lat=${lat}&lon=${lon}&APPID=${REACT_APP_API_KEY}&units=imperial`
    )
    .then((res) => res.data);
}

// function getDailyForeCast(lat, lon){
//     return apiClient
//     .get(
//       `/onecall?lat=${lat}&lon=${lon}&APPID=${REACT_APP_API_KEY}&units=imperial`
//     )
//     .then((res) => res.data);
// }

export {
    getCurrentWeather,
    getForeCast
}