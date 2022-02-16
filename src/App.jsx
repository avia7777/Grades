import { useEffect } from 'react';
import './App.css';
import Course from './Components/Course';

function App() {
  // const exercises = [
  //   {index: 1, grade: 92},
  //   {index: 2, grade: 100},
  //   {index: 3, grade: 76},
  //   {index: 4, grade: 85},
  //   {index: 5, grade: 95}
  // ]
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
      <Course title="Algo" exercises={exercises}/>
    </div>
  );
}

export default App;
