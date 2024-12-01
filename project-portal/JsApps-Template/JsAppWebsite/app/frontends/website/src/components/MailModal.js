import React, { useState } from "react";
import axios from "axios";

const MailModal = ({
    visible,
    onClose,
    showMsgModal,
    showMailModal,
    setShowMailModal,
    setShowMsgModal,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
}) => {
    const [status, setStatus] = useState("Send Email");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    var apiURL = "http://localhost:8080/api/contact";
    if (window.location.port === "" || window.location.port === "0") {
        apiURL = "https://gobridge.org/api/contact";
    }

    const handleOnClose = (e) => {
        e.stopPropagation();

        if (e.target.id === "container") {
            onClose();
            setName("");
            setEmail("");
            setMsg("");
            setSuccessMessage("");
            setErrorMessage("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        axios
            .post(
                apiURL,
                {
                    name,
                    email,
                    msg,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    setSuccessMessage("Email sent successfully");
                    setShowMailModal(false);
                    setShowMsgModal(true);
                    setEmail("");
                    setName("");
                    setMsg("");
                } else {
                    setErrorMessage("Failed to send email");
                    setShowMailModal(false);
                    setShowMsgModal(true);
                    setEmail("");
                    setName("");
                    setMsg("");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setErrorMessage(
                    "An error occurred while sending the email.  Contact us directly at support@gobridge.com"
                );
                setShowMailModal(false);
                setShowMsgModal(true);
                setEmail("");
                setName("");
                setMsg("");
            })
            .finally(() => {
                setStatus("Send Email");
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "message":
                setMsg(value);
                break;
            default:
        }
    };

    return visible ? (
        <div
            id="container"
            onClick={handleOnClose}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
        >
            <div className="relative p-2 bg-white rounded w-[90%] h-auto max-w-xl max-h-l flex flex-col justify-between items-center">
                <br />
                <button
                    className="absolute text-black bg-transparent border-0 top-2 right-2 "
                    onClick={() => onClose()}
                >
                    <span className="justify-center block w-6 h-6 py-0 text-xl font-bold text-gray-600 bg-white rounded item-center opacity-7">
                        x
                    </span>
                </button>
                <p className="font-bold text-gray-600"> Contact Us</p>

                <form
                    className="w-full h-auto p-4 mt-4 mb-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-2 mb-5 border border-gray-700 rounded inputClass"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                    ></input>
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 mb-5 border border-gray-700 rounded inputClass"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder="Message"
                        className="p-2 mb-5 border border-gray-700 rounded h-52 inputClass"
                        name="message"
                        value={msg}
                        onChange={handleChange}
                        required
                    ></input>
                    <button
                        className="px-4 py-2 font-bold text-white bg-purple-400 rounded inputClass hover:bg-purple-500"
                        type="submit"
                    >
                        {status}
                    </button>
                </form>
            </div>
        </div>
    ) : null;
};

export default MailModal;
