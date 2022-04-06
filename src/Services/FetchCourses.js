const MOODLE_URL = "https://moodle2.cs.huji.ac.il/nu21/webservice/rest/server.php?moodlewsrestformat=json"

const getCoursesID = async (userToken, userID) => {
    let res = await fetch(MOODLE_URL, {
    body:  `wstoken=${userToken}&wsfunction=core_enrol_get_users_courses&userid=${userID}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
    });

    res = await res.json();
    let coursesIDs = res.map(course => course.id);
    console.log(coursesIDs)
}

export default getCoursesID;