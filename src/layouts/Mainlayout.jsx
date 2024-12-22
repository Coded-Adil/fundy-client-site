import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
    return (
        <div>
            {/* <nav className="sticky top-0 z-10 bg-gradient-to-b from-gray-900 to-gray-200 backdrop-blur-xl"> */}
            <nav className="sticky top-0 z-10 backdrop-blur-xl">
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Mainlayout;