import AnimatedNum from "./AnimatedNum";
import { Typewriter } from "react-simple-typewriter";

const Success = () => {
    const handleType = (count) => {
        console.log(count);
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };

    return (
        <div className="flex flex-col justify-center items-center py-20">
            <div className="mb-4 text-white text-center text-3xl lg:text-4xl font-semibold">
                <Typewriter
                    words={["Over a decade of Fundraising Success"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div>
                    <h1 className="m-4 text-white text-2xl lg:text-3xl font-semibold flex">
                        <AnimatedNum toValue={700000} duration={5000} />+
                    </h1>
                    <p className="m-4 text-sm text-[#7F8C8D]">Funding Committed</p>
                </div>
                <div className="divider divider-horizontal hidden md:flex"></div>
                <div>
                    <h1 className="m-4 text-white text-2xl lg:text-3xl font-semibold flex">
                        <AnimatedNum toValue={10000} duration={3000} />+
                    </h1>
                    <p className="m-4 text-sm text-[#7F8C8D]">Accredited Investors</p>
                </div>
            </div>
        </div>
    );
};

export default Success;
