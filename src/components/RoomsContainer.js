import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomList from './RoomList';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomCotainer({context}){

const {loading,sortedRooms,rooms} = context;

if(loading){
return <Loading/>;
}
    
return(
<>

<RoomsFilter rooms={rooms}/>
<RoomList rooms={sortedRooms}/>
</>
);
}





export default withRoomConsumer(RoomCotainer)



// 

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>

//             {
//         (value) =>{
         
//          const {loading,sortedRooms,rooms} = value;
         
//          if(loading){
//              return <Loading/>;
//          }

//         return(
//         <div>
//             Hello from rooms container
//             <RoomsFilter rooms={rooms}/>
//             <RoomList rooms={sortedRooms}/>
//         </div>
//         )
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }
