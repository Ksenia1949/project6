import React,{useState} from 'react';
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";

const initialList = [
    {id: 1, title: "first Todo", done: false},
    {id: 1, title: "first Todo", done: false},
    {id: 1, title: "second Todo", done: false},
    {id: 1, title: "third Todo", done: false}
    ]

function App() {

const [list,setList]= useState(initialList)
const create=title=> {
    console.log(title);
}

  return (
    <div>



        <TodoCreateForm create={create}/>
        <TodoList list={list}/>

    </div>
  );
}

export default App;
