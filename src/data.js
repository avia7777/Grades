let courses = [
    {
        title: "Algo",
        id: "67504",
        exercises: [
            {
                index: 1,
                grade: 92
            },
            {
                index: 2,
                grade: 100
            },
            {
                index: 3,
                grade: 86
            },
            {
                index: 4,
                grade: 98
            },
            {
                index: 5,
                grade: 76
            }
        ]
    },
    {
        title: "Probability",
        id: "84030",
        exercises: [
            {
                index: 1,
                grade: 92
            },
            {
                index: 2,
                grade: 100
            }
        ]
    },
    {
        title: "OOP",
        id: "67905",
        exercises: [
            {
                index: 1,
                grade: 92
            },
            {
                index: 2,
                grade: 100
            },
            {
                index: 3,
                grade: 20
            },
            {
                index: 4,
                grade: 46
            }
        ]
    }
]

export function getCourses() {
    return courses;
}