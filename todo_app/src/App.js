import React from 'react'

import { ToDoItems, Footer, Header } from './components'
import styles from './App.module.css'

function Task () {
    return (
        <div>
            <Header />
            <div className = {styles.todo_list}>
                <ToDoItems />
                <ToDoItems />
                <ToDoItems />
                <ToDoItems />
            </div>
            <Footer />
        </div>
    )
}

export default Task
