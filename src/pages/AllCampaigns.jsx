import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllCampaigns = () => {
    const allCampaigns = useLoaderData() || [];
    const [sortedCampaigns, setSortedCampaigns] = useState(allCampaigns);
    const [isAscending, setIsAscending] = useState(true);

    const handleSort = () => {
        const sorted = [...sortedCampaigns].sort((a, b) => {
            return isAscending ? a.donate - b.donate : b.donate - a.donate;
        });
        setSortedCampaigns(sorted);
        setIsAscending(!isAscending);
    };

    return (
        <div className="container mx-auto">
            <button
                onClick={handleSort}
                className="mb-4 bg-blue-900 text-white px-4 py-2 rounded-none hover:bg-blue-600"
            >
                Sort by {isAscending ? "Ascending" : "Descending"}
            </button>
            <div className="overflow-x-auto p-4">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Campaign Title</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Campaign Type</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Amount</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCampaigns.map((campaign, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{campaign.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{campaign.campaignType}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{campaign.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{campaign.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{campaign.donate}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    <Link
                                        to={`/campaign/${campaign._id}`}
                                        className="text-white bg-blue-900 hover:bg-blue-600 px-4 py-2 rounded-none"
                                    >
                                        See More
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaigns;
