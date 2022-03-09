import { getCourses, getExercises } from "../data";
import Exercise from "./Exercise";
import { useParams, Link } from "react-router-dom";


function Course(props) {
    let params = useParams();
    let courses = getCourses();
    let curCourse = courses.find( course => course.id === params.courseId);

    const exerciseElements = curCourse.exercises.map((element, key) => {
        return <Exercise key={key} index={element.index} grade={element.grade}/>
    });
    return (
        <div className="Course">
            <h1>{curCourse.title}</h1>
            {exerciseElements}
        </div>
    )
}

export default Course;

// const arr = [1, 2, 5];

// function myFunc(value, index) {
//     console.log(`Value at index ${index} is ${value}`);
// }

// arr.map(myFunc);