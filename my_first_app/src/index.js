import React from 'react'
import ReactDOM from 'react-dom'

function Hi() {
  return <div>
      <h1>Calculator using React</h1>
      {
         alert("Hello world") 
      }
      </div>
}

ReactDOM.render (
    <Hi/>,
    document.querySelector('#root')
)