import React, { useState } from "react";
import MailModal from "../components/MailModal";
import MsgModal from "../components/MsgModal";
import { Link } from "react-router-dom";

const Organize = () => {
    const [showMailModal, setShowMailModal] = useState(false);
    const [showMsgModal, setShowMsgModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleOnClose = () => setShowMailModal(false);
    const handleOnCloseMsg = () => setShowMsgModal(false);

    return (
        <div className="flex flex-col p-5 m-10 ">
            <div>
                <h1 className="mb-4 text-4xl font-bold text-left text-gray-600">
                    Organizing and sponsoring a GoBridge event
                </h1>
                <h2 className="mb-4 text-3xl font-bold text-left text-gray-600">
                    Requirements
                </h2>
                <div className="flex flex-col justify-center p-3 m-4 corecard md:w-full">
                    <div className="flex flex-col p-5 m-5 overflow-hidden transition-transform transform bg-white rounded-md shadow-lg shadow-purple-500/50 hover:translate-y-6">
                        <h3 className="mb-4 text-2xl font-bold text-left text-gray-600">
                            Must Have
                        </h3>
                        <p className="text-xl text-left text-gray-600">
                            Note: It is not required that
                            organizers/instructors/TAs are part of a
                            underrepresented group. <br />
                            For any event, remember the mission of GoBridge is
                            to diversify and improve the tech community. We ask
                            that:
                        </p>

                        <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                            <li>
                                Your event reaches out to a group of people who
                                are underrepresented in your local community.
                                That might be women, people of color, people
                                with low-income, LGBTQIA, people with
                                disabilities, older professionals, non-native
                                English speakers, or any other underrepresented
                                group.
                            </li>
                            <li>
                                Your event is free for people to attend. We want
                                to remove as many barriers to entry as possible.
                            </li>
                            <li>
                                All GoBridge work is done on a volunteer basis;
                                no one who works to further the GoBridge cause
                                gets paid for that work.
                            </li>
                            <li>
                                GoBridge abides by the Go code of conduct with a
                                GoBridge addendum and we expect all GoBridge
                                events and initiatives to do the same.
                            </li>
                        </ul>
                        <p className="text-xl text-left text-gray-600">
                            If an event does not meet all of those requirements,
                            anyone is welcome to use the GoBridge material, but
                            the event can't be called a GoBridge event.
                        </p>
                    </div>
                    <div className="flex flex-col p-5 m-5 overflow-hidden transition-transform transform bg-white rounded-md shadow-lg shadow-purple-500/50 hover:translate-y-6">
                        <h3 className="mb-4 text-2xl font-bold text-left text-gray-600">
                            Optional
                        </h3>
                        <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                            <li>
                                If you do not belong to an underrepresented
                                group and would like to help setup an event, it
                                is best to find someone who represents the group
                                to be the lead. Help them own and run the event
                                and be there to provide support.
                            </li>
                            <li>
                                The BridgeFoundry Bridges have a tradition of
                                allowing other people to attend as a guest of a
                                person who the workshop is reaching out to, but
                                that is totally optional. The important thing is
                                that the workshop brings more diverse people
                                into tech in a welcoming, supportive
                                environment.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center p-1 m-2 bg-gradient-to-b from-purple-200 to-white md:flex-row">
                <div className="flex flex-col content-center justify-center w-2/3 p-2 m-6 md:flex-col">
                    <h1 className="text-xl font-semibold text-left text-gray-700">
                        Instructions on How To Organize
                    </h1>
                    <p className="text-xl text-left text-gray-600">
                        For now, you may find some instructions{" "}
                        <a
                            href="https://github.com/gobridge/workshops/wiki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-purple-400 hover:underline"
                        >
                            here
                        </a>
                        .  Please note that the material in that wiki is currently
                        being reorganized. That information is going to be
                        trimmed down and moved here.
                    </p>
                </div>
                <div className="flex flex-col content-center justify-center w-2/3 p-2 m-6 md:flex-col">
                    <h1 className="text-xl font-semibold text-left text-gray-700">
                        Kickoff a GoBridge Event
                    </h1>
                    <p className="text-xl text-left text-gray-600">
                        After you have learned all you needed to know about how
                        to organize an event, please see instructions on how to
                        get an event going <Link className="font-semibold text-purple-400 hover:underline" to={'/WorkshopOrganize'}>here.</Link>
                    </p>
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
                        <a onClick={() => setShowMailModal(true)} href="#">
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

export default Organize;
