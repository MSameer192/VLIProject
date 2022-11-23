import { Link } from "react-router-dom"

export function OtherOption({ OtherOptionDisplay, AuthPageName }) {
    return <p className={`${OtherOptionDisplay} md:inline text-3xs xl:text-2xs 2xl:text-xs text-white md:text-black`}>
        Already have an account?<Link className='no-underline text-white md:text-[#0800E2]'>
            {AuthPageName === "Sign Up" ? " Sign in" : " Sign Up"}
        </Link>
    </p>
}


export function OnRegister({ OtherOptionDisplay, AuthPageName }) {
    return <>
        <OtherOption OtherOptionDisplay={OtherOptionDisplay} AuthPageName={AuthPageName} />
        <span className={`flex items-center gap-[6px] xl:gap-4`}>
            <input className='border-[#707070] border-[1px] border-solid h-4 md:h-6 w-4 md:w-6 z-[1]' type="checkbox" name="" id="" />
            <p className='text-6xs md:text-2xs xl:text-xs 2xl:text-base text-white md:text-black'>
                I agree to the Terms and Conditions
            </p>
        </span>
    </>
}


export function OnLogin() {
    return <>
        <Link className='no-underline text-white md:text-[#3B5998] text-4xs md:text-[18px] '>Forgot Password?</Link>
        <p className='text-4xs md:text-xs text-white md:text-black'>
            Don't have an account yet? <Link className='no-underline text-white md:text-[#0800E2]'> Sign Up</Link>
        </p>
    </>
}