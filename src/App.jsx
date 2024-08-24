import { useRef, useState } from "react"
import "./App.css"

function App() {
  let [todoArr, setArr] = useState([])
  let inputValue = useRef()

  // add todo function 
  function addTodo(event) {
    event.preventDefault()
if(inputValue.current.value == ""){
  alert('please enter value')
}

else{
  todoArr.push(inputValue.current.value)
  setArr([...todoArr])
}

inputValue.current.value =""

  }

  // delete  todo function
function del(index){
  todoArr.splice(index ,1 )
  setArr([...todoArr])
  console.log(index);
  
  
}

//   edit todo function

function edit(index){
  let updateArr  = prompt('update array') 
  todoArr.splice(index ,1 ,updateArr)
  setArr([...todoArr])
  
  
  
}


  return (
    <>
      <h1 className="text-center">Todo App</h1>
<div className="m-auto w-50 text-center mt-4 todoMain">
      <form onSubmit={addTodo}>
        <input type="text" className="input me-2" placeholder="Enter todo" ref={inputValue} />
        <button className="addBtn" type="submit">Add</button>

      </form>
      <div>
        {todoArr.map((item , index)=>{
          return <div key={index}>

<div className="display d-flex text-center justify-content-center align-items-center gap-2 ">
<p className="line">{item}</p>
<div className="d-flex gap-1">
<button className="delBtn " onClick={()=> del(index)}>Delete</button>
<button className="editBtn" onClick={()=>edit(index)}>Edit</button>
</div>


</div>




          </div>
        }) }

      </div>
      </div>
    </>

  )
}



export default App