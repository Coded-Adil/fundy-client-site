import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const UpdateCampaign = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const handleUpdateCampaign = (e) => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const campaignType = form.campaignType.value;
        const donate = form.donate.value;

        const updatedCampaign = { photo, title, description, campaignType, donate };
        axios.put(`https://fundy-server.vercel.app/campaign/${id}`, updatedCampaign)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Campaign updated successfully.",
                        icon: "success",
                    }).then(() => {
                        navigate("/myCampaigns");
                    });
                } else {
                    Swal.fire({
                        title: "No Changes",
                        text: "No changes were made to the campaign.",
                        icon: "info",
                    });
                }
            })
            .catch((err) => {
                console.error("Error updating campaign:", err);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong while updating the campaign.",
                    icon: "error",
                });
            });
    };

    return (
        <div className="hero bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-800 via-cyan-900 to-sky-900 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 rounded-none w-full">
                    <div className="bg-gradient-to-r from-blue-900 to-sky-600 text-white w-full">
                        <h2 className="text-center text-xl py-4">Update Campaign</h2>
                    </div>
                    <form onSubmit={handleUpdateCampaign} className="card-body">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Thumbnail</span>
                                </label>
                                <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Campaign Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Title" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <div className="form-control lg:w-1/2">
                                <label className="label">
                                    <span className="label-text">Campaign Type</span>
                                </label>
                                <select defaultValue='option-1' name="campaignType" className="select select-bordered">
                                    <option disabled value="option-1">Select Campaign Type </option>
                                    <option value='personal-issue'>Personal issue</option>
                                    <option value='startup'>Startup</option>
                                    <option value='business'>Business</option>
                                    <option value='ideas'>Creative ideas</option>
                                </select>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="label">
                                    <span className="label-text">Minimum-Donation</span>
                                </label>
                                <input type="text" name="donate" placeholder="Deonation Amount" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <div className="form-control lg:w-full">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Description" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral rounded-none">Update Campaign</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCampaign;