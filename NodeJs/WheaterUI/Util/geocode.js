const { default: axios } = require("axios");
const wheather = require("./wheather");

const geocode = (city, callback) => {

    // const city = "surat,gujarat"
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=725b1290c1344ab4b72341d421e6c994`;
    axios.get(url).then((result) => {
        const data = result.data.results[0].geometry
        lat = data.lat
        lng = data.lng
        wheather(lat, lng, (result) => {
            // console.log(result)
            callback(result)
        })
    }).catch((err) => {
        console.log(err)
    })

}

module.exports = geocode