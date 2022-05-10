let courses = [
    {
        title: "Algo",
        id: "6750401",
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
        id: "8043001",
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
        id: "67125",
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