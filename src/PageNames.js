export const MyCoursesButtonsInfo = {
    Heading: "My Course",
    ButtonsInfo: [
        {
            Link: '/mycourses/enrolledcourses',
            Id: "EnrolledCourses",
            Text: "Enrolled Courses"
        },
        {
            Link: '/mycourses/Wishlist',
            Id: "Wishlist",
            Text: "My Wishlist"
        },
        {
            Link: '/mycourses/completed',
            Id: 'completed',
            Text: "Completed Courses"
        },
    ]
};
export const EnrolledCourseButtonsInfo = {
    Heading: "Automotive Course",
    ButtonsInfo: [
        {
            Link: '/enrolledcourse/coursemodule',
            Id: "CourseModule",
            Text: "Course Module"
        },
        {
            Link: '/enrolledcourse/upcomingclasses',
            Id: "UpcomingClasses",
            Text: "Upcoming Classes"
        },
        {
            Link: '/enrolledcourse/progress',
            Id: 'CourseProgress',
            Text: "Course Progress"
        },
    ]
}

export const InsEnrolledCourseButtons = {
    ButtonsInfo: [
        {
            Link: '/enrolledcourse/AboutClient/:EnrollmentId',
            Id: "AboutClient",
            Text: "About Client"
        },
        {
            Link: '/enrolledcourse/EnrolledCourse/:EnrollmentId',
            Id: "EnrolledCourse",
            Text: "Enrolled Course"
        },
        {
            Link: '/enrolledcourse/PaymentSetting',
            Id: 'PaymentSetting',
            Text: "Payment Setting"
        },
    ]
}