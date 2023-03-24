import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import './RichTextEditor.css'

const RichTextEditor = ({ Errors, setErrors, Data, setData, KeyName }) => {
    const [DescriptionErr, setDescriptionErr] = useState();
    const [Description, setDescription] = useState();

    useEffect(() => {
        if (DescriptionErr)
            if (Errors)
                setErrors({ ...Errors, [KeyName]: DescriptionErr })
            else if (!DescriptionErr) {
                delete Errors[KeyName]
                setErrors({ ...Errors })
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [DescriptionErr])

    useEffect(() => {
        if (KeyName)
            setData({ ...Data, [KeyName]: Description })
        else
            setData({ ...Data, Description })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Description, KeyName])

    return <SunEditor

        onChange={(Content) => {
            // const aa = document.getElementsByClassName("se-wrapper-inner")
            if (Content !== "") {
                setDescriptionErr(false)
                setDescription(Content)
            }
            else
                setDescriptionErr(true)
        }}
    />
}

export default RichTextEditor