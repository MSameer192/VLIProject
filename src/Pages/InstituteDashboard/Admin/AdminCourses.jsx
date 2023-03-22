import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAdminCoursesA } from '../../../Actions/CourseA';



const DashBoardAdminCourses = () => {
    const Dispatch = useDispatch();
    const { AdminCourses } = useSelector(Store => Store.CourseReducer)
    useEffect(() => {
        Dispatch(GetAdminCoursesA())
    }, [Dispatch])
    console.log(AdminCourses)
    return (
        <div className="flex w-full py-9 px-14 bg-white rounded-[40px]">
            <h2 className="text-xs font-normal">Courses List</h2> 


        </div>
    )
}

export default DashBoardAdminCourses