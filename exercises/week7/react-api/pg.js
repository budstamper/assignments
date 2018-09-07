var axios = require('axios')

var timer = Date.now()

// axios.get('https://randomuser.me/api/').then(response=>{
//     var x = JSON.stringify(response.data)
//     console.log(x)})

// axios.get('https://www.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/debt_to_penny?sort=-data_date')
// .then(response=>{
//     console.log(response)
// })

axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes/100')
.then(response => {
    console.log(response.data)
}).then(()=>{
    console.log(Date.now()-timer)
})