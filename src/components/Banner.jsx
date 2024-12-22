import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div className="container mx-auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-12 text-center h-[400px] lg:h-[500px]"
                        style={{ backgroundImage: "url('https://i.ibb.co/P9MQtfN/pexels-alexander-isreb-880417-1797428.jpg')" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <div className="text-white">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-semibold">Your Support Can Spark Change</h2>
                                <h4 className="mb-6 text-lg lg:text-xl font-semibold">Join hands to bring bold visions to life and empower communities.</h4>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-12 text-center h-[400px] lg:h-[500px]"
                        style={{ backgroundImage: "url('https://i.ibb.co.com/DVP6jh4/pexels-emrecan-2079438.jpg')" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <div className="text-white">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-semibold">Turn Visions into Reality with Your Help</h2>
                                <h4 className="mb-6 text-lg lg:text-xl font-semibold">Support innovative projects and meaningful causes today.</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-12 text-center h-[400px] lg:h-[500px]"
                        style={{ backgroundImage: "url('https://i.ibb.co.com/4S9XsYx/pexels-vidalbalielojrfotografia-3376799.jpg')" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <div className="text-white">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-semibold">Join the Movement to Create a Better Tomorrow</h2>
                                <h4 className="mb-6 text-lg lg:text-xl font-semibold">Together, we can shape a brighter future for everyone.</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-12 text-center h-[400px] lg:h-[500px]"
                        style={{ backgroundImage: "url('https://i.ibb.co.com/KNM8WMM/pexels-pixabay-355952.jpg')" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <div className="text-white">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-semibold">Fuel Ideas, Fund Causes, Make an Impact</h2>
                                <h4 className="mb-6 text-lg lg:text-xl font-semibold">Your contributions create opportunities and change the world.</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-12 text-center h-[400px] lg:h-[500px]"
                        style={{ backgroundImage: "url('https://i.ibb.co.com/0mgVHPZ/pexels-pixabay-325876.jpg')" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <div className="text-white">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-semibold">Empower Dreams, One Contribution at a Time</h2>
                                <h4 className="mb-6 text-lg lg:text-xl font-semibold">Be the catalyst that helps ideas flourish and lives transform.</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;