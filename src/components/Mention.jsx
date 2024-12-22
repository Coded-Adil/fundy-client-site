const Mention = () => {
    return (
        <div className="py-10 px-5 bg-base-100">
            <h2 className="text-center text-3xl font-bold mb-8">
                Fundy: Empowering Dreams with Funding Success
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                <div className="card bg-base-200 shadow-xl p-6 text-center rounded-none">
                    <img
                        src="https://i.ibb.co.com/LpdC8VT/pexels-aathif-19747906.jpg"
                        alt="Gary"
                        className="rounded-full mx-auto w-24 h-24 object-cover mb-4"
                    />
                    <p className="text-lg">
                        Arnob chose to do a rewards fundraiser offering free chai for life. He raised $61,673 and opened a tea house in Sylhet, Bangladeshi.
                    </p>
                </div>

                <div className="card bg-base-200 shadow-xl p-6 text-center rounded-none">
                    <img
                        src="https://i.ibb.co.com/DQckYKd/pexels-olly-3756679.jpg"
                        alt="Jessica"
                        className="rounded-full mx-auto w-24 h-24 object-cover mb-4"
                    />
                    <p className="text-lg">
                        Anastasia raised $475,000 and had her flagship product featured by top Russian entrepreneurs and innovators.
                    </p>
                </div>

                <div className="card bg-base-200 shadow-xl p-6 text-center rounded-none">
                    <img
                        src="https://i.ibb.co.com/yPvkppd/pexels-rdne-7414283.jpg"
                        alt="John"
                        className="rounded-full mx-auto w-24 h-24 object-cover mb-4"
                    />
                    <p className="text-lg">
                        Kenji raised $1.25M to grow EduAssist, an application management platform now used by 150+ universities across Japan.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Mention;