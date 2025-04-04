import React, { useState } from "react";

const processSteps = [
  "Define Scope",
  "Information Gathering",
  "Enumeration",
  "Attack and Penetration",
  "Reporting",
  "Remediation Testing",
];

const processContent = {
  "Define Scope": "We collaborate closely with you to outline the test boundaries to identify critical assets and potential risk areas. This tailored approach ensures a focused and effective assessment.",
  "Information Gathering": "We gather intelligence on the target application to understand its structure, technologies, and potential vulnerabilities.",
  "Enumeration": "We enumerate application entry points and collect useful information that helps in identifying potential attack vectors.",
  "Attack and Penetration": "We actively exploit vulnerabilities in a controlled manner to assess their impact and validate security weaknesses.",
  "Reporting": "We provide a detailed report outlining identified vulnerabilities, exploitation methods, and potential mitigation strategies.",
  "Remediation Testing": "We perform retesting after fixes are applied to ensure that the vulnerabilities have been effectively addressed.",
};

const WebAppTestingProcess = () => {
  const [activeStep, setActiveStep] = useState("Define Scope");

  return (
    <div className="bg-white text-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-sm tracking-widest text-purple-400 mb-2">PROCESS</h3>
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Web App Penetration Testing Process
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At QualSec, we safeguard your web application with our thorough penetration testing process. Our comprehensive approach ensures every vulnerability is identified and addressed.
        </p>
      </div>
      
      {/* Step Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {processSteps.map((step) => (
          <button
            key={step}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
              activeStep === step
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none"
                : "border border-gray-400 text-gray-600 hover:border-purple-400"
            }`}
            onClick={() => setActiveStep(step)}
          >
            {step}
          </button>
        ))}
      </div>
      
      {/* Step Content */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        <img src="https://qualysec.com/wp-content/uploads/2024/10/define-scope.png" alt="Process Illustration" className="w-64 md:w-80" />
        <div className="bg-gray-100 p-6 rounded-lg text-left shadow-md w-3/4 md:w-1/2 h-[300px]">
          <h4 className="text-xl font-bold text-purple-500">{activeStep}</h4>
          <p className="mt-2 text-gray-700">{processContent[activeStep]}</p>
        </div>
      </div>
    </div>
  );
};

export default WebAppTestingProcess;
