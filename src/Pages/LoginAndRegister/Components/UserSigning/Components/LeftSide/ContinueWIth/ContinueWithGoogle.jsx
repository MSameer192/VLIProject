import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import JwtDecode from 'jwt-decode';
import { LoginWithGoogleAction, SignUpWithGoogleAction } from '../../../../../../../Actions/UserA';


const ContinueWithGoogle = () => {
    const [GoogleBtn, setGoogleBtn] = useState({});
    const Dispatch = useDispatch();
    const { AuthPageName } = useSelector(Store => Store.ToggleSignupReducer);

    useEffect(() => {

        if (GoogleBtn.id !== undefined && window?.google !== undefined) {

            function handleCredentialResponse(response) {
                const Decoded = JwtDecode(response.credential);
                if (AuthPageName === "Sign In")
                    Dispatch(LoginWithGoogleAction(Decoded, Dispatch, AuthPageName))
                else if (AuthPageName === "Sign Up")
                    Dispatch(SignUpWithGoogleAction(Decoded, Dispatch, AuthPageName))
            }
            function LoadButton() {
                window?.google?.accounts?.id.initialize({

                    client_id: "930835429220-57v4696c4vm8qrv033qq010t5jlsjp3a.apps.googleusercontent.com",
                    callback: handleCredentialResponse
                });

                window.google.accounts.id.renderButton(
                    document.getElementById(GoogleBtn?.id),
                    { theme: "outline", size: "large", width: "full" } // customization attributes
                );
                // also display the One Tap dialog
            }
            LoadButton()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [GoogleBtn, Dispatch])
    const HandleOnClick = () => { window.google.accounts.id.prompt(); console.log(12) }
    return (

        <button className={`SignUpSigninPageButtons border-none md:border-solid bg-[#ff000000] md:bg-white   w-auto md:w-full DropShadow`} type="button" onClick={HandleOnClick}>
            <div id="buttonDiv"
                className='w-full flex' ref={(e) => { setGoogleBtn(e) }}
            ></div>
            {/* <picture>
                <source media="(min-width:768px)" srcSet={require("../../../../../Assets/Google Icon.png")} />
                <img
                    className='w-9 md:w-7 xl:w-10'
                    src={require("../../../../../Assets/Google Icon @mobile.png")} alt="" />
            </picture>
            <h5 className={`SignUpSigninPageButtonText hidden md:inline-block`}
            // onClick={() => Click("GoogleLogin")}

            >
                Continue With Google
            </h5> */}

          
        </button>

    )
}

export default ContinueWithGoogle