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
                    { theme: "outline", size: "large" } // customization attributes
                );
                // window.google.accounts.id.prompt(); // also display the One Tap dialog
            }
            LoadButton()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [GoogleBtn, Dispatch])

    return (
        <div id="buttonDiv"
            className='w-full flex' ref={(e) => { setGoogleBtn(e) }}
        ></div>
    )
}

export default ContinueWithGoogle