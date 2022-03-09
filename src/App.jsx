import { useEffect } from 'react';
import './App.css';
import Course from './Components/Course';
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu"

function App() {
  
  let exercises = [];
  useEffect( async() => {
    let res = await fetch('./data.json');
    // let resJson = await res.json();
    console.log(res);
    res = await res.json();
    console.log(res);
    exercises = res[0].exercises;
  }, [])
  console.log(exercises);
  
  return (
    <div className="App">
      <Menu />
      <div className='container'>
        <Routes>
          <Route path='/' element={<h1>Grades</h1>}></Route>
          <Route path="courses/:courseId" element={<Course />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
