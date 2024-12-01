import React, { useState } from "react";
import MailModal from "../components/MailModal";
import MsgModal from "../components/MsgModal";

const Home = () => {
    const [showMailModal, setShowMailModal] = useState(false);
    const [showMsgModal, setShowMsgModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleOnClose = () => setShowMailModal(false);
    const handleOnCloseMsg = () => setShowMsgModal(false);

    return (
        <div>
            <div className="flex flex-col p-5 m-10 md:flex-row">
                <div className="flex flex-col justify-center order-2 md:w-1/2 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        GoBridge
                    </h1>
                    <p className="text-3xl text-left text-gray-600">
                        GoBridge is a member of the non-profit organization
                        <a
                            className="text-purple-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://bridgefoundry.org/"
                        >
                            {" "}
                            BridgeFoundry.
                        </a>{" "}
                        At GoBridge we build bridges to educate underrepresented
                        communities to teach technical skills and to foster
                        diversity in Go. <br />
                        <br />
                        <button
                            onClick={() => setShowMailModal(true)}
                            className="px-4 py-2 font-bold text-white transform bg-purple-400 rounded hover:bg-purple-500 motion-safe:hover:scale-110"
                        >
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
                <div className="order-1 md:w-1/2 md:order-2">
                    <img
                        src="images/gbbanner.png"
                        alt="Gophers Banner"
                        className="w-full h-80 md:w-full aspect-auto md:aspect-auto"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4 p-5 m-5 corecard lg:flex-row">
                <div className="flex flex-col max-w-lg mx-2 overflow-hidden transition-transform transform bg-white rounded-md shadow-lg shadow-purple-500/50 hover:translate-y-6 lg:flex-row lg:items-center">
                    <img
                        src="/images/goinclusion.png"
                        alt="Gophers Banner"
                        className="block object-contain w-1/2 h-32 m-5 mx-auto"
                    />

                    <div className="flex-auto p-4">
                        <h3 className="mb-2 text-2xl font-semibold text-left">
                            Core Mission
                        </h3>
                        <p className="text-left text-gray-600 text-md">
                            Our core mission is to enable minorities in tech to
                            use Go as a tool to learn and teach programming and,
                            ultimately, to empower underrepresented groups in
                            tech to help increase diversity in the Go community.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col max-w-lg mx-2 transition-transform transform bg-white rounded-md shadow-lg shadow-purple-500/50 hover:translate-y-6 lg:flex-row lg:items-center">
                    <img
                        className="block object-contain w-1/2 h-32 m-5 mx-auto"
                        src="/images/cleargblogo.png"
                        alt="Gophers Banner"
                    />

                    <div className="flex-auto p-4">
                        <h3 className="mb-2 text-2xl font-semibold text-left">
                            Core Vision
                        </h3>
                        <p className="text-left text-gray-600 text-md">
                            We believe education is most effective when it is
                            tailored to and provided by local communities. We
                            are dedicated to growing and supporting local teams
                            of individuals and companies who will have ownership
                            in the work they do. We are also dedicated to
                            developing in-depth and idiomatic training
                            materials. Our workshops are targeted at smaller,
                            local Go communities, and not necessarily directly
                            at the global Go community. But we believe that, as
                            each individual in the Go community strengthens, the
                            collective Go community will, in turn, strengthen as
                            well.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
