import React from "react";

const Eventdocs = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col content-center justify-center p-5 m-10 md:flex-row">
                <div className="flex flex-col justify-center order-2 md:w-1/2 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        Important Event Documents
                    </h1>
                    <p className="text-xl text-left text-gray-600">
                        These are documents you will need when you are ready to
                        publish your events online. Please use this{" "}
                        <a
                            className="font-semibold text-purple-500 hover:underline"
                            href="http://policies.golangbridge.org/"
                            target="_blank"
                            rel="nonopener noreferrer"
                        >
                            policy
                        </a>{" "}
                        document when providing attendees information about the
                        standards and resolution procedures for your event. Make
                        a copy and fill in the specifics about your organizers
                        and contact information. This document includes a link
                        to our{" "}
                        <a
                            className="font-semibold text-purple-500 hover:underline"
                            href="/CodeOfConduct"
                            target="_blank"
                            rel="nonopener noreferrer"
                        >
                            Code of Conduct
                        </a>
                        . Review these{" "}
                        <a
                            className="font-semibold text-purple-500 hover:underline"
                            href="https://github.com/gobridge/about-us/blob/master/scholarship_guidelines.md"
                            target="_blank"
                            rel="nonopener noreferrer"
                        >
                            scholarship guidelines
                        </a>{" "}
                        before offering any kind of scholarship. Then use this {" "}
                        <a
                            className="font-semibold text-purple-500 hover:underline"
                            href="https://github.com/gobridge/about-us/blob/master/scholarship_app.md"
                            target="_blank"
                            rel="nonopener noreferrer"
                        >
                            scholarship application
                        </a>{" "}
                        when accepting scholarship applicants for your event.
                        There are a lot of things to consider and we have listed
                        many of them. A lot of this information is also perfect
                        to document on your event site. 
                    </p>
                </div>
                <div className="items-center justify-center order-1 md:w-1/2 md:order-2">
                    <img
                        src="images/fivegophers.png"
                        alt="Gophers"
                        className="items-center w-15 h-100 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Eventdocs;
