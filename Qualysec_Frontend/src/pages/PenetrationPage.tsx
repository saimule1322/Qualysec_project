import React from "react";

const PenetrationTestingTypes = () => {
  return (
    <section className="bg-gradient-to-b from-[#0d0d2b] to-[#020024] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-lg font-semibold text-purple-400 uppercase tracking-wide">
          Other Types
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Different Types of Web Application Penetration Testing
        </h2>
        <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
          At QualySec, we offer a range of penetration testing approaches to suit
          your specific needs. Each type offers unique benefits.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
          {/* Black Box Testing */}
          <div className="text-center max-w-sm">
            <div className="flex justify-center">
              <img src="/icons/black-box.svg" alt="Black Box Testing" className="w-16" />
            </div>
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm mt-3">
              Zero Knowledge
            </button>
            <h3 className="text-xl font-semibold mt-4">Black Box Testing</h3>
            <p className="text-gray-400 mt-2">
              We simulate an external attacker with no inside knowledge. This method
              tests your app’s real-world defenses against unknown threats.
            </p>
          </div>
          <div>
          <span className="text-4xl font-bold"> + </span>
          </div>

          {/* White Box Testing */}
          <div className="text-center max-w-sm">
            <div className="flex justify-center">
              <img src="/icons/white-box.svg" alt="White Box Testing" className="w-16" />
            </div>
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm mt-3">
              Full Knowledge
            </button>
            <h3 className="text-xl font-semibold mt-4">White Box Testing</h3>
            <p className="text-gray-400 mt-2">
              Our team works with full access to your app’s source code and
              architecture. This approach uncovers hidden vulnerabilities and logic flaws.
            </p>
          </div>
          <div>
          <span className="text-4xl font-bold">=</span>
          </div>
          {/* Gray Box Testing */}
          <div className="text-center max-w-sm">
            <div className="flex justify-center">
              <img src="/icons/gray-box.svg" alt="Gray Box Testing" className="w-16" />
            </div>
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm mt-3">
              Some Knowledge
            </button>
            <h3 className="text-xl font-semibold mt-4">Gray Box Testing</h3>
            <p className="text-gray-400 mt-2">
              We blend both approaches, using limited internal information. This
              balanced method provides comprehensive security insights while
              mimicking a semi-informed attacker.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenetrationTestingTypes;
