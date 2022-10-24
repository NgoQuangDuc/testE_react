import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import _ from 'lodash'
import { render } from "react-dom";
import Test from './Test/Test'
import Login from './Login/Login'
import Paper from './Paper/Paper'
import About from './About/About'
import Login1 from './Login1.js/Login1';
import Resgister from '../src/Login1.js/Resgister'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

//   useEffect(()=>{
//     fetches()
//   },[])
//   const fetches=async()=>{
// let data=await axios.post('http://localhost:8081',{level:1})

// var result=_.chain(data.data.data)
// // Group the elements of Array based on `color` property
// .groupBy("question")
// // `key` is group's name (color), `value` is the array of objects
// .map((value, key) => 
//   ({ color: key, users: value })
// )
// .value()
// console.log(result)
//   }
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Login />}>
      <Route path="/:user"  element={<Login />}></Route>
        
          </Route>
        <Route path="teams" element={< Test/>}>
     
        </Route>
        <Route path="login1" element={< Login1 />}>
     
     </Route>
     <Route path="resgister" element={< Resgister />}>
     
     </Route>
        <Route path="test/:id" element={< Paper/>}> </Route>
        <Route path="about" element={< About/>}>
     
     </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
