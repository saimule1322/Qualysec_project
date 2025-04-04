import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState<{
    fullName: string;
    workEmail: string;
    phoneNumber: string;
    services: string[];
    message: string;
  }>({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    services: [],
    message: ""
  });
  
  const servicesOptions = [
    "Web app pentesting", "API pentesting", "External Network Pentesting", "Cloud security assessment",
    "Mobile app pentesting", "IoT Pentesting", "I want to partner with Qualysec", "Others"
  ];
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormData({ fullName: "", workEmail: "", phoneNumber: "", services: [], message: "" });
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <div className="flex flex-col items-center  p-10">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input type="text" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} className="border border-gray-300 p-3 rounded w-full" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Work Email</label>
              <input type="email" name="workEmail" placeholder="Enter your work email" value={formData.workEmail} onChange={handleChange} className="border border-gray-300 p-3 rounded w-full" required />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input type="tel" name="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} className="border border-gray-300 p-3 rounded w-full" required />
          </div>
          
          <fieldset>
            <legend className="text-lg font-semibold mb-2">Types of services you need*</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {servicesOptions.map((service) => (
                <label key={service} className="flex items-center space-x-2">
                  <input type="checkbox" checked={formData.services.includes(service)} onChange={() => handleCheckboxChange(service)} className="w-5 h-5" />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </fieldset>
          
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea name="message" placeholder="Enter your message here" value={formData.message} onChange={handleChange} className="border border-gray-300 p-3 rounded w-full h-32" />
          </div>
          
          <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold py-3 px-6 rounded shadow-md hover:from-blue-600 hover:to-purple-600">Please Send Message</button>
        </form>
      </div>
    </div>
  );
}
