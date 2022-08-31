import React,{useState} from 'react'
import { TodoList } from './TodoList'


export function Todo() {
  
// create states
const [text , setText] = useState("")
const [allTodos , setAllTodos] = useState([])



// add to todo function
const addTodo = ()=>{
    // a new todo
    setAllTodos([...allTodos,{task : text,id : allTodos.length,completed:false}])
    setText("") //setting back input to empty value
}


// roemoving item function
const remove_item = (evnt)=>{

delete allTodos[evnt.target.value]     // deleting item index from the state array

// searching through the array to get all the items that is matching the already delected index
const newTodo = allTodos.filter( function(id){

    return id != evnt.target.value   // returning the list
})

setAllTodos(newTodo) //re seting the state array with the new list
}

    return (
        <>
            {/* body container */}
               <div className='flex justify-center items-center mb-[10%]'>

                {/* input */}
               <input type="text" className='border-b-2 border-blue-500  w-[25%] outline-none' value={text} onChange={(e)=> setText(e.target.value)}/>

               {/* add todo button */}
                <button type='submit' className=' mx-3 bg-red-600 text-white px-6 py-2 rounded-lg' onClick={addTodo}>Add</button>
               </div>

                {/* todos */}
                {
                        // getting all item in the todo
                    allTodos.map( (todo,index) =>{  // getting (current_item,index_of_current_item)
                        return(

                            // inner todo container
                            <div key={todo.id} className='border-2  py-9 px-10 font-bold capitalize text-2xl shadow-lg w-[40%] flex justify-between '>

                                {/* passing todo data as props to the  main component */}
                                <TodoList  todos={todo.task} id={todo.id} />

                                {/* delete item button */}
                                <button className='font-normal bg-red-500 text-white px-4 rounded-sm text-lg text-center py-2' value={index}  onClick={remove_item} >delete</button>
                            </div>

                        )
                    })
                }
        </>
    )
}



