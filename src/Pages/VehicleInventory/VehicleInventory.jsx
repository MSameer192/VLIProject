import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLicenseTypes, GetVehicleTypes } from "../../Actions/CategoryA";
import { GetVehicleA } from "../../Actions/VehicleA";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import NoDataResponse from "../../Components/NoDataResponse";
import useCheckLogin from "../../Helpers/CustomHooks/CheckLogin";
import AddVehicle from "./Components/AddVehicle";
import CarTiles from "./Components/CarTiles";
import Filters from "./Components/Filters";
import "./VehicleInventory.css";
const VehicleInventory = () => {
  const Dispatch = useDispatch();
  const { Vehicles, loading } = useSelector((Store) => Store.VehicleReducer);
  useEffect(() => {
    Dispatch(GetVehicleA());
    Dispatch(GetVehicleTypes());
    Dispatch(GetLicenseTypes());
  }, [Dispatch]);
  useCheckLogin(true, ["Institute"], ["Staff", "Admin"]);

  return (
    <div
      className={`flex bg-[#F7F7F7] pt-28 gap-10 sm:gap-0 relative
    flex-col  sm:flex-row
    ml-0      sm:ml-24
    mt-8      sm:mt-10    md:mt-12    lg:mt-14    xl:mt-16    2xl:mt-20
    w-full    sm:w-[calc(100%_-_96px)]
    `}
    >
      <div
        className={`flex flex-wrap gap-10 items-center md:items-start
        w-full    sm:w-3/5    md:w-2/3      lg:w-3/4
        flex-col              md:flex-row
        order-2   sm:order-1
        px-1      sm:px-2     md:px-3   lg:px-4   xl:px-5   2xl:px-6
      `}
      >
        {loading ? (
          <div className="flex justify-center items-center w-full md:h-[50vh]">
            <LoadingSpinner />
          </div>
        ) : Vehicles?.length === 0 ? (
          <div className="mx-auto">
            <NoDataResponse
              topText="Sorry, there are no vehicles to show!"
              bottomText="Admin/Institute can add vehciles by click on 'Add a New Vehicle' button."
            />
          </div>
        ) : (
          Vehicles?.map((Vehicle) => (
            <CarTiles key={Vehicle.VehicleId} Vehicle={Vehicle} />
          ))
        )}
      </div>

      <div
        className={`flex flex-col gap-12 order-1 lg:pr-5
      items-center                lg:items-end
      w-full        sm:w-2/5      md:w-1/3      lg:w-1/4 
      `}
      >
        <AddVehicle />
        <Filters />
      </div>
    </div>
  );
};

export default VehicleInventory;
