const geocode = require("./geocode")
const city = "Surat,Gujarat"
geocode(city, (result) => {
    console.log(result)
})