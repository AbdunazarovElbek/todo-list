// import React from 'react'
// import { useState } from 'react';

// function App() {
//   const [todos,setTodos] = useState([
          
//   ])
//   const [input, setInput] = useState('');

//   const inputqshish = (e) => setInput(e.target.value);

//   function qoshish() {
//     const newTodo = [input, ...todos]
//     setTodos(newTodo)
//     setInput("")
//   };
//    return (
//     <div>
//       <input  value={input} onChange={inputqshish} type="text" />
//       <button onClick={qoshish}>send</button>
//       {todos.map((item, index) => {
//         return (
//           <h1 key={index} >{item}, {index}</h1>
//         )
//       })}
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import User from './User'

//  const App = () => {
//   return (
//     <User royxatdanOtgan={true} userName="user111"/>
//   )
// }


// export default App



// import React from 'react'

// const App = () => {
//   const arr = ["olma", "nok", "banan", "hurmo"]
//   const listedItem = arr.map(item => <li>{item}</li>)
//   return (
//     <>
//     <ul>
//     {listedItem} 
//     </ul>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';
import kor from './assets/9623228.png'

const App = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [edit, setEdit] = useState("");
  const [globalId, setGlobalId] = useState(0);

  const [arr, setArr] = useState([
    {
      id: 1,
      task: "Uy ishlari",
      isDone: true
    },
    {
      id: 2,
      task: "Loyiha",
      isDone: false
    },
    {
      id: 3,
      task: "Yerlarni chopish",
      isDone: true
    }
  ]);
  const [text, setText] = useState("");

  function addText() {
    const newArr = [{
      id: arr[arr.length - 1].id + 1,
      task: text,
      isDone: false
    }, ...arr];
    setArr(newArr);
    setText("");
  }

  function deleteTask(index) {
    arr.splice(index, 1);
    setRender(!render);
    console.log(index);
  }

  function editTask(text, index) {
    if (update) {
      setRender(!render);
      arr[globalId] = edit;
      setToggleModal(false);
      setUpdate(false);
    } else {
      setGlobalId(index);
      setUpdate(true);
      setEdit(text);
      setToggleModal(true);
    }
  }
  function deleteTask(index) {
    const newArr = arr.filter((_, i) => i !== index);
    setArr(newArr);
  }

  function editTask(text, index) {
    setGlobalId(index);
    setEdit(text);
    setToggleModal(true);
  }

  function updateTask() {
    const newArr = arr.map((item, index) => (index === globalId ? {...item, task: edit} : item));
    setArr(newArr);
    setToggleModal(false);
  }
  return (
    <div className='cont' >

      <h1>Write your tasks:</h1>

      <input placeholder='soz yozing' className='inputqoshish' value={text} onChange={(e) => setText(e.target.value)} type="text" />
      <button className='buttonqoshish' onClick={addText}>add</button>


      <h1>To Do List</h1>

      <div className={toggleModal ? "update-modal show-modal" : "update-modal"}>

        <div className='inputs'>
          <input value={edit} onChange={(e) => setEdit(e.target.value)} placeholder='edit task' type="text" />
          <button onClick={() => editTask(updateTask)}>update</button>
          <button onClick={() => setToggleModal(false)} className='close'>close</button>
        </div>

      </div>

      <div>
        {arr.map((item, index) => (
          <div className='task' key={index}>
            <h2 className='h2' >{item.task}</h2>

            <div>
              <button onClick={() => editTask(item.task, index)} className='edit'>edit</button>
              <button onClick={() => deleteTask(index)} className='delete'><img src={kor} alt="" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;