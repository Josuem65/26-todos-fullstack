import React from 'react'

export function CompletedBtn() {
  return(
    <button>Completed</button>
  )
}

export function ActiveBtn() {
  return(
    <button>Active</button>
  )
}

export function DeleteBtn() {
  function handleClick() {

  }
  return(
    <button onClick={() => handleClick}>x</button>
  )
}