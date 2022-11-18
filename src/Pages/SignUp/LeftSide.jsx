import React from 'react'

const SignInLeftSide = ({ AuthPageName, setAuthPageName }) => {
    let SignUpbtnColor = AuthPageName === "Sign Up" ? "bg-white text-[#A1A3EF]" : "bg-[#EAEFF4] text-black";

    let ButtonStyle =`flex items-start gap-5 justify-start
    border-[#FEFEFE] bg-white border-solid border-[1px]
    py-3 px-20 cursor-pointer
    w-4/5 min-w-[400px] max-w-[625px]
    font-normal rounded-lg  DropShadow`
    let h4Style = "text-[30px] text-left font-normal w-[330px] Regularfont"


    return <div className='flex flex-col gap-24 w-[50%] px-24 py-14 justify-between items-start relative '>
        <button className={`absolute border-none text-[30px] -top-16 rounded-t-[28px] px-32 py-4 cursor-pointer -right-[1px] Boldfont ${SignUpbtnColor}`}
            onClick={() => setAuthPageName("Sign Up")}
        >
            Sign Up
        </button>


        <div className='flex flex-col gap-[18px] w-4/5'>
            <h4 className='Regularfont text-[30px] font-normal'>
                Client {AuthPageName}
            </h4>
            <button className={ButtonStyle}>
                <img
                    className='w-10'
                    src={require("./Assets/Google Icon.png")} alt="" />
                <h5 className={h4Style}>Continue With Google</h5>
            </button>
            <button className={ButtonStyle}>
                <img
                    className='w-10'
                    src={require("./Assets/Facebook Icon.png")} alt="" />
                <h5 className={h4Style}>Continue With Facebook</h5>
            </button>

        </div>

        <div className='w-4/5 flex flex-col gap-6 mb-20'>
            <h4 className='Regularfont text-[30px] font-normal'> Partner {AuthPageName} </h4>
            <button className={ButtonStyle}>
                <img
                    className='w-10'
                    src={require('./Assets/Institute Icon.png')} alt="" />
                <h5 className={h4Style}>{AuthPageName === "Sign Up" ? "Register" : "Continue"} as a Partner</h5>
            </button>
        </div>

    </div>
}
export default SignInLeftSide