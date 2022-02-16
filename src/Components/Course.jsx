import Exercise from "./Exercise";

function Course(props) {
    const exerciseElements = props.exercises.map((element, key) => {
        return <Exercise key={key} index={element.index} grade={element.grade}/>
    });

    return (
        <div className="Course">
            <h1>{props.title}</h1>
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