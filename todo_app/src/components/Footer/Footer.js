import React from 'react'
import styles from './Footer.module.css'

function Footer () {
    const FirstName = "Faizan"
    const LastName = "Qureshi"
    return(
        <div className = { styles.foot }>
            <footer>Created by {FirstName + " " +LastName}</footer>
        </div>
    )
}

export default Footer