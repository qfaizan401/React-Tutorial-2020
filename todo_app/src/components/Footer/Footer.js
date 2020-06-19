import React from 'react'
import styles from './Footer.module.css'

function Footer () {
    return(
        <div className = { styles.foot }>
            <footer>Created by Faizan Qureshi</footer>
            <div className = { styles.profile }>
                <a href = 'https://github.com/qfaizan401'>My Git Profile</a>
            </div>
        </div>
    )
}

export default Footer