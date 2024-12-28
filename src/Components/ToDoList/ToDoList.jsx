import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./ToDoList.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    { task: "Create React Project", taskdate: "12/24/24", completed: true },
    { task: "WorkOut", taskdate: "12/24/24", completed: false },
    { task: "Study", taskdate: "12/24/24", completed: false },
    {
      task: "Finish SoftWare BootCamp",
      taskdate: "12/24/24",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState([""]);

  const [newTaskDate, setNewTaskDate] = useState([""]);

  const handleAddTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTaskDate = (e) => {
    setNewTaskDate(e.target.value);
  };

  const handleAddTaskSubmit = () => {
    const newTasksArray = [...tasks, { task: newTask, taskdate: newTaskDate, completed: false }];
    setTasks(newTasksArray);
    setNewTask("");
    setNewTaskDate("");
  }

  const handleDeleteTask = (index) => {
    const updatedTask = tasks.filter((task, i) => i !== index);
    setTasks(updatedTask);
    
  }

  const handleUpdateTask = (index, newStatus) => {
    const updatedTasksArray = [...tasks]
    updatedTasksArray[index].completed = newStatus
    setTasks(updatedTasksArray)
  }

  return (
    <div className="main-table">
      <div>
        <Button  className="complete-button" variant="outline-success">Completed </Button>
        <Button  className="incomplete-button" variant="outline-danger">Incomplete</Button>
      </div>

      <Table striped bordered hover variant="dark" className="main-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Update Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task.task}</td>
              <td>{task.taskdate}</td>
              <td><DropdownButton
                  variant="outline-secondary"
                  title={task.completed ? "Completed" : "Pending"}
                  onSelect={(status) => handleUpdateTask(index, status === "true")}
                >
                  <Dropdown.Item eventKey={true}>Completed</Dropdown.Item>
                  <Dropdown.Item eventKey={false}>Incomplete</Dropdown.Item>
                </DropdownButton></td>
              <td>
                {" "}
                <Button variant="outline-danger" onClick={() => handleDeleteTask(index)} >Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="outline-success" onClick={handleAddTaskSubmit} >Add Task</Button>
      <input type="text" name="addtask" placeholder="New Task?" value={newTask} onChange={handleAddTask} />
      <input type="date" name="taskdate" value={newTaskDate} onChange={handleAddTaskDate} />
      


    </div>
  );
}
