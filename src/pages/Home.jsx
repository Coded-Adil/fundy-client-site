import Banner from "../components/Banner";
import Mention from "../components/Mention";
import Running from "../components/Running";
import Success from "../components/Success";

const Home = () => {
    return (
        <div>
            <section className="py-6">
                <Banner />
            </section>
            <section className="bg-[#2C3E50] my-8">
                <Success />
            </section>
            <section className="container mx-auto my-8">
                <Mention />
            </section>
            <section className="bg-[#2C3E50] my-8">
                <Running />
            </section>
        </div>
    );
};

export default Home;