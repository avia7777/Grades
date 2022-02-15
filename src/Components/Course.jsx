import Exercise from "./Exercise";

function Course(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <Exercise index={1} grade={85}/>
            <Exercise index={2} grade={99}/>
        </div>
    )
}

export let x = 15;
export default Course;