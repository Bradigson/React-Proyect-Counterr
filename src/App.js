import React, {useState} from 'react'
import './App.css';
import Sumar from './imgs/mas.png';
import Menos from './imgs/resta.png';


function App() {
  const [count, setCount] = useState(0);

  
  const SumCount = ()=>{
    setCount(count + 1)
  }
  const RestCount = ()=>{
    setCount(count - 1);
  }

  return (
  
    <div className="container">
      <div className="card mt-5">
        <div className="card-header text-center">
          <h1 >COUNTER</h1>
        </div>
        <div className="card-body">
          <div><h2 className="d-flex justify-content-center counter">{count}</h2></div>

          
        </div>

         <div className='card-footer d-flex justify-content-center justify-content-around'>
              <button className="btn " onClick={()=>{SumCount()}}><img src={Sumar} className="w-50 p-2" alt=""/></button>
              <button className="BtnR mt-2" onClick={()=>setCount(0)}><h2>R</h2></button>
              <button className="btn "  onClick={()=>{RestCount()}}><img src={Menos} className="w-50 p-2" alt=""/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
