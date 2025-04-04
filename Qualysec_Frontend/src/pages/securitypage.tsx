import React from "react";

const SecurityTesting = () => {
  return (
    <div className="bg-gradient-to-b from-[#0F021F] to-[#13052E] text-white py-16 px-4">
      <div className="flex flex-row justify-between mx-30 ">
      <div className="max-w-6xl">
        <h3 className="text-sm tracking-widest text-purple-400 mb-2">VULNERABILITIES</h3>
        <h2 className="text-3xl md:text-4xl font-bold">
          Types of Security Testing in Web Applications
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl">
          Testing both pre- and post-authentication uncovers vulnerabilities inside and out.
        </p>
        </div>
        <div className='flex items-center justify-center  pl-10'>
                <button className="bg-white text-black px-6 py-3 rounded-full ">
                Get started now
                </button>
            </div>
    </div>

      
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
        {/* Image Container */}
        <div className="flex-shrink-0">
          <img src="https://qualysec.com/wp-content/uploads/2024/10/vulnerabilities.png" alt="Security Illustration" className="w-64 md:w-80" />
        </div>
        
        {/* Security Testing Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Injection Testing", "Authentication Testing", "Authorization Testing",
            "Input Validation Testing", "Configuration Review", "Session Management Testing",
            "Encryption Testing", "Business Logic Testing", "Advanced Technology Testing"
          ].map((test, index) => (
            <div key={index} className="bg-[#2A1055] p-6 rounded-lg text-center shadow-md w-56 sm:w-60 md:w-64">
              <span className="block text-purple-300 text-lg font-semibold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="mt-2 text-lg font-bold">{test}</h4>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default SecurityTesting;
