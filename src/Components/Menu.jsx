import { Link } from "react-router-dom";
import { getCourses } from "../data";

function Menu(props) {
    let { courses } = props;
    return (
        <nav>
          <Link className='menu-link homepage-link' to="/">Homepage</Link>
          {courses.map(course => (
            <Link className='menu-link' to={`/courses/${course.id}`} key={course.id}>
              {course.title}
            </Link> 
          ))}
      </nav>
    )
}

export default Menu