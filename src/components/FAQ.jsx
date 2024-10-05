import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    "question": "What is MyDATAStack?",
    "answer": ["MyDATAStack is a software solution designed to manage, analyze, and utilize large volumes of data within an organization.", "It provides capabilities for data storage, processing, integration, and analytics, while being built on open source technologies, allowing users to access, modify, and distribute the software freely."]
  },
  {
    "question": "What are the benefits of using MyDATAStack?",
    "answer": ["Cost-effectiveness: MyDATAStack is free to use, reducing licensing and subscription costs associated with proprietary solutions.", "Flexibility: Users can customize and extend MyDATAStack to suit their specific needs and integrate it with other tools and systems.", "Transparency: The source code of MyDATAStack is openly accessible, allowing users to inspect, audit, and contribute to its development, fostering trust and accountability.", "Community support: MyDATAStack projects typically have vibrant communities of developers and users who provide support, share knowledge, and collaborate on improvements."]
  },
  {
    "question": "What features does MyDATAStack offer?",
    "answer": ["Data ingestion: Capability to collect and ingest data from various sources, including databases, files, streaming platforms, and APIs.", "Data storage: Ability to store data in different formats and structures, such as relational databases, NoSQL databases, data lakes, and cloud storage.", "Data processing: Tools for transforming, cleaning, and enriching data to make it ready for analysis and consumption.", "Data integration: Mechanisms for integrating disparate data sources and systems to create a unified view of the data landscape.", "Data analytics: Tools and frameworks for performing advanced analytics, including data exploration, visualization, machine learning, and predictive analytics."]
  },
  {
    "question": "How does security work in MyDATAStack?",
    "answer": ["Security in MyDATAStack is implemented through a combination of access controls, encryption, authentication, and authorization mechanisms.", "Users can configure role-based access controls to restrict access to sensitive data and operations, while data encryption ensures data confidentiality both at rest and in transit.", "Additionally, MyDATAStack platforms offer integration with external security tools and services for enhanced protection."]
  },
  {
    "question": "Is technical support available for MyDATAStack?",
    "answer": ["While MyDATAStack generally doesn't come with formal vendor support, users can access various support channels within the community, including forums, mailing lists, chat rooms, and documentation.", "Additionally, some organizations offer commercial support services, consulting, and training for MyDATAStack."]
  },
  {
    "question": "How do I get started with MyDATAStack?",
    "answer": ["To get started with MyDATAStack, you can download the software from the project's repository and follow the installation instructions provided in the documentation.", "MyDATAStack also offers pre-built packages and Docker images for easier deployment.", "Once installed, you can begin exploring MyDATAStack's features, experimenting with sample datasets, and gradually integrating it into your data infrastructure."]
  },
  {
    "question": "Can I contribute to the development of MyDATAStack?",
    "answer": ["Yes, most MyDATAStack projects welcome contributions from the community, including bug fixes, feature enhancements, documentation improvements, and testing.", "You can contribute code, submit bug reports, participate in discussions, and help other users on forums and mailing lists.", "Check the project's contribution guidelines and community resources to learn how you can get involved effectively."]
  },
  {
    "question": "How does licensing work for MyDATAStack?",
    "answer": ["MyDATAStack is distributed under the BSD3 license, which grants users the right to use, modify, and distribute the software freely, subject to certain conditions, such as retaining copyright notices and preserving the original license terms.", "It's important to review the specific license associated with MyDATAStack you're using to understand your rights and obligations."]
  }
];


export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className="custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul>
          {content.map(item => (
            <li key={item} className={'mt-5'}>{item}</li>
          ))}
          </ul>
          </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
