import axios from "axios";
import { CheckLoginServer } from "../Helpers/CheckLogin";
import { BaseUrl } from "./Base";

const instance = axios.create({
    withCredentials: true,
    baseURL: BaseUrl
})
export const AddVehicleA = (VehicleData, Navigate) => async (dispatch) => {
    try {
        dispatch({ type: "AddVehicleRequest" });

        const { data } = await axios.post('/api/Vehicle/add', VehicleData, { withCredentials: true });

        dispatch({
            type: "AddVehicleSuccess",
            payload: data
        });
        Navigate('/vehicle/inventory')
    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "AddVehicleSuccess",
            payload: error
        });
    }
}

export const UpdateVehicleA = (VehicleData, Navigate) => async (dispatch) => {
    try {
        dispatch({ type: "GetAllVehiclesRequest" });
        console.log(VehicleData)
        const { data } = await axios.put('/api/Vehicle/update', VehicleData);

        dispatch({
            type: "GetAllVehiclesSuccess",
            payload: data
        });
        Navigate('/vehicle/inventory')
    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "GetAllVehiclesSuccess",
            payload: error
        });
    }
}


export const GetVehicleA = () => async (dispatch) => {
    try {
        dispatch({ type: "GetAllVehiclesRequest" });

        const { data } = await axios.get('/api/Vehicles', { withCredentials: true });

        dispatch({
            type: "GetAllVehiclesSuccess",
            payload: data
        });

    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "GetAllVehiclesSuccess",
            payload: error
        });
    }
}



export const GetSingleVehicleA = (VehicleId) => async (dispatch) => {
    try {
        dispatch({ type: "GetSingleVehicleRequest" });

        const { data } = await axios.get(`/api/Vehicle/${VehicleId}`);

        dispatch({
            type: "GetSingleVehicleSuccess",
            payload: data
        });

    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "GetSingleVehicleFailure",
            payload: error
        });
    }
}