import { useEffect } from 'react';
import './App.css';
import Course from './Components/Course';
import { Outlet, Link } from "react-router-dom";

function App() {
  const exercises = [
    {index: 1, grade: 92},
    {index: 2, grade: 100},
    {index: 3, grade: 76},
    {index: 4, grade: 85},
    {index: 5, grade: 95}
  ]
  // let exercises = [];
  // useEffect( async() => {
  //   let res = await fetch('./data.json');
  //   // let resJson = await res.json();
  //   console.log(res);
  //   res = await res.json();
  //   console.log(res);
  //   exercises = res[0].exercises;
  // }, [])
  // console.log(exercises);
  
  return (
    <div className="App">
      <h1>Grades</h1>
      <Link to="/">Homepage</Link> |{" "}
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/Algorithms">Algorithms</Link> |{" "}
        <Link to="/Probability">Probability</Link>
      </nav>
      {/* <Course title="Algo" exercises={exercises}/> */}
      <Outlet />
    </div>
  );
}

export default App;
