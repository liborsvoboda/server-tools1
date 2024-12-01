import React from 'react'

const Privacy = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col content-center justify-center w-2/3 p-5 m-10 lg:flex-col">
                <div className="flex flex-col justify-center order-2 md:w-full md:pr-5 md:order-2">
                    <h1 className="mb-4 text-3xl font-bold text-left md:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="text-2xl text-left text-gray-600 md:text-2xl">
                        Welcome to GoBridge. Your privacy is important to us. This Privacy Policy explains how we collect,
                        use, disclose, and safeguard your information when you visit our website.
                        Please read this Privacy Policy carefully.
                    </p>
                    <br/>
                    <p className="text-2xl text-left text-gray-600 md:text-2xl">
                        While using our Site, we may ask you to provide us with certain personally identifiable information
                        that can be used to contact or identify you. Personally identifiable information may include but
                        is not limited to your name and email address. 
                    </p>
                    <br/>
                    <p className="text-2xl text-left text-gray-600 md:text-2xl">
                        We use reasonable measures to protect your personal information against unauthorized access or disclosure. <br/>

                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.<br/>
                        <br/>
                        If you have any questions about this Privacy Policy, please contact us at support@gobridge.org.

                    </p>
                </div>
                {/* <div className="flex items-center justify-center order-1 md:w-1/2 md:order-1">
                    <img
                        src="images/gblogo.jpeg"
                        alt="Gophers Banner"
                        className="w-15 h-90 md:w-1/2"
                    />
                </div> */}
            </div>
        </div>
    );
}

export default Privacy