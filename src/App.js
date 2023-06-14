import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos,setTodos] = useState([])
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
      e.preventDefault()
      if(todo === ""){
          return;
      }
      setTodos(curArr => [todo,...curArr] )
      setTodo("")
  }

    console.log(todos)
  return (
    <div>
        <h1>My TO DOS.. ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do.."
        />
        <button>Add todo.. </button>
      </form>
    </div>
  );
}

export default App;
