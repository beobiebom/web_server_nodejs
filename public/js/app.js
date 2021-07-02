console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
    //Prevent rerender 
    event.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageOne.textContent = ''

    // get data from api and using in client side
    fetch ('http://localhost:3000/weather?address='+location).then(response => {
        response.json ().then (data => {
            if (data.error) {
                // console.log (data.error);
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.address
                messageTwo.textContent = data.forecast
                // console.log (data.address);
                // console.log (data.forecast);
            }
        })
    })

})


