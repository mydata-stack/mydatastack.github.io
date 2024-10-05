import {motion} from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import {CheckArrowIcon} from "../assets/icons/CheckArrowIcon";

export const GettingStarted = () => (
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
                Getting Started
            </span>
                        <h2 className="mt-6 mb-8 text-12xl lg:text-12xl custom-block-big-title">
                            Good to go?
                        </h2>
                        <p className="mb-12 text-customGrayText leading-loose">

                            <pre className="bash">
                                # clone repository<br/>
                                git clone https://github.com/mydata-stack/mydata-stack.git
                            </pre>
                            <br/>
                            <pre className="bash">
                                # pull images<br/>
                                cd hello-data-deployment/docker-compose
                            </pre>
                            <br/>
                            <pre className="bash">
                                # run<br/>
                                docker-compose up -d
                            </pre>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
);
