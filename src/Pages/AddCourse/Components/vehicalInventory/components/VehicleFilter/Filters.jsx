import React, { useContext, useEffect, useState } from 'react'
import SideFilters from '../../../../../../Components/SideFilter/SideFilters'
import FilterArr from './DropDown/FilterArr'
import './CourseFilter.css'
import { useDispatch } from 'react-redux'
import { SocketContext } from '../../../../../../App'
import { FilterCourses } from '../../../../../../Actions/Events/FilterA'
const Filters = () => {
  const Dispatch = useDispatch()
  const [Filters, setFilters] = useState([])
  const [FiltersObj, setFiltersObj] = useState({});
  const Socket = useContext(SocketContext);

  const SubmitCourseFilter = () => {
    Dispatch(FilterCourses(null, "FilterCoursesRequest"))
    Socket?.emit("FilterInsAdminCourses", Filters);
  }

  useEffect(() => {
    Socket?.on("FilteredInsAdminCourses", (Courses) => {

      Dispatch(FilterCourses(Courses, "FilterCoursesSuccess"))
    })
  }, [Socket, Dispatch])



  const FilterArrsComp = () => <FilterArr FiltersObj={FiltersObj} setFiltersObj={setFiltersObj}
    Filters={Filters} setFilters={setFilters} />


  return (
    <SideFilters Title="Filter Course" FiltersArr={FilterArrsComp} WidthStyle="w-full max-w-[380px]" OnClick={SubmitCourseFilter} />
  )
}

export default Filters