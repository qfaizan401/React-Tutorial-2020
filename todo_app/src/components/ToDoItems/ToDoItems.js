import React from 'react'
import styles from './ToDoItems.module.css'

function MainContent () {
    return(
        <div className = {styles.todo_item}>
            <input type = 'checkbox' />
            <p>Task 1</p>
        </div>
            
    )
}

export default MainContent