import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Button from "../common/Button";
import { BASE_URl } from "../../constraints";
import { toast } from "react-toastify";

function TripUpdateForm({ prevData ,onClose }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: prevData });
  const onSubmit = async (data) => {
    setLoading(true);
    try {
        const response = await axios.patch(`${BASE_URl}/routes/update/${prevData._id}`,data);
        console.log(data);
        
        if (response.status===200) {
            toast.success("Trip updated successfully");
            console.log(response.data);
            reset();
            onClose();
        }
    } catch (error) {
        toast.error("Failed to update trip.")
    }finally{
        setLoading(false);
    }
  };
//   console.log(prevData);



  return (
    <div className="w-full mx-auto relative bg-white px-3 max-sm:p-1 rounded-md shadow-md">
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Bus ID */}
          <div className="mb-">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="busId"
            >
              Bus ID:
            </label>
            <input
              id="busId"
              disabled
              {...register("busId", { required: "Bus ID is required" })}
              //   onChange={(e) => setSelectedBusId(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.busId && (
              <p className="text-red-500">{errors.busId.message}</p>
            )}
          </div>

          {/* Bus Name (Disabled) */}
          <div className="mb-">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="busname"
            >
              Bus Name:
            </label>
            <input
              type="text"
              id="busname"
              value={prevData.busDetails.busname}
              disabled
              {...register("busname")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Bus Number (Disabled) */}
          <div className="mb-">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="busNo"
            >
              Bus Number:
            </label>
            <input
              type="text"
              id="busNo"
              value={prevData.busDetails.busno}
              disabled
              {...register("busno")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* From Location */}
          <div className="mb-">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="departureLocation"
            >
              From Location
            </label>
            <input
              type="text"
              id="departureLocation"
              {...register("departureLocation", {
                required: "Departure location is required",
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter departure location"
            />
            {errors.departureLocation && (
              <p className="text-red-500">{errors.departureLocation.message}</p>
            )}
          </div>

          {/* To Location */}
          <div className="mb-">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="arrivalLocation"
            >
              To Location
            </label>
            <input
              type="text"
              id="arrivalLocation"
              {...register("arrivalLocation", {
                required: "Arrival location is required",
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter arrival location"
            />
            {errors.arrivalLocation && (
              <p className="text-red-500">{errors.arrivalLocation.message}</p>
            )}
          </div>

          {/* Departure Time */}
          <div className="mb-">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="departureTime"
            >
              Departure Time
            </label>
            <input
              type="datetime-local"
              id="departureTime"
              {...register("departureTime", {
                required: "Departure time is required",
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.departureTime && (
              <p className="text-red-500">{errors.departureTime.message}</p>
            )}
          </div>

          {/* Arrival Time */}
          <div className="mb-">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="arrivalTime"
            >
              Arrival Time
            </label>
            <input
              type="datetime-local"
              id="arrivalTime"
              {...register("arrivalTime", {
                required: "Arrival time is required",
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.arrivalTime && (
              <p className="text-red-500">{errors.arrivalTime.message}</p>
            )}
          </div>

          {/* Fare */}
          <div className="mb-">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="fare"
            >
              Fare
            </label>
            <input
              type="number"
              id="fare"
              step="any"
              {...register("fare", { required: "Fare is required", min: 1 })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter fare"
            />
            {errors.fare && (
              <p className="text-red-500">{errors.fare.message}</p>
            )}
          </div>
        </div>

        <div className="m-auto flex items-center justify-between gap-2 mt-4 py-4">
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            onClick={onClose}
          >
            Cancel
          </button>
          <Button
            type="submit"
            isLoading={loading}
            disabled={loading}
            className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {loading?"Saving...":"Save"}
            
          </Button>
        </div>
      </form>

      {/* {loading && (
        <div className="absolute flex w-full h-full items-center justify-center top-0 left-0 bg-[rgba(0,0,0,0.1)]">
          <Loader />
        </div>
      )} */}
    </div>
  );
}

export default TripUpdateForm;
