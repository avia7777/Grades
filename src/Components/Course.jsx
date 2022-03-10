import { getCourses, getExercises } from "../data";
import Exercise from "./Exercise";
import { useParams, Link } from "react-router-dom";


function Course(props) {
    let params = useParams();
    let curCourse = props.globalData.find( course => course.id === params.courseId);
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