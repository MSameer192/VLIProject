import React from 'react'
import { Link } from 'react-router-dom'
import { GetLocalStorage } from '../../../../../../Helpers/LocalStorage/LocalStorage'
import './RightCards.css'
const RightCards = () => {
    let AddCourse = `/addcourse`;
    let RecommendCourse = `/Admin/course/recommend`;
    let AdminCourse = `/admin/addcourse`;
    let CourseRoute = GetLocalStorage("UserInfo").User === "Admin"
        ? AdminCourse :
        GetLocalStorage("UserInfo").InstituteUserType === "Admin"
            ? RecommendCourse
            : AddCourse;
    return (
        <div className='RightCardsContainer'>

            <div>
                <div className='RightCardHeading'>
                    Add a New Course
                </div>
                <div >
                    Want to publish a Vehicle Learning course?
                    click on Create Course to publish
                    <Link className='RightCardLink'
                        to={CourseRoute}>
                        <span className='text-6xs'>Create Course</span>
                        <span className='Img'>
                            <img src={require('../Assets/Add.svg').default} alt="" />
                        </span>
                    </Link>

                </div>
            </div>
            {
                GetLocalStorage("UserInfo").User === "Admin" ?
                    <div  >
                        <div className='RightCardHeading'>Add a New E-Book</div>
                        <div>
                            Want to publish an E-Book to Vehicle
                            Learning innovation click on Create
                            Course to publish
                            <Link className='RightCardLink'
                                to={'/admin/Book/add'}>
                                <span className='text-6xs'>Publish e-book</span>
                                <span className='Img'>
                                    <img src={require('../Assets/Add.svg').default} alt="" />
                                </span>
                            </Link>

                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default RightCards