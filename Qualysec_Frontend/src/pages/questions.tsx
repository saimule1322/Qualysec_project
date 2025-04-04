import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  "What information is needed to scope a web app pen test?",
  "Which web application security testing tools are used?",
  "How long does it take to perform a web application security test?",
  "How much does a web application penetration test cost?",
  "Will this test allow us to meet compliance requirements?",
  "Which methodologies do you follow?",
  "How do you ensure the confidentiality and integrity of our data during the pen test?",
  "How often should we conduct web application penetration tests?",
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h2 className="text-purple-600 text-lg">F A Q</h2>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-600 mt-4 mb-8">
        Get quick answers to common questions about Web application security
        testing, its benefits, frequency, costs, and more.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((question, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-gray-800 font-medium">{question}</span>
            <ChevronDown
              className={`transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
