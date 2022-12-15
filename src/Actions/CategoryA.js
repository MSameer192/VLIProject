import axios from 'axios';
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
        dispatch({
            type: "LicenseTypeError",
            payload: error
        })
    }
}