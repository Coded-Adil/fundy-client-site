import { Link } from "react-router-dom";
import AllCampaigns from "../pages/AllCampaigns";

const Running = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <h2 className="text-center text-white text-3xl font-bold mb-8">
                Currently Running Campaigns
            </h2>
            <AllCampaigns/>
            <Link to='/campaign' className="btn btn-neutral text-white btn-outline rounded-none">See All Campaigns</Link>
        </div >
    );
};

export default Running;