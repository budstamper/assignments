import React from 'react'
import Card from './Card'

const List = () =>{

    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring",
          img: "https://i.pinimg.com/736x/98/bb/df/98bbdf80364b18f2c22cbbd7952baaa7.jpg"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter",
            img: "http://1.bp.blogspot.com/-MKfoA2DacuI/UVKZUcC6R5I/AAAAAAAAAzQ/svyLw3OnBWk/s1600/Cancun+Mexico+2013.jpg"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall",
          img: "http://1.bp.blogspot.com/-rVukhOorZzI/TgW_vsw4sSI/AAAAAAAABic/jxN5aMS3bRA/s1600/great-wall-of-china.jpg"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer",
          img: "https://www.smarttravel.ee/wp-content/uploads/2013/06/Moscow-Russia1.jpg"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring",
          img: "http://greenarea.me/wp-content/uploads/2016/09/beirut-008.jpg"
        }
      ]

      const displayPlace = vacationSpots.map((vac, i)=>{
          var colorTemp = "purple"
          if(vac.timeToGo==="Spring"){colorTemp = "pink"}
          if(vac.timeToGo==="Fall"){colorTemp = "orange"}
          if(vac.timeToGo==="Winter"){colorTemp = "blue"}
          var dollarS = "$"
          if(vac.price>500 && vac.price<=1000){dollarS+="$"}
          if(vac.price>1000){dollarS+="$$"}
        return <Card key={vac.place+i}
                     place={vac.place}
                     price={vac.price}
                     dollar={dollarS}
                     timeToGo={vac.timeToGo}
                     img={vac.img}
                     color={colorTemp} />

      })
      


    return (
        <div>
            {displayPlace}
        </div>
    )
}

export default List