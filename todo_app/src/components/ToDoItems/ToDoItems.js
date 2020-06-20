import React from 'react'
import styles from './ToDoItems.module.css'

function MainContent () {
    return(
        <div className = {styles.todo_items}>
            <input type = 'checkbox' />
            <p>PlaceHolder Text Here</p>
        </div>
            
    )
}

export default MainContent