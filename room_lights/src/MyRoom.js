import React, { useState } from 'react'

const MyRoom = () => {
    let [Light, setLight] = useState(true)

    return(
        <div>
            LIGHT: { Light? "On":"Off" }
            <br/>
            <button onClick={() => setLight(Light = true)}>ON</button>
            <button onClick={() => setLight(Light = false)}>OFF</button>
        </div>
    )
}

export default MyRoom