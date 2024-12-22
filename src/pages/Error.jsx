import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="max-h-full bg-gradient-to-r from-blue-900 to-sky-600 text-white flex flex-col gap-6 justify-center items-center p-10 w-full">
            <h2 className="text-6xl text-center font-bold">404-Error</h2>
            <p className="text-2xl text-center">Sorry!!! The Page You Are Looking For Can Not Be Found</p>
            <Link to='/' className="btn btn-neutral rounded-none btn-outline text-white">Go To Home</Link>
        </div>
    );
};

export default Error;