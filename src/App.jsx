import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage";
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
import BusesPage from "./pages/BusesPage";
import TripsPage from "./pages/TripsPage";
import BookingsPage from "./pages/BookingsPage";
import AddTripPage from "./pages/AddTripPage";
import AdminRoute from "./components/AdminRoute";
import AddBusPage from "./pages/AddBusPage";
import Loader from "./components/Loader";
import UsersPage from "./pages/UsersPage";
import PageNotFound from "./pages/PageNotFound";
import AdminLogin from "./pages/AdminLoginPage";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin/>} />
        <Route path="/reset" element={<ResetPassword/>} />
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Suspense fallback={<Loader />}>
                <DashboardPage />
              </Suspense>
            </AdminRoute>
          }
        />
        <Route
          path="/buses"
          element={
            <AdminRoute>
              <BusesPage />
            </AdminRoute>
          }
        />
        <Route
          path="/trips"
          element={
            <AdminRoute>
              <TripsPage />
            </AdminRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <AdminRoute>
              <BookingsPage />
            </AdminRoute>
          }
        />
        <Route
          path="/add-buses"
          element={
            <AdminRoute>
              <AddBusPage />
            </AdminRoute>
          }
        />
        <Route
          path="/add-trips"
          element={
            <AdminRoute>
              <AddTripPage />
            </AdminRoute>
          }
        />
        <Route
          path="/users"
          element={
            <AdminRoute>
              <UsersPage />
            </AdminRoute>
          }
        />
        <Route
          path="*"
          element={
            <AdminRoute>
              <PageNotFound />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage";
// import BusesPage from "./pages/BusesPage";
// import TripsPage from "./pages/TripsPage";
// import BookingsPage from "./pages/BookingsPage";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import AddTripPage from "./pages/AddTripPage";

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <Router>
//       <div className="flex max-sm:flex-col overflow-hidden">
//         {/* Pass toggleSidebar function and isSidebarOpen state to the Navbar */}
//         <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//         <Sidebar
//           className={`${
//             isSidebarOpen ? "block" : "hidden"
//           } max-sm:block max-sm:h-[13vh] w-full sm:block sm:w-64`}
//         />
//         <div className="flex-1">
//           <div className="p-4">
//             <Routes>
//               <Route path="/" element={<DashboardPage />} />
//               <Route path="/buses" element={<BusesPage />} />
//               <Route path="/trips" element={<TripsPage />} />
//               <Route path="/bookings" element={<BookingsPage />} />
//               <Route path="/add-trips" element={<AddTripPage />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
