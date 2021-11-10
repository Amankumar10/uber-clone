import {useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'


const RideSelector = ({pickupCoordinates,
   dropoffCoordinates}) => {
    const {rideDuration,setRideDuration} = useState(0)

    //ger ride duration from MAPBOX API
    //1 pickupCoordinates
    //2 dropoffCoordinates 

    useEffect(() =>{
        rideDuration =fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]}${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW1hbmt1bWFyMTAiLCJhIjoiY2t2bHd4ejU1NzY1bDJ1cXdncmZ2YmNmMiJ9.facz1cNjGx-sx3fox_hNzA`)
        .then(res=>res.json())
        // .then(data =>{
        //     setRideDuration(data.routes[0].duration / 100)
        // })

        // .then((response)=>{
        //     return response.json();
        // }).then(data => {
        //     // console.log
        //     setDuration(data.routes[0].duration)
        // })
    }
        
    ,[pickupCoordinates,dropoffCoordinates])
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                {carList.map((car,index)=>(
   <Car key={index}>
   <CarImage src={car.imgUrl}  />
   <CarDetail>
       <Service>{car.service}</Service>
       <Time>5 min away</Time>

   </CarDetail>
   <Price>{'$'+ (rideDuration * car.multiplier).toFixed(2)}</Price>
       </Car>

                ))}
         
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Car =tw.div`
flex p-4 items-center
`
const CarImage =tw.img`
h-14 mr-4
`
const CarDetail =tw.div`
flex-1
`

const Service =tw.div`
font-medium
`
const Price=tw.div`
text-sm
`
const Time=tw.div`
text-xs text-blue-500
`

const Title =tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const CarList =tw.div`
overflow-y-scroll 
`
