import React from 'react'
import InstituteTemplate from '../../Components/InstituteTemplate/InstituteTemplate';
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin';
import ClientInfo from './Components/ClientInfo';
import CourseProgressIns from './Components/CourseProgressIns';

const AboutClientChild = () => {

    useCheckLogin(false, ["Institute"], ["Staff", "Admin"])
    return (
        <div className='flex justify-start items-center py-16 flex-col px-3 sm:bg-[#F8F8F8] w-full gap-16 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-32'>
            <ClientInfo />
            <CourseProgressIns />
        </div>
    )
}


const AboutClient = () => <InstituteTemplate Element={AboutClientChild} m_top="mt-0" />



export default AboutClient