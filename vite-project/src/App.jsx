
import Hanaan from './hanaan'
import React,{ useState } from 'react'
function App() {
let [counter,setcounter]=useState(15)

const inc=()=>{
  console.log("Button was pressed:" ,counter)
  counter=counter +1
  if(counter>20){
    setcounter(20)
  }
  else{
  setcounter(counter)
  }
}
const dec=()=>{
  counter--
  if(counter<0){
    setcounter(0)
  }
  else{
  setcounter(counter)
  }
}
  return (
    <>
    <Hanaan/>
   <h1>Hi I am learning react with vite</h1>
   <h2>counter: {counter}</h2>
   <button onClick={inc}>Inc Value</button>
   <br></br>
   <br></br>
   <button onClick={dec}>Dec Value</button>
    </>
  )
}

export default App
