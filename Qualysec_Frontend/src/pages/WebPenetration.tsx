import React from 'react';
import FAQSection from './questions';
import PenetrationTestingTypes from './PenetrationPage';
import Card from '../components/Card';
import ServicesSection from './Services';
import SecurityTesting from './securitypage';
import WebAppTestingProcess from './penetration';
import WebAppTesting from './testingprocess';

function WebAppPentesting() {
    const cards = [
        {
          image: "/assets/buyer-guide.png", // Use actual image paths
          title: "First-Time Penetration Testing Buyer Guide",
          description: "Read the essentials with our go-to guide to your first penetration test—everything you need to know to make an informed and successful investment in your security.",
          buttonText: "Download Now",
        },
        {
          image: "/assets/company-profile.png",
          title: "Qualysec Company Profile",
          description: "Discover the expertise and innovation behind Qualysec. Explore our company profile to learn how we deliver cutting-edge security solutions and drive success for our clients.",
          buttonText: "Download Now",
        },
        {
          image: "/assets/penetration-report.png",
          title: "Sample Penetration Testing Report",
          description: "Download a sample penetration testing report where you could see a detailed analysis of the vulnerabilities in the form of a clear picture along with remediations during the security assessment.",
          buttonText: "Download Now",
        },
      ];
  return (
    <div className="min-h-screen font-sans">
     
     <div className='flex flex-row py-10 px-35 justify-between'>

        <div className="flex flex-col items-start justify-center ">
            <div>
            <p className="text-[50px] font-bold leading-tight">Web Application</p>
            <p className="text-[50px] font-bold leading-tight">Penetration Testing</p>
            <p className="text-[20px] font-semibold text-gray-500 leading-snug max-w-[500px]" >
              Secure your web application with Qualysec’s web penetration testing. We identify vulnerabilities, guide remediation, and ensure regulatory compliance.
            </p>
        </div>

        <button className="bg-gradient-to-r from-[#3076F8] to-[#FB62F6] text-white px-6 py-3 rounded-full mt-10">
            Talk to an expert
        </button>
      </div>

        <div className='pr-10'>
        <img
            src="https://qualysec.com/wp-content/uploads/2024/10/web-antivirus.gif"
            alt="Web Antivirus"
            className=" h-100"
        />
        </div>

      </div>

      <section className="pl-35 pr-25 items-start justify-center ">
        <div className='flex flex-row justify-between'>
        <div className="max-w-[800px] items-start justify-between ">
        <h3 className="bg-gradient-to-r from-[#3076F8] to-[#FB62F6] text-xl md:text-2xl font-semibold mb-2 text-transparent bg-clip-text">Definition</h3>
            <h4 className="text-[30px] font-bold mb-2">What is Web Application Penetration Testing?</h4>
            <p className="mb-6 text-[20px]">
            Protect your Web app today! Choose Qualysec to catch vulnerabilities before they catch you.
            </p>
        </div>
            <div className='flex items-center justify-center px-15 '>
                <button className="bg-gradient-to-r from-[#3076F8] to-[#FB62F6] text-white px-6 py-3 rounded-full ">
                Get a Quote
                </button>
            </div>
        </div>
      </section>

      <div className='flex flex-row py-10 px-35 justify-between'>

        <div className="flex flex-col items-start justify-center ">
            <div>
            <p className="text-[26px] font-semibold text-gray-500 leading-snug max-w-[500px]" >
            Web application penetration testing is a thorough and systematic approach that employs a range of solutions and techniques to detect, assess, and prioritize vulnerabilities within a web app’s code and settings. Penetration testing is more than basic testing, as it helps identifying complex business logic vulnerabilities to prevent unauthorized access to sensitive information, operational disruptions, or data theft.
            </p>
        </div>
      </div>

        <div className='pr-10'>
        <img
            src="https://qualysec.com/wp-content/uploads/2024/10/web-antivirus.gif"
            alt="Web Antivirus"
            className=" h-100"
        />
        </div>

      </div>

    <SecurityTesting />

    <WebAppTestingProcess />
   
  
<PenetrationTestingTypes/>

<section className="pl-35 pr-25 items-start justify-center mt-10 ">
        <div className='flex flex-row justify-between'>
        <div className="max-w-[800px] items-start justify-between ">
        <h3 className="bg-gradient-to-r from-[#3076F8] to-[#FB62F6] text-[20px]  font-semibold mb-2 text-transparent bg-clip-text">FREE ASSETS</h3>
            <h4 className="text-[30px] font-bold mb-2">Explore our important resources and reports</h4>
        </div>
        
        </div>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          image={card.image} 
          title={card.title} 
          description={card.description} 
          buttonText={card.buttonText}
        />
      ))}
    </div>
      </section>
      <WebAppTesting />

<FAQSection />

    </div>
  );
}

export default WebAppPentesting;