import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Spinner from "../components/loader/Spinner";
import { BASE_URl } from "../constraints";
import { useTranslation } from "react-i18next";
function BusesPage() {
  const [buses, setBuses] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const {t} =useTranslation()
  useEffect(() => {
    setIsLoading(true)
    // Fetch bus data from API
    axios.get(`${BASE_URl}/bus/admin/bus`).then((response) => {
      console.log(response);
      setBuses(response.data?.data);
      setIsLoading(false)
    }).catch((error)=>{
      console.error(error)
      setIsLoading(false)
    });
  }, []);

  return (
    <div className=" overflow-x-scroll ">
      {isLoading&&<Spinner/>}
      <h1 className="text-2xl font-bold mb-4">{t("bus")}</h1>
      <table className="w-full bg-white rounded-md shadow-md">
        <thead>
          <tr>
            <th className="p-4 max-sm:p-1 text-left">Bus ID</th>
            <th className="p-4 max-sm:p-1 text-left">Bus Name</th>
            <th className="p-4 max-sm:p-1 text-left">Capacity</th>
            <th className="p-4 max-sm:p-1 text-left">Bus Type</th>
            <th className="p-4 max-sm:p-1 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {buses.length>0?buses?.map((bus) => (
            <tr key={bus.id}>
              <td className="p-4 max-sm:p-1">{bus._id?.substring(0,5)}</td>
              <td className="p-4 max-sm:p-1">{bus.busname}</td>
              <td className="p-4 max-sm:p-1">{bus.totalSeat}</td>
              <td className="p-4 max-sm:p-1">{bus.busType}</td>
              <td className="p-4 max-sm:p-1 max-sm:flex">
                <button className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 ml-2">
                  Delete
                </button>
              </td>
            </tr>
          )):!isLoading&&<div className=" text-2xl text-orange-500">Buses data not found...</div>}
        </tbody>
      </table>
      {/* {isLoading&&<Spinner/>} */}
    </div>
  );
}

export default BusesPage;
