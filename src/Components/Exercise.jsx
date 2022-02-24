function Exercise(props) {
    // console.log(props)
    return (
        <div className='Exercise'>
            <span className="exercise-title">Exercise {props.index}: </span>
            <span className="exercise-grade">{props.grade}</span>
        </div>
    )
}

export default Exercise;
