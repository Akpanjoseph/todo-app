import React from 'react'
import { Todo } from './Todo'


// getting passed data as props value
export function TodoList( {todos,id}) {
    return (
        <>

         
        <ul className='flex flex-col justify-center items-center  '>
           <li  >
            <p>{id+1}. {todos} </p>
            </li> 
          
        </ul>
            
        </>
    )
}
