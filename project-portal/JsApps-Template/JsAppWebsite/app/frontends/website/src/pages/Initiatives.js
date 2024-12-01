import React, { useState } from "react";
import MailModal from "../components/MailModal";
import MsgModal from "../components/MsgModal";

const Initiatives = () => {
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
                        Current Initiatives
                    </h1>
                    <p className="text-3xl text-left text-gray-600">
                        We always have fun and exciting things we are working on
                        to support the Go community. If you have time to help or
                        you think one of these programs can help You
                        <br />
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
                        src="images/wwg.jpg"
                        alt="Women Who Go"
                        className="w-full md:max-h-80 aspect-auto md:aspect-auto"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 p-5 m-10 lg:grid-cols-2 md:p-10 md:m-20 ">
                <div className="flex flex-col transition-transform transform bg-white rounded-md shadow-lg over4flow-hidden shadow-purple-500/50 lg:flex-row md:p-5 md:m-10">
                    <img
                        src="/images/meetuplogo.png"
                        alt="Gophers Banner"
                        className="block object-contain w-1/2 h-32 m-5 mx-auto"
                    />

                    <div className="flex-grow p-4">
                        <h3 className="mb-2 text-xl font-semibold text-left">
                            Meetup accounts for Go user groups worldwide
                        </h3>
                        <p className="text-left text-gray-600 text-l">
                            If you run a Go user group anywhere on the planet we
                            want to hear from you. Let us provide you a Meetup
                            account for free to help support your efforts in
                            your local community. If you want to start a new
                            meetup, check out the GDN FAQ for more information.
                            View the GDN map of{" "}
                            <a
                                href="http://gdn.gobridge.org/"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Go Meetups
                            </a>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col transition-transform transform bg-white rounded-md shadow-lg over4flow-hidden shadow-purple-500/50 lg:flex-row md:p-5 md:m-10">
                    <img
                        src="/images/goinclusion.png"
                        alt="Gophers Banner"
                        className="block object-contain w-1/2 h-32 m-5 mx-auto"
                    />

                    <div className="flex-grow p-4">
                        <h3 className="mb-2 text-xl font-semibold text-left">
                            Running, Managing and Supporting Workshops
                        </h3>
                        <p className="text-left text-gray-600 text-l">
                            We love workshops and want to help. Many of our core
                            members will travel to your local community to help
                            you teach a workshop. We can help with finding
                            sponsors or even grant money. We have material you
                            can use if you're not sure where to begin.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col transition-transform transform bg-white rounded-md shadow-lg over4flow-hidden shadow-purple-500/50 lg:flex-row md:p-5 md:m-10">
                    <img
                        src="images/mentoring.png"
                        alt="Gophers Banner"
                        className="block object-contain w-1/2 h-32 m-5 mx-auto"
                    />

                    <div className="flex-grow p-4">
                        <h3 className="mb-2 text-xl font-semibold text-left">
                            Individual Mentoring
                        </h3>
                        <p className="text-left text-gray-600 text-l">
                            If you need more one-on-one time to help improve
                            your Go coding skills, we have people ready to help.
                            You just need to be ready to put in the hard work.
                            We have Go challenges, algorithms, and other cool
                            exercises to help you improve. We will provide code
                            reviews and guidance. This platform will get you
                            started whether you want to be a Mentor or you need
                            a Mentor.
                            <a
                                href="https://mentoring.gobridge.org/"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Mentoring Platform.
                            </a>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col transition-transform transform bg-white rounded-md shadow-lg over4flow-hidden shadow-purple-500/50 lg:flex-row md:p-5 md:m-10">
                    <img
                        src="images/gophersworking.png"
                        alt="Gophers Banner"
                        className="block object-contain w-1/2 h-32 m-5 mx-auto"
                    />

                    <div className="flex-grow p-4">
                        <h3 className="mb-2 text-xl font-semibold text-left">
                            Growing Underrepresented Minority Participation
                        </h3>
                        <p className="text-left text-gray-600 text-l">
                            We are very focused on growing underrepresented
                            minority participation at all of our events. This
                            includes but is not limited to meetups, conferences
                            and our online communities. We are doing this
                            through diversity scholarships, mentoring speakers
                            and providing support any way we can.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col transition-transform transform bg-white rounded-md shadow-lg over4flow-hidden shadow-purple-500/50 lg:flex-row md:p-5 md:m-10">
                    <img
                        src="images/gopherlaptop.png"
                        alt="Gophers Banner"
                        className="block object-contain w-1/2 h-32 m-5 mx-auto"
                    />

                    <div className="flex-grow p-4">
                        <h3 className="mb-2 text-xl font-semibold text-left">
                            Asociația unPi pentru Școlari
                        </h3>
                        <p className="text-left text-gray-600 text-l">
                            We are helping kids in Romania learn Go buy
                            providing familes access to Raspberry Pi's. To learn
                            more check out this{" "}
                            <a
                                href="https://start.unpi.ro/english/"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                site.
                            </a>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col transition-transform transform bg-white rounded-md shadow-lg over4flow-hidden shadow-purple-500/50 lg:flex-row md:p-5 md:m-10">
                    <img
                        src="images/gopherballoon.png"
                        alt="Gophers Banner"
                        className="block object-contain w-1/2 h-32 m-5 mx-auto"
                    />

                    <div className="flex-grow p-4">
                        <h3 className="mb-2 text-xl font-semibold text-left">
                            Administration
                        </h3>
                        <p className="text-left text-gray-600 text-l">
                            We always have little things that need to get done
                            to keep the organization running. We are lucky to be
                            in a field where tech is our focus. Outside of
                            having to maintain the systems we rely on, there are
                            other things we need to get in place. A big one is
                            finding ways to collect analytics around how we are
                            doing as an organization. Reviewing and defining our
                            policies and procedures is another important job.
                            Last but not least, keeping all our content and
                            information relevant and up to date.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Initiatives;
