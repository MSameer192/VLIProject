import axios from "axios";

export const AddVehicleA = (VehicleData,Navigate) => async (dispatch) => {
    try {
        dispatch({ type: "AddVehicleRequest" });

        const { data } = await axios.post('/api/Vehicle/add', VehicleData);

        dispatch({
            type: "AddVehicleSuccess",
            payload: data
        });
        Navigate('/vehicle/inventory')
    } catch (error) {
        dispatch({
            type: "AddVehicleSuccess",
            payload: error
        });
    }
}