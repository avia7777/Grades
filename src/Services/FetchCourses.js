const MOODLE_URL = "https://moodle2.cs.huji.ac.il/nu21/webservice/rest/server.php?moodlewsrestformat=json"

export const getCoursesID = async (userToken, userID) => {
    let res = await fetch(MOODLE_URL, {
    body:  `wstoken=${userToken}&wsfunction=core_enrol_get_users_courses&userid=${userID}`,
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    method: "POST"
    });

    res = await res.json();
    let coursesIDs = res.map(course => course.id);
    console.log(coursesIDs)
}


export const getExercisesByCourse = async (userToken, userID, courseID) => {
  try {
    let res = await fetch(MOODLE_URL, {
      body:  `wstoken=${userToken}&wsfunction=gradereport_user_get_grade_items&userid=${userID}&courseid=${courseID}`,
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      method: "POST"
    });
    res = await res.json();
    let exercises = res.usergrades[0].gradeitems;

    exercises = exercises.filter(element => element.graderaw).map(exercise => {
      return {
        title: exercise.itemname,
        grade: exercise.graderaw
      }
    });
    console.log(exercises);
    return exercises;    
  }
  catch (e) {
    console.log(`Error in course ${courseID}: ${e}\n`);
    return;
  }
}
