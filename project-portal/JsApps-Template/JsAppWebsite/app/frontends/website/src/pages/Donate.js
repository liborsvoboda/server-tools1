import React from "react";

const Donate = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col content-center justify-center w-2/3 p-5 m-10 lg:flex-row md:flex-col">
                <div className="flex flex-col justify-center order-2 md:w-2/3 md:pr-8 md:order-2 lg:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        Donate What You Can
                    </h1>
                    <p className="text-xl text-left text-gray-600">
                        Contributions to GoBridge via BridgeFoundry allow
                        thousands of volunteers across the world to teach
                        workshops and provide resource to women and others who
                        are underserved in access to technology and tech skills.
                        Most workshops happen without needing any funds with
                        companies providing space and food for our events.
                        Providing food is an equalizer, making it so people who
                        can’t afford to go out for lunch are not separated from
                        those that can. Meals also provide a comfortable space
                        for informal networking. Your donation is fully
                        tax-deductible. See <a className="text-purple-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://bridgefoundry.org/about">About BridgeFoundry</a> for more
                        non-profit details, including their EIN. When donating
                        through BridgeFoundry please note the funds are for
                        GoBridge. <br />{" "}
                        <a href="https://bridgefoundry.org/donate" target="_blank" rel="noopener noreferrer"><button className="px-4 py-2 mt-3 font-bold text-white transform bg-purple-400 rounded hover:bg-purple-500 motion-safe:hover:scale-110">
                            Donate
                        </button> <br/></a>
                        
                    </p>
                </div>
                <div className="order-1 md:w-1/2 md:order-1 lg:order-2">
                    <img
                        src="images/mentoring.png"
                        alt="Gophers"
                        className="w-15 h-90 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Donate;
