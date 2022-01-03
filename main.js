const apiKey="23b4b32f67e3f0a251834620ccd174d3"

const fetchWeather=async(input) =>{
    const response= await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${apiKey}`
    );
    const data=await response.json();
    return data;
}
const displayWeather= async(data) =>{
    const name  = data;
    const description = data.weather[0];
    const temp, humidity, temp_max, temp_min= data.main;
    console.log(name,description,temp,humidity,temp_max,temp_min)
    //this.document.querySelector(".name").innerText= "Weather in " + name;
    //this.document.querySelector(".temp").innerText= temp + "°F"
    //this.document.querySelector(".description").innerText= description
    //this.document.querySelector(".max").innerText= "Maximum Temp: " + temp_max + "°F";
    //this.document.querySelector(".min").innerText= "Minimum Temp: " + temp_min + "°F";
    //this.document.querySelector(".humidity").innerText="Humidity: " + humidity + "%";
};
