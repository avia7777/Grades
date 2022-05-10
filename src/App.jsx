import { useEffect, useState } from 'react';
import './App.css';
import Course from './Components/Course';
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu"
import {getCourses, getExercisesByCourse} from './Services/FetchCourses';


function App() {
  const [courses, setCourses] = useState([]);
  // const [exercises, setExercises] = useState([]);

  useEffect( async () => {
    // let res = await fetch('http://localhost:3000/data.json');
    let courses = await getCourses('8328558a7c2e32ffa8ab8e3fcc6dc3fa', 783673);
    setCourses(courses);
    // getExercisesByCourse('8328558a7c2e32ffa8ab8e3fcc6dc3fa', 783673, 67577);
    // res = await res.json();
    // setExercises(res);
  }, []);

  return (
    <div className="App">
      <Menu courses={courses}/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<h1>Grades</h1>}></Route>
          {/* <Route path="courses/:courseId" element={<Course globalData={exercises}/>} /> */}
          <Route path="courses/:courseId" element={<Course/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
