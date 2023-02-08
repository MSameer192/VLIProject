import React from "react";
import Car from "./Assets/Icon awesome-ca.png";
import Email from "./Assets/Icon material-e.png";
import Phone from "./Assets/Icon awesome-ph.png";
import instructor from "./Assets/instructor.jpg";

function AssignInstructor() {
  return (
    <div>
      <p className="flex flex-col justify-center items-center   text-xl italic box-border h-[92px] border-4 bg-[#F6F5F5] text-[#000000]">
        Assign an Instructor
      </p>
      <div class="flex justify-center mr-[80px] ">
        <button class="text-[17px] border w-[98px] h-[45px] border-white px-4 py-2  bg-[#A1A3EF] text-white ">
          Driving
        </button>
        <button class="border border-white px-4 py-2  bg-[#7F82F9] text-[17px] w-[82px] h-[45px] text-white">
          Online
        </button>
        <button class="border border-white px-4 py-2  bg-[#5456C7] h-[45px] text-[17px] text-white">
          In Class
        </button>
      </div>
      <div className="flex justify-center items-center mt-2 ml-4">
        <input type="checkbox" className="mr-8 h-5 w-5"></input>
        <label className="leading-none mr-10">
          Use same Instructor for all Category classes
        </label>
      </div>
      <div className="flex justify-center mt-5 ">
        <div className="w-310 h-517 p-3 drop-shadow-[(6px 12px 12px rgba(0,0,0,0.08 ))] border-white bg-white mr-20 rounded-lg">
          <img
            src={instructor}
            alt="1"
            className=" w-[294px] h-[272px] object-cover mr-2 ml-2 mt-3 "
          />
          <p className="text-[#45454D] text-4xs text-center  ">
            Name
          </p>
          <p className="text-[12px] bg-[rgba(0,99,246,0.16 )]  text-[#0000ff] text-center  mt-2.5 ">
            Instructor
          </p>
          <div>
            <img src={Car} alt="1" className="-left- w-[27px] h-[19px] ml-[31px]" />
            <lebal className="text-gray-700 text-[15px] ml-[5px] leading-none pb-1">
              Type G.A.B.C
            </lebal>
          </div>
          <div>
            <img src={Email} alt="1" className="-left- mt-[15px] w-[20px] h-[16px] ml-[35px]" />
            <lebal className="text-gray-700 text-[15px] ml-[9px] leading-none">
              EMAIL
            </lebal>
          </div>
          <div>
            <img src={Phone} alt="1" className="-left- w-4 h-4 ml-[38px] mt-[17px]" />
            <lebal className="text-gray-700 text-[15px] ml-[11px] leading-none">
              PHONE
            </lebal>

          </div>
          <button className='drop-shadow-2xl mb-[29px] bg-[#A1A3EF] w-[145px] h-8 text-[#FFFFFF] text-[12px] rounded border-none mt-[25px] ml-[85px]'> Select Instructor</button>
        </div>


        <div className="w-310 h-517 p-3 drop-shadow-[(6px 12px 12px rgba(0,0,0,0.08 ))] border-white bg-white mr-20 rounded-lg">
          <img
            src={instructor}
            alt="1"
            className=" w-[294px] h-[272px] object-cover mr-2 ml-2 mt-3 "
          />
          <p className="text-[#45454D] text-4xs text-center  ">
            Name
          </p>
          <p className="text-[12px] bg-[rgba(0,99,246,0.16 )]  text-[#0000ff] text-center  mt-2.5 ">
            Instructor
          </p>
          <div>
            <img src={Car} alt="1" className="-left- w-[27px] h-[19px] ml-[31px]" />
            <lebal className="text-gray-700 text-[15px] ml-[5px] leading-none pb-1">
              Type G.A.B.C
            </lebal>
          </div>
          <div>
            <img src={Email} alt="1" className="-left- mt-[15px] w-[20px] h-[16px] ml-[35px]" />
            <lebal className="text-gray-700 text-[15px] ml-[9px] leading-none">
              EMAIL
            </lebal>
          </div>
          <div>
            <img src={Phone} alt="1" className="-left- w-4 h-4 ml-[38px] mt-[17px]" />
            <lebal className="text-gray-700 text-[15px] ml-[11px] leading-none">
              PHONE
            </lebal>

          </div>
          <button className='drop-shadow-2xl mb-[29px] bg-[#A1A3EF] w-[145px] h-8 text-[#FFFFFF] text-[12px] rounded border-none mt-[25px] ml-[85px]'> Select Instructor</button>
        </div>


        <div className="w-310 h-517 p-3 drop-shadow-[(6px 12px 12px rgba(0,0,0,0.08 ))] border-white bg-white mr-20 rounded-lg">
          <img
            src={instructor}
            alt="1"
            className=" w-[294px] h-[272px] object-cover mr-2 ml-2 mt-3 "
          />
          <p className="text-[#45454D] text-4xs text-center  ">
            Name
          </p>
          <p className="text-[12px] bg-[rgba(0,99,246,0.16 )]  text-[#0000ff] text-center  mt-2.5 ">
            Instructor
          </p>
          <div>
            <img src={Car} alt="1" className="-left- w-[27px] h-[19px] ml-[31px]" />
            <lebal className="text-gray-700 text-[15px] ml-[5px] leading-none pb-1">
              Type G.A.B.C
            </lebal>
          </div>
          <div>
            <img src={Email} alt="1" className="-left- mt-[15px] w-[20px] h-[16px] ml-[35px]" />
            <lebal className="text-gray-700 text-[15px] ml-[9px] leading-none">
              EMAIL
            </lebal>
          </div>
          <div>
            <img src={Phone} alt="1" className="-left- w-4 h-4 ml-[38px] mt-[17px]" />
            <lebal className="text-gray-700 text-[15px] ml-[11px] leading-none">
              PHONE
            </lebal>

          </div>
          <button className='drop-shadow-2xl mb-[29px] bg-[#A1A3EF] w-[145px] h-8 text-[#FFFFFF] text-[12px] rounded border-none mt-[25px] ml-[85px]'> Select Instructor</button>
        </div>

      </div>
    </div>

  );
}

export default AssignInstructor;