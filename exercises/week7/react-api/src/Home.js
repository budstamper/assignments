import React, { Component } from 'react';
import axios from 'axios'

var tick;

class Home extends Component {
    constructor(){
        super()

        this.state = {
          speed: null,
          debt: null,
        }
    
      }

    //   {
    //     "reporting_calendar_year": "2018",
    //     "tot_pub_debt_out_amt": "21458849674105.03",
    //     "reporting_calendar_month": "08",
    //     "reporting_calendar_day": "31",
    //     "debt_held_public_amt": "15785389142392.19",
    //     "data_date": "2018-08-31",
    //     "intragov_hold_amt": "5673460531712.84"
    // },

    componentDidMount(){
        axios.get("https://vschool-cors.herokuapp.com?url=https://www.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/debt_to_penny?sort=-data_date").then(response =>{
          // console.log(response.data.data)
          var debtArr = []
          var neg = -1/0
          for(var i = 0; i < 99; i++){
            var day1 = response.data.data[i]
            var day2 = response.data.data[i+1]
            var debt1 = day1.tot_pub_debt_out_amt
            var debt2 = day2.tot_pub_debt_out_amt
            var parse1 = Date.parse(`${day1.reporting_calendar_year} ${day1.reporting_calendar_month-1} ${day1.reporting_calendar_day}`)
            var parse2 = Date.parse(`${day2.reporting_calendar_year} ${day2.reporting_calendar_month-1} ${day2.reporting_calendar_day}`)
            var increase = debt1-debt2
            var time = parse1-parse2
            // console.log(increase, time, i, parse1, parse2)
            if(increase/time!==neg){
              debtArr.push(increase/time)
            }
          }
          var parse1 = Date.parse(`${response.data.data[0].reporting_calendar_year} ${response.data.data[0].reporting_calendar_month-1} ${response.data.data[0].reporting_calendar_day}`)
          var now1 = Date.now()-parse1
          var lengthArr = debtArr.length
          var rate = debtArr.reduce((a,b)=>a+b)/lengthArr
          console.log(rate, typeof rate)
          var since = rate*now1
          // console.log("since", typeof since, since)
          var money = Number(response.data.data[0].tot_pub_debt_out_amt)+since
          // console.log("money", typeof money, money)
          // console.log(day1, day2, "debt1 " + debt1, "debt2 " +debt2, "parse1 " +parse1, parse2, "increase " +increase, "time " +time, "rate "+ rate, "now "+now, "since" + since)
          this.setState({speed: rate, debt: money} //TODO display time / setTimeout
          )
        }).catch(err =>{
          console.log(err)
        })
      }

      render(){

        const displayDebt = () => {
            if (this.state.debt === null) return "000,000,000,000.00";
            return this.state.debt.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }

        // console.log(typeof this.state.debt, typeof this.state.rate)


        if (this.state.debt !== null){
          tick = setInterval(() =>{
            this.setState({debt: this.state.debt+(this.state.speed*10)})
          }, 10)
        }

        const styles = {
          marginTop: '15%',
          padding: '5px',
          textAlign: 'center',
          backgroundColor: "#80808090",
        }

        return (
            <div style={styles} className="debt">
                <h1>Total US Debt</h1>
                <h1>{`$${displayDebt()}`}</h1>
                <video preload="true" id="bgvid" autoplay="true" loop="true" poster="/Users/student/Dev/assignments/exercises/week7/react-api/src/listen.jpg">
                  <source src="https://memefly.me/i/listen.mp4" type="video/mp4"/>
                </video>
            </div>
        );
    };
}

export default Home;