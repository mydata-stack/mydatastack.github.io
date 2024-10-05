import {motion} from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import {CheckArrowIcon} from "../assets/icons/CheckArrowIcon";

export const About = () => (
    <section className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.2}}
        >
            <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">

                <div className="w-full  mb-12 lg:mb-0 xl:pl-8">
                    <div className="mx-auto lg:mx-auto w-11/12 sm:w-11/12 md:w-11/12 lg:w-unset">
            <span className="custom-block-subtitle">
                MyDATAStack
            </span>
                        <h2 className="mt-6 mb-8 text-12xl lg:text-12xl custom-block-big-title">
                            About
                        </h2>
                        <p className="mb-12 text-customGrayText leading-loose">>
                            Welcome to MyDATAStack, your comprehensive solution for unleashing the full potential of data products. Our platform offers a dynamic ecosystem designed to empower individuals and organizations to effortlessly create,
                            deploy, and scale data-driven solutions.
                        </p>
                        <p className="mb-12 text-customGrayText leading-loose">>
                            MyDATAStack isn't just another software stack; it's a versatile toolkit crafted to streamline every step of the data product lifecycle. From seamless data ingestion and robust processing to insightful analysis and
                            captivating visualization, we provide the building blocks you need to bring your ideas to life.
                        </p>
                        <p className="mb-12 text-customGrayText leading-loose">>
                            At MyDATAStack, we prioritize simplicity, efficiency, and interoperability. Our intuitive interface and extensive documentation ensure that you can quickly navigate the platform and unleash its full capabilities.
                            Whether
                            you're a seasoned data scientist, an aspiring entrepreneur, or an established enterprise, MyDATAStack is your trusted partner in driving innovation.
                        </p>
                        <p className="mb-12 text-customGrayText leading-loose">>
                            Join us on our mission to revolutionize the way data products are created, deployed, and scaled. With MyDATAStack, the possibilities are endless. Let's embark on a journey of transformation and create a brighter future
                            powered by data.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
);
