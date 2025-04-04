import React from "react";

const steps = [
  {
    id: 1,
    title: "Contact us",
    description:
      "Reach out to us and our friendly team will listen to your concerns and understand your unique security needs. Whether you prefer a call, email, or chat, we’re ready to start your journey towards a more secure web app.",
    link: "#",
  },
  {
    id: 2,
    title: "Pre-Assessment Form",
    description:
      "We send you a simple pre-assessment form to fill up with the appropriate details. This helps us understand your application’s architecture, current security status, and specific concerns.",
    link: "#",
  },
  {
    id: 3,
    title: "NDA and Agreement Signing",
    description:
      "We get a clear Non-Disclosure Agreement signed by you to protect your sensitive information. We finalize our service agreement after you are completely satisfied. This helps us both know exactly what to expect from our partnership.",
    link: "#",
  },
  {
    id: 4,
    title: "Pre-requisite Collection",
    description:
      "We provide our clients with a checklist of everything we need to begin testing, such as access credentials and documentation. Our team assists and ensures a smooth start to your app’s security enhancement journey.",
    link: "#",
  },
];

const WebAppTesting = () => {
  return (
    <div className="bg-white text-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-sm tracking-widest text-purple-400 mb-2">
          PROCESS TO START ASSESSMENT
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold">
          How to Begin Securing Your App with Qualysec
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Key steps to start protecting your web application from cyber threats.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-gray-100 p-6 rounded-xl text-left shadow-md w-72 border border-gray-300 hover:border-purple-400 transition-all relative"
          >
            <span className="absolute -top-3 left-6 bg-white px-2 text-purple-500 font-bold text-lg">{step.id}</span>
            <h4 className="text-lg font-bold text-purple-500 mt-4">{step.title}</h4>
            <p className="mt-2 text-gray-700 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebAppTesting;
