function getCity(cityname) {
    fetch(`/wheather?location=${cityname}`)
        .then((res) => res.json())
        .then((result) => {
            // console.log(result.city)
            document.getElementById('cityData').innerHTML = 'City :'+result.city
            document.getElementById('temp').innerHTML = 'Temp :'+result.temp
            document.getElementById('pressure').innerHTML = 'Pressure :'+result.pressure
        })
        .catch((err) => console.log(err))
}