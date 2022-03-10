import { useEffect, useState } from 'react';
import './App.css';
import Course from './Components/Course';
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu"

function App() {
  
  const [exercises, setExercises] = useState([]);

  useEffect( async() => {
    let res = await fetch('http://localhost:3000/data.json');
    res = await res.json();
    setExercises(res)
  }, [])
  
  return (
    <div className="App">
      <Menu />
      <div className='container'>
        <Routes>
          <Route path='/' element={<h1>Grades</h1>}></Route>
          <Route path="courses/:courseId" element={<Course globalData={exercises}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
