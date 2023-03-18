import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetAdminCoursesA } from '../../../Actions/CourseA';



const DashBoardAdminCourses = () => {
    const Dispatch = useDispatch();
    useEffect(() => {
        Dispatch(GetAdminCoursesA())
    }, [Dispatch])

    return (
        <div className="flex w-full py-9 px-14 bg-white rounded-[40px]">
            <h2 className="text-xs font-normal">Courses List</h2>


        </div>
    )
}

export default DashBoardAdminCourses