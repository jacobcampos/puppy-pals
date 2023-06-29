import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppylist: ", puppyList);

  return (
    <>
      <div className="App">
        { 
           puppies.map((puppy) => {
              return <p key ={puppy.name}>{puppy.name}</p>
             })
        }
      </div>
    </>
  );
}

export default App
