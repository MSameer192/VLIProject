import React, { useRef, useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './MyCourses.css'
import MyCoursesButtons from './MyCoursesButtons';


const MyCourses = ({ Component, ButtonsInfo, PageName }) => {
  let Id = window.location.href.split("/mycourses/");
  const [Ele, setEle] = useState(document.getElementById(Id[1]));
  const { EnrollmentId } = useParams();
  const [ButtonsInfoState, setButtonsInfoState] = useState(ButtonsInfo);
  const [CheckButtonsInfo, setCheckButtonsInfo] = useState(false)

  useEffect(() => {
    if (!Ele)
      setEle(document.getElementById(Id[1]))
  }, [Ele, Id])

  const EnrolledCoursesRef = useRef();


  const OnClickMethod = (Element) => {

    let Ele = Element.parentNode?.childNodes
    for (let index = 0; index < Ele.length; index++) {

      if (Ele[index].innerText === Element.innerText) Ele[index].classList.add("ButtonBorder")

      else Ele[index].classList.remove("ButtonBorder")
    }
  }

  useEffect(() => {
    const ButtonsInfoCopy = [...ButtonsInfo.ButtonsInfo]
    if ((EnrollmentId && ButtonsInfo) && !CheckButtonsInfo) {
      setCheckButtonsInfo(true);
      ButtonsInfo?.ButtonsInfo?.forEach((value, index) => {
        ButtonsInfoCopy[index] = { ...value, Link: value.Link + "/" + EnrollmentId }
      })
      setButtonsInfoState({ ...ButtonsInfo, ButtonsInfo: [...ButtonsInfoCopy] })

    }
    else if (!ButtonsInfoState)
      setButtonsInfoState(ButtonsInfo)

  }, [EnrollmentId, ButtonsInfo, ButtonsInfoState, CheckButtonsInfo])
  
  useEffect(() => {
    if (Ele)
      OnClickMethod(Ele)

  }, [Ele])


  let MinHeight = "min-h-[calc(100%_-_80px)]";

  return (
    <div className={`mt-20 flex flex-col justify-between h-fit ${MinHeight}`}>
      <div className={`flex flex-col pt-11 pb-1
                            px-[3%] sm:px-[6%] md:px-[10%] lg:px-[14%] xl:px-[20%]
                            gap-7              md:gap-8    lg:gap-9    xl:gap-10
                            MyCoursesTopBG`}
      >

        <h1 className={`text-white 
                        text-base sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[45px] 
                        Boldfont`}
        >
          {ButtonsInfo?.Heading ? ButtonsInfo?.Heading : null}
        </h1>
        <MyCoursesButtons PageName={PageName} ButtonsInfo={ButtonsInfoState?.ButtonsInfo} EnrolledCoursesRef={EnrolledCoursesRef} OnClickMethod={OnClickMethod} />

      </div>

      {Component}

      <Footer />
    </div>
  )
}

export default MyCourses