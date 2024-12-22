import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider';

const AddCampaign = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleAddCampaign = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const email = user.email;
        const name = user.displayName;
        const campaignType = form.campaignType.value;
        const donate = form.donate.value;

        const newCampaign = { photo, title, description, email, name, campaignType, donate };
        console.log(newCampaign);

        // sending data to server
        fetch('https://fundy-server.vercel.app/campaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: 'A New Campaign Added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="hero bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-800 via-cyan-900 to-sky-900 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 rounded-none w-full">
                    <div className="bg-gradient-to-r from-blue-900 to-sky-600 text-white w-full">
                        <h2 className="text-center text-xl py-4">Add New Campaign</h2>
                    </div>
                    <form onSubmit={handleAddCampaign} className="card-body">
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
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="email" name="email" placeholder={user.email} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder={user.displayName} className="input input-bordered" readOnly />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral rounded-none">Add Campaign</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCampaign;