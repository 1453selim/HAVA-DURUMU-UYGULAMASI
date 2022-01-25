const url = "https://api.openweathermap.org/data/2.5/";

const key = "b8a1eb80a01612a00b7933b5741a101d";


const getData =(e)=>{
    if(e.keyCode =="13")
    getResult(searchBar.value)
}
const getResult = (cityName)=>{
    let data = `${url}weather?q=${cityName}&&appid=${key}&units=metric&lang=tr`
    //console.log(data)
    fetch(data)
    .then(weather =>{//tüm datayı cekiyoruz
        return weather.json()
    })
    .then(showedResult)//ittiyacımız olanı seciyooruz 
}
const showedResult= (weather)=>{
    let city = document.querySelector(".city");
    city.innerText =`${weather.name},${weather.sys.country}`
    let temp = document.querySelector(".temp")
    temp.innerText = `${Math.round(weather.main.temp)}°C`
    let description = document.querySelector(".description");
    description.innerText =`${weather.weather[0].description}`.toUpperCase()
    let minmax=document.querySelector(".minmax");
    minmax.innerText =`${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
    console.log(weather)
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress",getData)
