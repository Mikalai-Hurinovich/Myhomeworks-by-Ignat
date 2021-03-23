import React from 'react'
import Message from "./Message";

let time;
if (new Date().getMinutes() < 10) {
    time = `${new Date().getHours()}:0${new Date().getMinutes()}`;
} else {
    time = `${new Date().getHours()}:${new Date().getMinutes()}`;
}


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Mikola',
    message: 'Porro officia cumque sint deleniti consectetur?',
    time: time,
}
const messageDataTwo = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Mikola',
    message: 'Hello World!',
    time: time,
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message avatar={messageDataTwo.avatar}
                     name={messageDataTwo.name}
                     message={'Hello, World!'}
                     time={messageDataTwo.time}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
