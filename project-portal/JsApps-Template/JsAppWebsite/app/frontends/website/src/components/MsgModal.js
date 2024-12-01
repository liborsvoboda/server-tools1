import React, { useState } from "react";

const MsgModal = ({
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    showMsgModal,
    setShowMsgModal,
    onCloseMsg,
    visibleMsg,
}) => {

    const handleOnClose = (e) => {
        e.stopPropagation();
        if (e.target.id === "container") {
            onCloseMsg();
            setShowMsgModal(false);
            setSuccessMessage("");
            setErrorMessage("");
        }
    };

    return visibleMsg ? (
        <div
          id="container"
          onClick={handleOnClose}
          className="fixed inset-0 z-40 flex items-center justify-center p-2 m-2 bg-black bg-opacity-30 backdrop-blur-sm"
      >
          <div className="relative p-2 bg-white rounded w-[90%] h-auto max-w-xl max-h-l flex flex-col justify-between items-center">
              <br />
              <button
                  className="absolute text-black bg-transparent border-0 top-2 right-2 "
                  onClick={() => onCloseMsg()}
              >
                  <span className="justify-center block w-6 h-6 py-0 text-xl font-bold text-gray-600 bg-white rounded item-center opacity-7">
                      x
                  </span>
              </button>

              {successMessage && (
                  <div className="flex items-center py-4 pl-20 pr-10 text-gray-600 ">
                      <span>{successMessage}</span>
                  </div>
              )}
              {errorMessage && (
                  <div className="flex items-center justify-center p-4 text-gray-600">
                      <span>{errorMessage}</span>
                  </div>
              )}

              <button
                  className="px-4 py-2 font-bold text-white bg-purple-400 rounded inputClass hover:bg-purple-500"
                  onClick={() => onCloseMsg()}
              >
                  Close
              </button>
          </div>
      </div>
        
    ) : 
    null;
};

export default MsgModal;
