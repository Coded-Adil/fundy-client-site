import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Login = () => {

    const { user, setUser, signInUser, handleSignInGoogle } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log({ email, password })

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => console.log("Error", error))
    }

    const handleGoogle = () => {
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
                        <h2 className="text-center text-xl py-4">Login</h2>
                    </div>
                    <form onSubmit={handleSignIn} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control gap-2 mt-6">
                            <button onClick={handleGoogle} className="btn rounded-full mx-auto text-2xl font-bold">G</button>
                            <button className="btn btn-neutral rounded-none">Login</button>
                        </div>
                        <p className="font-semibold text-center">Don't have an Account? <Link className="text-red-500" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default Login;