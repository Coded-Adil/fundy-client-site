import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";


const Register = () => {

    const { updateUserProfile, setUser, createUser, handleSignInGoogle } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const displayName = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(displayName, email, password)
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // setUser(result.user);
                // const newUser = { displayName, photo, email }
                const currentUser = { displayName: displayName, photoURL: photo }
                updateUserProfile(currentUser)
                    .then(() => {
                        setUser((prevUser) => {
                            return { ...prevUser, currentUser };
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                // save new user info to db
                fetch('https://fundy-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('user addded to db')
                        }
                    })
            })
            .catch(error => {
                console.log("error", error);
                const errorMessage = error.message;
                toast.error(errorMessage);
            })
    }

    const handleGoogleReg = () => {
        handleSignInGoogle()
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                console.log('Error: ', error);
                setUser(null);
            })
    }
    return (
        <div className="hero bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-800 via-cyan-900 to-sky-900 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 rounded-none w-full">
                    <div className="bg-gradient-to-r from-blue-900 to-sky-600 text-white w-full">
                        <h2 className="text-center text-xl py-4">Register</h2>
                    </div>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="md:flex md:gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="md:flex md:gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control gap-2 mt-6">
                            <button onClick={handleGoogleReg} className="btn rounded-full mx-auto text-2xl font-bold">G</button>
                            <button className="btn btn-neutral rounded-none">Register</button>
                        </div>
                        <p className="font-semibold text-center">
                            Already have an Account?{" "}
                            <Link className="text-red-500" to="/login">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default Register;