import React from 'react'
import { useSelector } from 'react-redux';

const UserInput = ({ AuthPageName, Credentials, setCredentials }) => {

    let InputBoxStyle = `w-full text-black bg-[#F3F6F7] border-none rounded-lg
    text-4xs    lg:text-2xs     xl:text-xs      2xl:text-base
    py-[6px]                    xl:py-3
    px-[8px]                    xl:px-[22px]    2xl:px-7`;
    const { error } = useSelector((Store) => Store.LoginSignupReducer);

    return (
        <div className='flex flex-col gap-3 sm:gap-6 w-full '>

            <Name AuthPageName={AuthPageName} InputBoxStyle={InputBoxStyle} Credentials={Credentials} setCredentials={setCredentials} error={error} />

            <h4 className='text-[red] font-normal'>  {AuthPageName !== "Sign Up" ? error.LoginError : null} </h4>


            <span className='flex flex-col'>
                <h4 className='text-[red] font-normal'>  {AuthPageName === "Sign Up" ? error.Email : null} </h4>

                <input className={`${InputBoxStyle} max-w-[650px]`} type="email" placeholder='Email Address' required

                    value={Credentials.Email}
                    onChange={(e) => { setCredentials({ ...Credentials, Email: e.target.value }) }}
                />
            </span>



            <span>
                <h4 className='text-[red] font-normal'>  {AuthPageName === "Sign Up" ? error.Password : null} </h4>

                <input className={`${InputBoxStyle} max-w-[650px]`} type="password" placeholder='Password' required
                    value={Credentials.Password}
                    onChange={(e) => { setCredentials({ ...Credentials, Password: e.target.value }) }}
                />
            </span>
            {
                AuthPageName === "Sign Up"
                    ? <span className='flex flex-col'>
                        <h4 className='text-[red] font-normal'>
                            {AuthPageName === "Sign Up" ? error.ConfirmPassword : null}
                        </h4>


                        <input className={`${InputBoxStyle} max-w-[650px]`} type="password" placeholder='Confirm Password' required

                            value={Credentials.ConfirmPassword}
                            onChange={(e) => setCredentials({ ...Credentials, ConfirmPassword: e.target.value })}
                        />
                    </span>
                    : null
            }
        </div>
    )
}
function Name({ AuthPageName, InputBoxStyle, Credentials, setCredentials, error }) {
    return (
        AuthPageName === "Sign Up"
            ? <span className='flex gap-12 w-full'>

                <span className='flex flex-col'>
                    <h4 className='text-[red] font-normal'>  {AuthPageName === "Sign Up" ? error.FirstName : null} </h4>

                    <input className={`${InputBoxStyle} max-w-[300px]`} type="text" placeholder='First Name' required

                        value={Credentials.FirstName}
                        onChange={(e) => { setCredentials({ ...Credentials, FirstName: e.target.value }) }}
                    />
                </span>



                <span>
                    <h4 className='text-[red] font-normal'>  {AuthPageName === "Sign Up" ? error.LastName : null} </h4>

                    <input className={`${InputBoxStyle} max-w-[300px]`} type="text" placeholder='Last Name' required
                        value={Credentials.LastName}
                        onChange={(e) => { setCredentials({ ...Credentials, LastName: e.target.value }) }}
                    />
                </span>
            </span>
            : null
    )
}
export default UserInput