export const MyCoursesButtonsInfo = {
    Heading: "My Course",
    ButtonsInfo: [
        {
            Link: '/mycourses/enrolledcourses',
            Id: "EnrolledCourses",
            Text: "Enrolled Courses",
            params:true
        },
        {
            Link: '/mycourses/Wishlist',
            Id: "Wishlist",
            Text: "My Wishlist",
            params:true
        },
        {
            Link: '/mycourses/completed',
            Id: 'completed',
            Text: "Completed Courses",
            params:true
        },
    ]
};
export const EnrolledCourseButtonsInfo = {
    Heading: "Automotive Course",
    ButtonsInfo: [
        {
            Link: '/enrolledcourse/coursemodule',
            Id: "CourseModule",
            Text: "Course Module",
            params:true
        },
        {
            Link: '/enrolledcourse/upcomingclasses',
            Id: "UpcomingClasses",
            Text: "Upcoming Classes",
            params:true
        },
        {
            Link: '/enrolledcourse/progress',
            Id: 'CourseProgress',
            Text: "Course Progress",
            params:true
        },
    ]
}

export const InsEnrolledCourseButtons = {
    ButtonsInfo: [
        {
            Link: '/enrolledcourse/AboutClient',
            Id: "AboutClient",
            Text: "About Client",
            params:true
        },
        {
            Link: '/enrolledcourse/EnrolledCourse',
            Id: "EnrolledCourse",
            Text: "Enrolled Course",
            params:true
        },
        {
            Link: '/enrolledcourse/PaymentSetting',
            Id: 'PaymentSetting',
            Text: "Payment Setting",
            params:true
        },
    ]
}


export const TeacherButtons = {
    ButtonsInfo: [
        {
            Link: '/teacher/AboutStudent',
            Id: "AboutStudent",
            Text: "About Student",
            params:true
        },
        {
            Link: '/teacher/CourseModule',
            Id: "CourseModule",
            Text: "Course Module",
            params:true
        },
        {
            Link: '/teacher/UpcomingClasses',
            Id: 'UpcomingClasses',
            Text: "Upcoming Classes",
            params:false
        },
        {
            Link: '/teacher/CourseProgress',
            Id: 'CourseProgress',
            Text: "CourseProgress",
            params:true
        },
    ]
}