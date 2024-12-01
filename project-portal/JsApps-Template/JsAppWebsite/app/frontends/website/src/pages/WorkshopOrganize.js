import React, { useState } from "react";
import MailModal from "../components/MailModal";
import MsgModal from "../components/MsgModal";

const WorkshopOrganize = () => {
    const [showMailModal, setShowMailModal] = useState(false);
    const [showMsgModal, setShowMsgModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleOnClose = () => setShowMailModal(false);
    const handleOnCloseMsg = () => setShowMsgModal(false);

    return (
        <div className="flex flex-col p-5 m-10 ">
            <div className="flex flex-col items-center justify-center w-full h-full p-5 m-5 md:flex-row md:justify-center">
                <div className="flex flex-col justify-center order-1 md:w-1/2 md:order-2">
                    <img
                        src="images/gophersworking.png"
                        alt="Gophers"
                        className="w-full md:w-2/3 aspect-auto md:aspect-auto"
                    />
                </div>
                <div className="flex flex-col justify-center order-2 md:w-1/2 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        Workshops
                    </h1>
                    <p className="text-2xl text-left text-gray-600">
                        All things GoBridge workshops start here.
                        <br />
                        Before kicking off a new workshop, be sure to read about
                        requirements and details about organizing or sponsoring
                        a GoBridge workshop.
                        <br /> New to this? We've got your back❗ 💥 We provide
                        training and have presentation material for you to use!
                        <br /> For information about funding a GoBridge
                        workshop, please visit Bridge Foundry's finances repo.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-2 m-1 bg-gradient-to-b from-purple-200 to-white md:flex-row">
                <div className="flex flex-col content-center justify-center w-2/3 p-2 m-6 md:flex-col">
                    <h2 className="mb-2 text-xl font-semibold text-left">
                        Kickoff a new workshop
                    </h2>
                    <p>
                        If you are a company offering a venue or sponsorship for
                        a GoBridge workshop, or if you are a person who wants to
                        organize one, please head to our issue list and open a
                        new issue. We get notified automatically and will get
                        back to you soon after to help make your workshop
                        happen.
                    </p>
                </div>
                <div className="flex flex-col content-center justify-center w-2/3 p-2 m-6 md:flex-col">
                    <h2 className="mb-2 text-xl font-semibold text-left">
                        Guidelines
                    </h2>
                    <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                        <li>
                            Either an organizer or a sponsor can kickoff a
                            workshop.
                        </li>
                        <li>
                            Visit{" "}
                            <a
                                href="https://www.meetup.com/pro/go"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-purple-400"
                            >
                                Meetup Pro Page
                            </a>{" "}
                            to see a listing of Meetups and past events for
                            inspiration.
                        </li>
                        <li>
                            Select one of our{" "}
                            <a
                                href="https://github.com/gobridge/workshops/blob/master/available_courses.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-purple-400"
                            >
                                available courses
                            </a>
                            , or use your own.
                        </li>
                        <li>
                            Learn about{" "}
                            <a
                                href="https://github.com/gobridge/workshops/blob/master/issue_workflow.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-purple-400"
                            >
                                our workflow
                            </a>{" "}
                            for moving issues all the way through to the
                            scheduled status.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center p-2 m-1 bg-gradient-to-b to-purple-200 from-white md:flex-col ">
                <h2 className="mb-2 text-xl font-semibold text-center">
                    Reach Us!
                </h2>
                <ul className="flex items-center pl-6 space-y-4 text-xl text-left text-gray-600 list-none justify-evenly">
                    <li>
                        <a
                            href="http://invite.slack.gobridge.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="images/slacklogo.png"
                                alt="Slack Logo"
                                className="w-10 h-10 mb-0 rounded-lg"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/golangbridge"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="images/icons8-twitterx-50.png"
                                alt="X"
                                className="w-10 h-10 mb-3"
                            />
                        </a>
                    </li>
                    <li>
                        <a  onClick={() => setShowMailModal(true)} href="#">
                            <img
                                src="images/icons8-envelope-50.png"
                                alt="X"
                                className="w-10 h-10 mb-3"
                            />
                        </a>
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
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WorkshopOrganize;
