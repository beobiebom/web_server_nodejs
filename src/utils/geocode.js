const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmVvYmllYm9tIiwiYSI6ImNrcTd4MTJvMTA4OXQyeXJ2dXM0aHg5eTEifQ.WxC69JGxKJdb83sKE0U2wg'

    request({ url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length ===0 ) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const latitude = body.features[0].center[1]
            const longtitude = body.features[0].center[0]
            callback(undefined, {
                latitude, 
                longtitude
            })
        }
    })
}

module.exports = geocode