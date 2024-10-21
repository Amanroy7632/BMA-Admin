import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { BASE_URl } from "../constraints";
import { toast } from "react-toastify";
import Modal from "../components/modal/Modal";
import TripUpdateForm from "../components/Trip/TripUpdateForm";

function TripsPage() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch trips data from API
    axios
      .get(`${BASE_URl}/routes/get-all-routes`)
      .then((response) => {
        // console.log(response.data);
        setTrips(response.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching trips:", error);
      });
  }, []);
  const [editTripItem, setEditTripItem] = useState(null);

  const handleDelete = async (tripId) => {
    // Call API to delete trip
    try {
      const response = await axios.delete(`${BASE_URl}/routes/${tripId}`);
      if (response.status === 200) {
        toast.success("Route deleted successfully");
        setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
      }
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
    // axios.delete(`${BASE_URl}/routes/${tripId}`)
    //   .then(() => {
    //     // Remove deleted trip from state
    //     setTrips((prevTrips) =>
    //       prevTrips.filter((trip) => trip.id !== tripId)
    //     );
    //   })
    //   .catch((error) => {
    //     console.error("Error deleting trip:", error);
    //   });
  };
  const handleEditableItem = (trip) => {
    if (editTripItem && trip._id === editTripItem?._id) {
      setEditTripItem(null);
      return;
    }
    setEditTripItem(trip);
  };
  return (
    <div className=" overflow-x-scroll">
      <h1 className="text-2xl font-bold mb-4">Trips</h1>
      <table className="w-full bg-white rounded-md shadow-md">
        <thead>
          <tr className=" border bg-gray-600 text-white">
            <th className="p-4 max-sm:p-2 text-left ">Trip ID</th>
            <th className="p-4 max-sm:p-2 text-left ">Bus Name</th>
            <th className="p-4 max-sm:p-2 text-left ">From</th>
            <th className="p-4 max-sm:p-2 text-left ">To</th>
            <th className="p-4 max-sm:p-2 text-left ">Departure Time</th>
            <th className="p-4 max-sm:p-2 text-left ">Arrival Time</th>
            <th className="p-4 max-sm:p-2 text-left ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip._id}>
              <td className="p-2 max-sm:p-2  border-y-2">
                {trip._id?.substring(0, 5)}
              </td>
              <td className="p-2 max-sm:p-2 border-y-2">
                {trip.busDetails?.busname}
              </td>
              <td className="p-2 max-sm:p-2 border-y-2">
                {trip.departureLocation[0].toUpperCase() +
                  trip.departureLocation?.substring(1)}
              </td>
              <td className="p-2 max-sm:p-2 border-y-2">
                {trip.arrivalLocation[0].toUpperCase() +
                  trip.arrivalLocation?.substring(1)}
              </td>
              <td className="p-2 max-sm:p-2 border-y-2">
                {new Date(trip.departureTime).toLocaleString()}
              </td>
              <td className="p-2 max-sm:p-2 border-y-2">
                {new Date(trip.arrivalTime).toLocaleString()}
              </td>
              <td className="p-2 max-sm:p-2 border-y-2">
                <button
                  onClick={() => handleEditableItem(trip)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(trip._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" my-5 text-lg">
        Total trips: <strong>{trips.length}</strong>
      </div>
      <Modal
        isOpen={editTripItem}
        onClose={()=>setEditTripItem(null)}
        title="Update Trip"
      >
        <TripUpdateForm prevData={editTripItem} onClose={()=>setEditTripItem(null)}/>
      </Modal>
      {loading && <Loader />}
    </div>
  );
}

export default TripsPage;
