import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const useAxios = (Method, Url) => {
    const [State, setState] = useState();
    const [Loading, setLoading] = useState(true);
    const [Done, setDone] = useState(false);
    const [Errors, setErrors] = useState();
    useEffect(() => {
        if (Method && Url && !Done) {
            setDone(true)
            axios[Method](Url)
                .then(res => {
                    setState(res);
                    setErrors()
                })
                .then(() => setLoading(false))
                .catch(err => {
                    setState()
                    setErrors(err)
                    setLoading(false)
                })
        }

    }, [Method, Url, Done])

    return [State, Errors, Loading]
}

export default useAxios