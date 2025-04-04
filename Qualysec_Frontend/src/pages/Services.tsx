import React from 'react';
import { Link } from 'react-router-dom';

function ServicesSection() {
  const services = [
    {
      title: "Web App Pentesting",
      description: "Identify weak spots and vulnerable routes in your web application",
      icon: "🖥️", // Placeholder for the icon (you can replace with an actual image or SVG)
      hasGradientBorder: true,
    },
    {
      title: "Mobile App Pentesting",
      description: "Enhance your mobile app's security posture by thoroughly testing for vulnerabilities.",
      icon: "📱",
      hasGradientBorder: false,
    },
    {
      title: "API Pentesting",
      description: "Discover security vulnerabilities that attackers could exploit in an API.",
      icon: "🔌",
      hasGradientBorder: false,
    },
    {
      title: "Cloud Pentesting",
      description: "Perform security assessment of your cloud infrastructure from expert pentesters.",
      icon: "☁️",
      hasGradientBorder: false,
    },
    {
      title: "External Network Pentesting",
      description: "Detect vulnerabilities in your external network with expert-authorized penetration tests.",
      icon: "🌐",
      hasGradientBorder: false,
    },
    {
      title: "IOT Pentesting",
      description: "Achieve full-spectrum security validation of your interconnected devices.",
      icon: "📡",
      hasGradientBorder: false,
    },
  ];

  return (
    <section className="bg-white">
      <Link to='/services'>
  <div className="mx-35">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative bg-[#f5faff] p-6 rounded-lg shadow-md hover:border-b-4 group"
        >
          <div className="flex items-center mb-4">
            {/* Wrap the icon separately to apply rotation only on hover */}
            <div className="mr-4 transition-transform duration-500 group-hover:rotate-[360deg]">
              {service.icon}
            </div>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-5">{service.title}</h4>

          <p className="text-gray-600 mb-5">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
  </Link>

</section>

  
  );
}

export default ServicesSection;