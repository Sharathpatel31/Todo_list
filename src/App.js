// import React,{useState} from 'react'
// import './App.css'

// function App  ()  {
//   let [todoInput,updateInput]=useState("test")

//   let [todoList,updateTodo]=useState(
//     [{
//       id:1,
//       task:'learn React'
//     },
//     {
//       id:2,
//       task:'learn Angular'
//     }
//   ]
//   )

//   function addNewTodo(){
//       alert(todoInput)
//   }
//   return (
//     <div className='container mt-5 w-50'>
//       <h3 className='text-center'>Todo List Using React</h3>
//       <div className='input-group'>
//         <input className="form-control" onchange={(e)=>{
//             let task=e.target.value;
//             updateInput(task)
//         }} type="text" value={todoInput}/>
//         <button onclick={()=>{
//           addNewTodo()
//         }} className='btn btn-primary'>Add</button>
//       </div>
//       <ul className="list-group mt-4">
//         {
//           todoList.map(
//             (todo)=>{
//               return(
//                 <li className="list-group-item">
//                   <p>{todo.task}</p>
//                   <button className='btn'>❌</button>
//                 </li>
//               )
//             }
//           )
//         }
//       </ul>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';

function App() {
  let [todoInput, updateInput] = useState("");

  let [todoList, updateTodo] = useState([
    {
      id: 1,
      task: 'learn React'
    },
    {
      id: 2,
      task: 'learn Angular'
    }
  ]);

  let nextId = 3;

  function addNewTodo() {
    if (todoInput === "") {
      alert("Add some Task");
    } else {
      let newTodos = [
        ...todoList,
        {
          id: nextId++,
          task: todoInput
        }
      ];
      updateTodo(newTodos);
      updateInput("");
    }
  }

  function deleteTodo(id) {
    let updatedTodo = todoList.filter(todo => todo.id !== id);
    updateTodo(updatedTodo); // Correctly update the state with the filtered list
  }

  return (
    <div className='container mt-5 w-50'>
      <h3 className='text-center'>Todo List Using React</h3>
      <div className='input-group'>
        <input
          className="form-control"
          onChange={(e) => {
            let task = e.target.value;
            updateInput(task);
          }}
          type="text"
          value={todoInput}
        />
        <button
          onClick={addNewTodo}
          className='btn btn-primary'
        >
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {
          todoList.map(
            (todo) => {
              return (
                <li key={todo.id} className="list-group-item">
                  <p>{todo.task}</p>
                  <button onClick={() => {
                    deleteTodo(todo.id);
                  }} className='btn'>❌</button>
                </li>
              );
            }
          )
        }
      </ul>
    </div>
  );
}

export default App;




