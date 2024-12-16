import React from 'react'
import ToDoList from '../../Components/ToDoList/ToDoList'
import './HomePage.css'

export default function HomePage() {
  return (
    <>
    <div className='main-header' >Task Manager</div>
    <ToDoList />
    </>
  )
}
