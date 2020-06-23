import React, { useState } from 'react'
import './MyRoom.css'

const MyRoom = () => {
    let [Light, setLight] = useState(true)
    let [Temp, setTemp] = useState(22)

    return(
        <div className={`room ${ Light? 'on':'off' }`}>
            <div>
                LIGHTS: { Light? "On":"Off" }
                <br/>
                <button onClick={() => setLight(Light = true)}>ON</button>
                <button onClick={() => setLight(Light = false)}>OFF</button>
            </div>
            <div>
                TEMPERATURE: {Temp}
                <br/>
                <button onClick={() => setTemp(Temp+1)}>+</button>
                <button onClick={() => setTemp(Temp-1)}>-</button>
                <button onClick={() => setTemp(Temp=22)}>RESET</button>
            </div>
        </div>
    )
}

export default MyRoom