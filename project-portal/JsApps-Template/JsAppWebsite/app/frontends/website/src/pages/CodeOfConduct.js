import React from "react";

const CodeOfConduct = () => {

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full p-1 m-3 lg:flex-col">
                {/* <div className="flex flex-col justify-center order-2 md:w-2/3 md:pr-8 md:order-1">
                    <img
                        src="images/goinclusion.png"
                        alt="Gophers Banner"
                        className="items-center w-full h-90 md:w-1/2"
                    />
                </div> */}
                <div className="flex flex-col justify-center order-2 m-10 md:w-2/3 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        GoBridge/WWG - CoC
                    </h1>
                    <p className="text-xl text-left text-gray-600">
                        GoBridge (GB) and Women Who Go (WWG) uses the {" "}
                            <a
                                href="https://golang.org/conduct"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Go CoC 
                            </a>{" "} as our base document:
                    </p>
                    <br/>
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        GB/WWG Addendum
                    </h1>
                    <h2 className="mb-4 text-3xl font-bold text-left"> Real Names</h2>
                    <p className="text-xl text-left text-gray-600">
                        If you feel comfortable, we encourage you to use your real name in all of our online and offline
                        GB/WWG communities and events. We find it encourages openness and civility in discussions. However,
                        this is not a requirement.
                        Organizers and moderators may ask people to change their handles or usernames if it conflicts with
                        known public figures, impersonates other people, sounds like automated tools, contains inappropriate
                        language, or other unclear cases.
                    </p>
                    <br />

                    <h2 className="mb-4 text-3xl font-bold text-left"> Language Policy</h2>
                    <p className="text-xl text-left text-gray-600">
                        We are working hard to keep our public spaces family-friendly and as inclusive as possible. At the
                        organizers or moderators discretion, words and images that are deemed inappropriate or offensive
                        will be moderated. Generally, cursing is not allowed. Please reach out to the organizers or
                        moderators for a list of words that are being moderated.
                    </p>
                    <br />

                    <h2 className="mb-4 text-3xl font-bold text-left"> Moderation</h2>
                    <p className="text-xl text-left text-gray-600">
                        Participants in our online and offline GB/WWG communities and events should flag inappropriate behavior
                        to organizers and moderators rather than addressing it themselves. This includes but is not limited
                        to reporting: violations of this code of conduct, spam messages, messages posted in the wrong
                        channel or category, and public conversations that are inappropriate. Please report any violations
                        to the #admin-help channel on  <a
                                href="https://invite.slack.gobridge.org/"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Gophers Slack
                            </a> as early as possible or privately message <a className="font-semibold text-purple-400" href="mailto:bill@gobridge.org"> William Kennedy</a>
                            {" "} directly. At our offline events please report any violations to
                        the organizers or {" "}
                        <a className="font-semibold text-purple-400" href="mailto:bill@gobridge.org"> email.</a>
                        
                    </p>
                    <br />  
                    <h2 className="mb-4 text-3xl font-bold text-left"> Moderator guidelines for applying policies and the CoC</h2>
                    <p className="text-xl text-left text-gray-600">
                        It’s important that all users’ questions, answers and comments are in line with this CoC, as well as with the category and topic, or channel, they belong to. When an organizer or moderator decides to approach someone personally, they must always assume intentions are good, which is usually the case. Over-moderation is harmful to the atmosphere of the community and should be avoided.
                    </p>
                    <br />
                    <h3 className="mb-4 text-2xl font-bold text-left">Expectations for moderator enforcement</h3>
                    <p className="text-xl text-left text-gray-600">
                        While in practice most actions from organizers and moderators will be friendly reminders, they should act on complaints/reports quickly and involve other team members if necessary. They should take appropriate, usually private, action if they see any abuse or harassment. They must be sensitive to cultural differences, time zones, etc., but take prompt action when necessary. An organizer or moderator is one who exists to serve the community.
                    </p>
                    <br/>
                    <h3 className="mb-4 text-2xl font-bold text-left">Suggested strategies for moderators when dealing with observed violations</h3>
                    <p className="text-xl text-left text-gray-600">
                        Except in the most egregious cases, organizers and moderators will follow these guidelines:
                        <br />
                        </p>
                        <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                            <li>First, attempt to privately message or speak with the person and point out to them that their behavior violates the CoC. Include a link or try to be specific about what area of the the CoC has been violated.</li>
                            <li>If the person does not respond to a request or is not willing to talk, escalate to the private #gopher-admins channel on gophers.slack.com or assemble other team members to discuss the incident.</li>
                            <li>Once the issue has been discussed, follow the reporting guidelines below.</li>
                        </ul>
                        <br />
                    <p className="text-xl text-left text-gray-600">
                        In those cases of obvious, flagrant violations in our online communities, moderators should remove the post immediately and bring the issue to the attention of the private gophers-admin slack channel.
                    </p>
                    <br />
                    <h3 className="mb-4 text-2xl font-bold text-left">Dealing with Spam</h3>
                    <p className="text-xl text-left text-gray-600">
                        Although not explicitly called out in this CoC, we ask that all moderators be aware of and intervene in the case of spam.
                        <br />
                        <br />
                        Spam is a post or a series of posts where the content is primarily solicitation, nonsense, overly short/long, or off-topic. Posts where the content is not hand-crafted or is too generic/useless may also be considered spam. Spam accounts are user accounts which post spam content or are created in series to secure access to the site and its privileges, or both. Spam posts and accounts may be automated or manual. If a moderator notices multiple spam accounts in succession, the IP address may be blocked.
                        <br />
                        <br />
                        We realize spam can be hard to define in some cases, so we will rely on the community or moderators to identify and flag it and handle it appropriately. Obvious spam posts should be promptly deleted; non-obvious spam may be flagged for review. Users are encouraged to flag posts as spam to help bring them to a moderator’s attention.
                        <br />
                        <br />
                        Not all spam posts are by spam users. For example, a legitimate user account may be compromised. If a moderator notices a reputable user account posting spam, the spam post(s) should be deleted immediately and the user notified. If spam posts continue, the account may be suspended until the user can regain control of his/her account.
                        <br />
                        <br />
                        Commercial content is allowed if relevant to answering a question or keeping inline with a topic.
                    </p>
                    <br />
                    <h3 className="mb-4 text-2xl font-bold text-left">Reporting guidelines</h3>
                    <p className="text-xl text-left text-gray-600">
                        If someone is subject to or witnesses unacceptable behavior, or has any other concerns, they are strongly encouraged to notify an organizer, moderator or a GB Leadership team member as soon as possible. Every reported concern will follow this workflow until resolved:
                        <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                            <li>
                                Make contact by directly talking to an organizer, moderator or emailing support@gobridge.org
                                <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-none">
                                    <li>* Your email message will reach the GB Leadership team only.</li>
                                    <li>* Reports will be confidential within the organizers team, moderators team or GB’s Leadership team.</li>
                                </ul>
                            </li>
                            <li>You will receive a response within 24-48 hours (very likely sooner) in our online communities. For our offline communities and events, a response should be expected within an hour or two.</li>
                            <li>The group will review the incident and determine what happened.</li>
                            <li>They may reach out to other community members for more context.</li>
                            <li> The team will reach a decision as to how to act. These include:
                            <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-none">
                                    <li> * Nothing.</li>
                                    <li>* A private reprimand from the GB Leadership team to the individual(s) involved.</li>
                                    <li>* An imposed vacation (i.e. asking someone to "take a week off" from all GB moderated properties).</li>
                                    <li>* A request for a private or public apology.</li>
                                    <li>* A temporary or permanent ban from some or all GB moderated communities and events. GB Leadership team will reach out to the original reporter to let them know what action we decided to take.</li>
                                    <li>* Appeals to the decision may be made to the GB Leadership team directly, or any member of the administration team thereof.</li>
                                </ul>
                            </li>

                        </ul>

                    </p>
                    <br />
                    <h3 className="mb-4 text-2xl font-bold text-left">Administrators</h3>
                    <p className="text-xl text-left text-gray-600">
                        Below is the list of people who are moderators for our online communities. If you have any issues or need help, please feel free to reach out to anyone on this list. There is also the public admin-help channel on <a
                                href="https://invite.slack.gobridge.org/"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Slack
                        </a> {" "}where people can get help or clarification on any admin related issues.
                    </p>
                    <br />

                    <h3 className="mb-4 text-2xl font-bold text-left">The role of GB (Leadership Team):</h3>
                    <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                        <li>They are the stewards for the different online communities.</li>
                        <li>They have rights in the systems tied to the primary owner role.</li>
                        <li>They act as administrators.</li>
                    </ul>
                    <br />
                    
                    <h3 className="mb-4 text-2xl font-bold text-left">The role of moderators:</h3>
                    <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                        <li>They monitor the public forums, channels and threads for inappropriate behavior.</li>
                        <li>They have full voting rights for decisions that affect the communities.</li>
                        <li>They have rights in the systems tied to the admin role.</li>
                    </ul>
                    <br />
                    
                    <h3 className="mb-4 text-2xl font-bold text-left">Primary Owner</h3>
                    <p>
                        <a className="font-semibold text-purple-400" href="mailto:support@gobridge.org">GB (support@gobridge.org)
                        </a>                                                 
                    </p>
                    <br />
                    
                    <h3 className="mb-4 text-2xl font-bold text-left">GB Leadership Team:</h3>
                    <p>
                        <a
                                href="https://twitter.com/freeformz"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Edward Muller,
                        </a> {" "}
                        <a
                                href="https://twitter.com/jboursiquot"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Johnny Boursiquot,
                        </a> {" "}
                        <a
                                href="https://twitter.com/MaartjeME"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Maartje Eyskens,
                        </a>{" "}
                        <a
                                href="https://twitter.com/sudomateo"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Matthew Sanabria,
                        </a>{" "}
                        <a
                                href="https://twitter.com/NataliePis"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Natalie Pistunovich,
                        </a>{" "}
                        <a
                                href="https://twitter.com/ultrasaurus"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Sarah Allen,
                        </a> {" "}
                        <a
                                href="https://twitter.com/wilkenrivera"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Wilken Rivera,
                        </a> {" "}
                        <a
                                href="https://twitter.com/goinggodotnet"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                William Kennedy
                        </a>
                               
                    
                    </p>
                    <br />
                    
                    <h3 className="mb-4 text-2xl font-bold text-left">Moderators:</h3>
                    <p>
                    <a
                                href="https://twitter.com/dlsniper"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Florin Pățan,
                        </a> {" "}
                        <a
                                href="https://twitter.com/flexd"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Kristoffer Berdal,
                        </a> {" "}<a
                                href="https://twitter.com/MGallagher2010"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                 Martin Gallagher,
                        </a> {" "}<a
                                href="https://twitter.com/sgmansfield"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Scott Mansfield
                        </a> {" "}
                          
                    </p>

                </div>
            </div>
        </div>
    );
};

export default CodeOfConduct