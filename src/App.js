import {useState} from 'react';
import './App.scss';

function App() { 
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState()

  const submitHandle = e => {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo('') 
  }
  const clearTodos = e => {
    setTodos([])
  }

  return (
    <div className="App">
       <h2 className='App_header'>
          Todo App
       </h2>
       <form onSubmit={submitHandle}>
         <div className='formHeader'>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
            <button disabled={!todo} type='submit'>Ekle</button>
            <button disabled={!(todos.length>0)} className='danger' onClick={clearTodos}>Temizle</button>
          </div>
       </form>
      <ul>
        {todos.map((todo, index) => (
           <li key={index}>
            {todo}
           </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
