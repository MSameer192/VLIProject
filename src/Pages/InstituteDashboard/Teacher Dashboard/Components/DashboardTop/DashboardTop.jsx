import TeacherCalender from '../Calender/DashboardCalender'
const DashboardTop = () => {
    return (
        <div className='flex w-[95%] h-fit gap-4 bg-[#F7F7F7]'>
            <div className="flex gap-10 w-4/5 py-16 px-11 justify-between rounded-3xl bg-white  shadow-[3px_4px_6px_#00000029]">

                <div className='TeacherCards StudentNumberCardBg'>
                    <img className="w-28" src={require('./Assets/Students.svg').default} alt="" />
                    <div className='flex flex-col gap-5 items-center'>
                        <h4 className='Boldfont text-4xs text-white text-center'>Students</h4>
                        <p className='text-[38px] font-normal text-white'>2</p>
                    </div>

                    <p className="text-center text-4xs max-w-[200px] text-white">
                        You will see the current
                        enrolled students list here
                    </p>
                </div>


                <div className='TeacherCards WeekCardBg'>
                    <img className="w-[70px]" src={require('./Assets/Calender.svg').default} alt="" />
                    <div className='flex flex-col gap-5 items-center'>
                        <h4 className='Boldfont text-4xs text-white text-center'>Weekly Schedule</h4>
                    </div>

                    <p className="text-center text-4xs max-w-[200px] text-white">
                        You can see the Upcoming
                        weekly classes schedule here
                    </p>
                </div>
                <div className='TeacherCards TimeCardBg'>
                    <img className="w-[70px]" src={require('./Assets/Clock.svg').default} alt="" />

                    <h4 className='Boldfont text-4xs text-white text-center'>Available Hours</h4>

                    <p className="text-center text-4xs max-w-[200px] text-white">
                        You can add a leave or change your available hours from here
                    </p>
                </div>



                <div className='TeacherCards CompleteCourseCardBg'>
                    <img className="w-[70px]" src={require('./Assets/Complete Course.svg').default} alt="" />
                    <div className='flex flex-col gap-5 items-center'>
                        <h4 className='Boldfont text-4xs text-white text-center'>Completed Courses</h4>
                        <p className='text-[38px] font-normal text-white'>2</p>
                    </div>

                    <p className="text-center text-4xs max-w-[200px] text-white">
                        You can view the completed course and students review from here
                    </p>
                </div>
            </div>


            <div className="w-1/5 flex justify-center items-center bg-white calenderClassTecherDashDiv">
                <TeacherCalender />
            </div>
        </div>
    )
}

export default DashboardTop