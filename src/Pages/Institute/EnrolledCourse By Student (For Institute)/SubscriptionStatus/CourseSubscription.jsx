import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetSubscriptionStatus } from "../../../../Actions/StudentA";
import crossIcon from "./cross_icon.svg";

function CourseSubscription({ ShowSubscription, setShowSubscription }) {
  const { EnrollmentId } = useParams();
  const { Subscription } = useSelector(Store => Store.StudentReducer);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (EnrollmentId)
      Dispatch(GetSubscriptionStatus(EnrollmentId))
  }, [Dispatch, EnrollmentId])

  return (
    <div className="h-screen w-screen flex items-center justify-center fixed left-0 top-0 z-30 bg-[#00000045]">
      <div className=" backdrop-blur-sm bg-slate-300 w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-11/12 md:w-[50%] h-full bg-white border-2 rounded-b-[24px]">
          <div className="w-[100%]">
            {/*  ---- heading ------ */}
            <div className="w-[100%] h-[86px] bg-[#F1F1F1] flex items-center justify-start lg:justify-center pl-6 relative">
              <p className="text-[26px] leading-[26px] text-[#4D4F5C]">
                Course Subscription
              </p>
              <img
                className="h-[38px] w-[38px] absolute top-6 right-5 cursor-pointer"
                src={crossIcon}
                alt="Cancel Icon"
                onClick={() => setShowSubscription(false)}
              />
            </div>
            {/*  ---- body ------ */}
            <div className="text-center my-[50px] ">
              <p className="text-[#4D4F5C]">
                You can Update the status of course subscription from here
              </p>
            </div>
            <hr className="border-b-[#707070] border-b-[1px] mx-4 mb-[50px]" />
            {/* Course Subscription Action Section */}
            <div className="w-[100%] flex justify-center ">
              <div className="w-[85%] flex flex-col gap-8">
                <div className="flex justify-between textCol-action">
                  <p className="text-[#4D4F5C] text-[22px] font-normal textSmall">
                    Visa: **** **** **** (092)
                  </p>
                  <p className="text-[#4D4F5C] text-[22px] font-normal textSmall">
                    Payment Method: One Time pay
                  </p>
                </div>
                <div className="flex justify-between textCol-action">
                  <p className="text-[#4D4F5C] text-[22px] font-normal textSmall">
                    Next Installment Date: {Subscription?.NextInstallmentDate}
                  </p>
                  <Link
                    href="#"
                    className="text-[22px] underline text-[#157DBC] font-normal textSmall"
                  >
                    View Billing History
                  </Link>
                </div>
              </div>
            </div>
            {/* buttons */}
            <div className="flex my-[64px] justify-center gap-6 customActionBtn">
              <button className="bg-[#A1A3EF] text-white text-[22px] py-[17px] px-[29px] rounded-[7px] cursor-pointer border-none customActionBtnStyle">
                Put Course Status on Hold
              </button>
              <button className="bg-[#FF5163] text-white text-[22px] py-[17px] px-[59px] rounded-[7px] cursor-pointer border-none  customActionBtnStyle">
                Cancel Subscription
              </button>
            </div>
            {/* Payment Details Section */}
            <div className="w-[100%]">
              <div className="pl-12 pr-5">
                <h3 className="text-[24px] font-bold ">Payment Details</h3>
                <div className="flex justify-between my-[26px] paymentSection">
                  <div className="flex flex-col gap-[21px] w-[339px]">
                    <div className="flex justify-between">
                      <p className="text-[22px] leading-[22px] whitespace-nowrap">
                        Total Paids:
                      </p>
                      <span className="text-[22px] leading-[22px] whitespace-nowrap">
                        {Subscription?.TotalPaid} $
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[22px] leading-[22px] whitespace-nowrap">
                        Remaining Amount:
                      </p>
                      <span className="text-[22px] leading-[22px] whitespace-nowrap">
                        {Subscription?.TotalFee}
                      </span>
                    </div>

                  </div>
                  <div className="flex flex-col gap-[21px] w-[339px] ml-[25px] paymentSecondSection">
                    <div className="flex justify-between">
                      <p className="text-[22px] leading-[22px] whitespace-nowrap">
                        Course Fee:
                      </p>
                      <span className="text-[22px] leading-[22px] whitespace-nowrap">
                        300 $
                      </span>
                      <span></span>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[22px] leading-[22px] whitespace-nowrap">
                        Installments Paid:
                      </p>
                      <span className="text-[22px] leading-[22px] whitespace-nowrap">
                        {Subscription?.InstallmentsPaid}
                      </span>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSubscription;
