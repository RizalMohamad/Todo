import { useState, useEffect } from "react";

import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";
import DarkMode from "./components/darkmode/DarkMode.jsx"

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  // Task Todo List State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newData = {
        id: num,
        title: newTask,
        status: false,
      };
      let addTodoArr = [...toDo];
      addTodoArr.push(newData);
      setToDo(addTodoArr);
      // console.log(updatedTodoArr)
      localStorage.setItem("todolist", JSON.stringify(addTodoArr));
      setNewTask("");
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);

    // let deleteTodoArr = [...toDo]
    // deleteTodoArr.splice(newTask)
    // console.log(deleteTodoArr)
    setToDo(newTask);
    localStorage.setItem("todolist", JSON.stringify(newTask));
    setUpdateData("")
  };

  // Completed
  const markDone = (id, completedStatus) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + "-" + mm + "-" + yyyy + " at " + h + ":" + m + ":" + s;
    console.log(completedOn)

    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: completedStatus, completedOn: completedStatus ? completedOn : null};
      } else {
        return task
      }
    });
    console.log(newTask)
    setToDo(newTask);
    localStorage.setItem("todolist", JSON.stringify(newTask));
  };

  // Cancel Update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // change Task
  const changeTask = (e) => {
    let newData = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newData);
  };

  // Update Task
  const updateTask = () => {
    let filterRexords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRexords, updateData];
    setToDo(updatedObject);
    localStorage.setItem("todolist", JSON.stringify(updatedObject));
    setUpdateData("");
  };

  const keyDownAdd = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const keyDownUpdate = (e) => {
    if (e.key === "Enter") {
      updateTask();
    }
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    if (savedTodo) {
      setToDo(savedTodo);
    }
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h2>To-Do-List</h2>
        <DarkMode />
      </div>

      <div className="form">
        {updateData && updateData ? (
          <UpdateForm 
            updateData={updateData} 
            keyDownUpdate={keyDownUpdate}
            changeTask={changeTask} 
            updateTask={updateTask} 
            cancelUpdate={cancelUpdate} 
          />
        ) : (
          <AddTaskForm 
            newTask={newTask} 
            keyDownAdd={keyDownAdd} 
            setNewTask={setNewTask} 
            addTask={addTask} 
          />
        )}
      </div>

      <div className="app">
        {/* Display Todos */}

        {toDo && toDo.length ? "" : <div className="no-task"> BELUM ADA DAFTAR KEGIATAN NIH</div>}

        <ToDo 
          toDo={toDo} 
          markDone={markDone} 
          setUpdateData={setUpdateData} 
          deleteTask={deleteTask} 
        />
      </div>
      <div className="footer">
        <span>© 2023 with 😵 rizal mohamad | </span>
        <a href="https://github.com/RizalMohamad/todo" className="github">
          <span>github</span>
        </a>
      </div>
    </div>
  );
}

export default App;

// + Menggunakan Local Storage
// + Menggunakan useEffect
// + Darkmode
// + Tanggal 
