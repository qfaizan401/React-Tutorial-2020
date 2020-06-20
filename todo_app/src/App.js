import React from 'react'

import { ToDoItems, Footer, Header } from './components'

function Task () {
    return (
        <div>
            <Header />
            <ToDoItems />
            <ToDoItems />
            <ToDoItems />
            <ToDoItems />
            <Footer />
        </div>
    )
}

export default Task
