import React from 'react'

const UserInput = ({ AuthPageName, Credentials, setCredentials }) => {

    let InputBoxStyle = `w-full text-black bg-[#F3F6F7] border-none rounded-lg
    text-4xs    lg:text-2xs     xl:text-xs      2xl:text-base
    py-[6px]                    xl:py-3
    px-[8px]                    xl:px-[22px]    2xl:px-7`;
    return (
        <div className='flex flex-col gap-3 sm:gap-6 w-full '>

            <Name AuthPageName={AuthPageName} InputBoxStyle={InputBoxStyle} Credentials={Credentials} setCredentials={setCredentials} />

            <input className={`${InputBoxStyle} max-w-[650px]`} type="email" placeholder='Email Address'

                value={Credentials.Email}
                onChange={(e) => { setCredentials({ ...Credentials, Email: e.target.value }) }}
            />
            <input className={`${InputBoxStyle} max-w-[650px]`} type="password" placeholder='Password'

                value={Credentials.Password}
                onChange={(e) => { setCredentials({ ...Credentials, Password: e.target.value }) }}
            />
            {
                AuthPageName === "Sign Up"
                    ? <input className={`${InputBoxStyle} max-w-[650px]`} type="password" placeholder='Confirm Password'

                        value={Credentials.ConfirmPassword}
                        onChange={(e) => { setCredentials({ ...Credentials, ConfirmPassword: e.target.value }) }}
                    />
                    : null
            }
        </div>
    )
}
function Name({ AuthPageName, InputBoxStyle, Credentials, setCredentials }) {
    return (
        AuthPageName === "Sign Up"
            ? <span className='flex gap-12 w-full'>
                <input className={`${InputBoxStyle} max-w-[300px]`} type="text" placeholder='First Name'

                    value={Credentials.FirstName}
                    onChange={(e) => { setCredentials({ ...Credentials, FirstName: e.target.value }) }}
                />
                <input className={`${InputBoxStyle} max-w-[300px]`} type="text" placeholder='Last Name'

                    value={Credentials.LastName}
                    onChange={(e) => { setCredentials({ ...Credentials, LastName: e.target.value }) }}
                />
            </span>
            : null
    )
}
export default UserInput