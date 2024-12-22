import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCampaign = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const email = user.email;
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        axios.get(`https://fundy-server.vercel.app/campaign/${email}`)
            .then(res => setCampaigns(res.data))
    }, [])

    console.log(campaigns);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`https://fundy-server.vercel.app/campaign/${id}`)
                    .then((res) => {
                        if (res.status === 200) {
                            setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your campaign has been deleted.",
                                icon: "success",
                            });
                        }
                    })
                    .catch((err) => {
                        console.error("Error deleting campaign:", err);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the campaign.",
                            icon: "error",
                        });
                    });
            }
        });
    };
    return (
        <div>
            <h2 className="text-3xl text-center">Campaigns By {user.email}</h2>
            <div className="container mx-auto">
                <div className="overflow-x-auto p-4">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Campaign Title</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Campaign Type</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Amount</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Delete</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((campaign, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{campaign.title}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{campaign.campaignType}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{campaign.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{campaign.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{campaign.donate}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <button
                                            onClick={() => handleDelete(campaign._id)}
                                            className="text-white bg-blue-900 hover:bg-blue-600 px-4 py-2 rounded-none"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <Link
                                            to={`/updateCampaign/${campaign._id}`}
                                            className="text-white bg-blue-900 hover:bg-blue-600 px-4 py-2 rounded-none"
                                        >
                                            Update
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCampaign;