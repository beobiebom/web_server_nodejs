console.log('Client side javascript file is loaded!')

// get data from api and using in client side
fetch('http://localhost:3000/weather?address=vietnam').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.address)
            console.log(data.forecast)
        }
    })
})