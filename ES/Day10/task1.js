
function createCourseInfo(course) {
    const allowedProperties = ['courseName', 'courseDuration', 'courseOwner'];
    const defaultValues = {
        courseName: "Untitled Course",
        courseDuration: "4 weeks",
        courseOwner: "Unknown"
    };

  
    const courseInfo = {};

    for (const key in course) {
        if (allowedProperties.includes(key)) {
            courseInfo[key] = course[key];
        } else {
            alert(`Ignored invalid property: ${key}`);
            return;
        }
    }

    courseInfo.courseName = courseInfo.courseName || defaultValues.courseName;
    courseInfo.courseDuration = courseInfo.courseDuration || defaultValues.courseDuration;
    courseInfo.courseOwner = courseInfo.courseOwner || defaultValues.courseOwner;


    console.log(`Course Name: ${courseInfo.courseName}`);
    console.log(`Course Duration: ${courseInfo.courseDuration}`);
    console.log(`Course Owner: ${courseInfo.courseOwner}`);
}

