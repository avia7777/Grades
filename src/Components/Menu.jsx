import { Link } from "react-router-dom";
import { getCourses } from "../data";

function Menu() {
    let courses = getCourses();
    return (
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
        >
          {courses.map(course => (
            <Link
              to={`/courses/${course.id}`} 
              key={course.id}
            >
              {course.title} | {" "}
            </Link> 
          ))}
      </nav>
    )
}

export default Menu