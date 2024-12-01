import React, { useState } from "react";
import MailModal from "../components/MailModal";
import MsgModal from "../components/MsgModal";

const Sponsor = () => {
   const [showMailModal, setShowMailModal] = useState(false);
    const [showMsgModal, setShowMsgModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleOnClose = () => setShowMailModal(false);
    const handleOnCloseMsg = () => setShowMsgModal(false);
    
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col content-center justify-center w-2/3 p-5 m-10 md:flex-col lg:flex-row">
                <div className="flex flex-col justify-center order-2 md:w-full md:pr-8 md:order-2">
                    <h1 className="mb-4 text-5xl font-bold text-left md:text-5xl">
                        Become a Sponsor
                    </h1>
                    <p className="text-xl text-left text-gray-600 md:text-3xl">
                        Most GoBridge workshops need some level of support. This
                        can range from offering a space, paying for food or even
                        travel expenses for trainers. If you or your company is
                        interested in helping <br />{" "}
                        <button onClick={() => setShowMailModal(true)} className="px-4 py-2 mt-3 font-bold text-white transform bg-purple-400 rounded hover:bg-purple-500 motion-safe:hover:scale-110">
                            Contact Us
                        </button>
                        <MailModal
                            onClose={handleOnClose}
                            visible={showMailModal}
                            showMsgModal={showMsgModal}
                            setShowMailModal={setShowMailModal}
                            setShowMsgModal={setShowMsgModal}
                            successMessage={successMessage}
                            errorMessage={errorMessage}
                            setErrorMessage={setErrorMessage}
                            setSuccessMessage={setSuccessMessage}
                        />
                        <MsgModal
                            onCloseMsg={handleOnCloseMsg}
                            visibleMsg={showMsgModal}
                            showMailModal={showMailModal}
                            setShowMsgModal={setShowMsgModal}
                            setShowMailModal={setShowMailModal}
                            successMessage={successMessage}
                            errorMessage={errorMessage}
                            setErrorMessage={setErrorMessage}
                            setSuccessMessage={setSuccessMessage}
                        />
                    </p>
                </div>
                <div className="order-1 md:w-full md:order-1">
                    <img
                        src="images/goinclusion.png"
                        alt="Gophers"
                        className="w-full md:w-2/3"
                        // className="w-15 h-90 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
