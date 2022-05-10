import { getCourses, getExercises } from "../data";
import Exercise from "./Exercise";
import { useParams, Link } from "react-router-dom";
import { getExercisesByCourse } from "../Services/FetchCourses";
import {useState, useEffect} from "react"

function Course(props) {
    const [exercises, setExercises] = useState([]);

    let params = useParams();
    console.log("rendering ", params.courseId);
    useEffect( async () => {
        let courseExs = await getExercisesByCourse('8328558a7c2e32ffa8ab8e3fcc6dc3fa', 783673, params.courseId);
        const exerciseElements = courseExs.map((element, key) => {
            return <Exercise key={key} index={element.title} grade={element.grade}/>
        });    
        setExercises(exerciseElements);
    }, [params]);

    return (
        <div className="Course">
            <h1>{params.courseId}</h1>
            {exercises}
        </div>
    )
}

export default Course;