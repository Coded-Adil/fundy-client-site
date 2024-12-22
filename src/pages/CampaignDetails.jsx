import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const CampaignDetails = () => {

    const campaign = useLoaderData()
    console.log(campaign, typeof(campaign))
    const { user } = useContext(AuthContext);

    const handleDonate = () => {
        const donationData = {
            email: user.email,
            campaignId: campaign._id,
            amount: campaign.amount,
            image: campaign.photo,
            name: campaign.name,
        };

        fetch('https://fundy-server.vercel.app/donations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donationData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('user addded to db')
                }
            })
    }

    return (
        <div className="container mx-auto">
            <div className="card w-96 mx-auto rounded-none my-8 border shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={campaign.photo}
                        alt=""
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{campaign.title}</h2>
                    <p className="text-md text-gray-600">Campaign Type: {campaign.campaignType}</p>
                    <p className="text-md text-gray-600">Campaign By: {campaign.name}</p>
                    <p className="text-md text-gray-600">Contact Us: {campaign.email}</p>
                    <div className="card-actions">
                        <button onClick={handleDonate} className="btn btn-neutral rounded-none">Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;