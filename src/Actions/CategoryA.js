import axios from 'axios';
import { CheckLoginServer } from '../Helpers/CheckLogin';
import { BaseUrl } from './Base';


export const GetVehicleTypes = () => async (dispatch) => {
    try {

        dispatch({
            type: "VehicleTypeRequest",
        })

        const { data } = await axios.get(`${BaseUrl}/api/AllVehicleTypes`);

        dispatch({
            type: "VehicleTypeSuccess",
            payload: data,
        })
    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "VehicleTypeError",
            payload: error
        })
    }
}

export const GetLicenseTypes = () => async (dispatch) => {
    try {

        dispatch({
            type: "LicenseTypeRequest",
        })

        const { data } = await axios.get(`${BaseUrl}/api/licensetypes`);

        dispatch({
            type: "LicenseTypeSuccess",
            payload: data,
        })
    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "LicenseTypeError",
            payload: error
        })
    }
}

