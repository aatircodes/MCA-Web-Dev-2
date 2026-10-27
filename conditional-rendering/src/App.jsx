import { useState } from 'react'

import './App.css'

function App() {

  const [name, setName] = useState("")
  const [message, setMessage] = useState(false)

const handleChange = (e) => {
  const value = e.target.value
  setName(value)

  if (value === "") {
    setMessage(false)
  }
}


const handleClick = () => {
  setMessage(prev => !prev)
}


  return (
    <>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" placeholder='Enter your name...' onChange={handleChange}/>

    <button onClick={handleClick}>
      {name==="" ? "" : "Greet"}
      </button>

    <h2>{
      message ? `Hello ${name}` : ""
      }</h2>
    </>
  )
}

export default App



// ***********************************************
//  function handleClick() {
//     setMessage(prev => !prev);
//   }

{/* <button onClick={handleClick}>
      {message ? "hide" : "show"}
    </button>  

    <h2>
      {
        message ? "show" : " "
      }</h2>    */}
// ***********************************************