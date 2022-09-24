const { default: axios } = require("axios");

const wheather = (lat,lon,callback) => {
    // const lat = 21.1702
    // const lon = 72.8311
    const API = "6c38fd60e435eef83584c0206a3bcb8c"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
    axios.get(url).then((result) => {
        const data = result.data.main;
        const cityname = result.data.name
        callback({
            city: cityname,
            temp: data.temp,
            pressure: data.pressure,
            humedity: data.humidity,
        })

    }).catch((err) => {
        console.log(err)
    })

}

module.exports = wheather