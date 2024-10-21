import React, { useState } from "react";

function Modal({ isOpen, onClose, title = "", children }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false); 
    }, 300); 
  };

  if (!isOpen && !isClosing) return null; 

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen && !isClosing ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-0 transition-transform duration-300 transform ${
          isOpen && !isClosing ? "scale-100" : "scale-90"
        }`}
      >
        {/* Modal header */}
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>

        {/* Modal content */}
        <div className="p-4">{children}</div>

        {/* Modal footer */}
        {/* <div className="flex justify-end p-4 border-t">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            onClick={handleClose}
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;
