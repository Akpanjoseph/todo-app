import React,{useSate} from 'react';
import './App.css';
import { Todo } from './components/Todo';



function App() {


  return (
    <div>
        <header className='text-center font-bold text-5xl my-10'>
           <p>Todo list</p>
        </header>

        <Todo/>
      </div>
  );
}

export default App;
