const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a8b5981f7185ada9d12124a6bf998b50&query='+latitude+','+longtitude

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, 'Current: ' +response.body.current.temperature +' Feel like ' +response.body.current.feelslike)
        }
    })
}

module.exports = forecast