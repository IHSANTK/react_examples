import React from 'react'
import ReactDOM from 'react-dom'

export default function Protelsdemo() {
  return ReactDOM.createPortal(
    <h1>
      Portal Demo
    </h1>,
    document.getElementById('poral-root')
  )
}
