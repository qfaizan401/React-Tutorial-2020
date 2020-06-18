import React from 'react'
import ReactDOM from 'react-dom'

function Hi() {
  return <div>
      Hello <strong>Faizan</strong>
      {
          alert("My First React App")
      }
      </div>
}

ReactDOM.render (
    <Hi/>,
    document.querySelector('#root')
)