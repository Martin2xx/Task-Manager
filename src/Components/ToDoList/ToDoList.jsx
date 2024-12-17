import React, {useState}  from 'react'
import Table from 'react-bootstrap/Table';
import './ToDoList.css'
import Button from 'react-bootstrap/Button';

export default function ToDoList() {
  
 
  
    const [tasks, setTasks]= useState([
        {task: "Create React Project", taskdate: "12/24/24", completed: true},
        {task: "WorkOut", taskdate: "12/24/24", completed: false},
        {task: "Study", taskdate: "12/24/24", completed: false},
        {task: "Finish SoftWare BootCamp", taskdate: "12/24/24", completed: false},
        ])
  
    return (
    <div className='main-table'>
        
        <Table striped bordered hover variant="dark" className='main-table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Date</th>
          <th>Status</th>
          <th>Update Task</th>
        </tr>
      </thead>
      <tbody>
       {
         tasks.map((task, index) => (
           <tr key={index}>
             <td>{index + 1}</td>
             <td>{task.task}</td>
             <td>{task.taskdate}</td>
             <td>{task.completed? "Completed" : "Pending"}</td>
             <td> <Button variant="outline-danger">Delete</Button> </td>
           </tr>
         ))
       }
       
      </tbody>
    </Table>

    <Button variant="primary" onClick={() => setTasks([...tasks, {task: "New Task", taskdate: "12/24/24", completed: false}])}>Add Task</Button>
    <input type="text" name="addtask" placeholder="New Task?"/>



    
    





    </div>
  )
}