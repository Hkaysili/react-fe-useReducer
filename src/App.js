import {useReducer} from 'react';
import './App.scss'; 
import todoReducer from './reducers/todoReducer';

function App() { 
  // **** useReducer Kullanımı ******* 
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: ''
  }); 

  const submitHandle = e => {
    e.preventDefault()  
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo
    })
  }
  const clearTodos = e => {
     dispatch({
       type: 'REMOVEALL_TODO'
     })
  }


  const onChange = e => {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value
    })
  }

  return (
    <div className="App">
       <h2 className='App_header'>
          Todo App
       </h2>
       <form onSubmit={submitHandle}>
         <div className='formHeader'>
            <input type="text" value={state.todo} onChange={onChange}/>
            <button disabled={!state.todo} type='submit'>Ekle</button>
            <button disabled={!(state.todos.length>0)} className='danger' onClick={clearTodos}>Temizle</button>
          </div>
       </form>
      <ul>
        {state.todos.map((todo, index) => (
           <li key={index}>
            {todo}
           </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
