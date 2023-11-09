import { useState } from "react";
import './Todo.css'

const generateId = () => {
    const newId = (Math.random() * 10);
    // console.log(newId);
    return newId;
}

function Todo() {
    const [todos, setTodos] = useState<{ text: string; id: number }[]>([]);
 const [input, setInput] = useState("");



 const handleSubmit = () => {
    setTodos((todos) => {
        return todos.concat({
            text: input,
            id: generateId()
        });
    });
    setInput("");
 };

const removeTodo = (id: number) => setTodos((todos)=> todos.filter((todo) => todo.id !== id));


  return (
    <>
    <div className="container">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value) } placeholder="Write Todo" />
        <button onClick={handleSubmit}>Submit</button>


        <ul className="todosList">
            {
                todos.map(({text,id}) => 
                     (
                    <li key={id}>
                        <span>{text}</span>
                        <button onClick={()=> removeTodo(id)}>X</button>
                    </li>
                    ))
}
        </ul>
    </div>
    </>
  )
}

export default Todo