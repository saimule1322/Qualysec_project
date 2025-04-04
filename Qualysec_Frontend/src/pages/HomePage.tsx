import React from 'react'
import Card from '../components/Card';
import ContactForm from './ContactForm';
import ServicesSection from './Services';
import { Link } from 'react-router-dom';

function HomePage() {

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
    const features = [
        {
          title: "Deep Penetration Testing",
          description:
            "We go beyond tool scans, thoroughly examining your functionalities and technologies to uncover vulnerabilities that scanners and traditional methods often miss. Our deep penetration testing ensures comprehensive security insights and complete protection.",
        },
        {
          title: "Hacker-Style Approach",
          description:
            "We simulate a hacker-style approach to identify vulnerabilities to give you a clear picture of your defenses against real-world threats. We think like hackers by employing the latest techniques and tools to ensure a comprehensive and authentic assessment of your security posture.",
        },
        {
          title: "Good Track Record",
          description:
            "Our top-notch pentesting speaks for itself. We've secured over 450 assets in 18+ countries with zero data breaches. Our team's diverse expertise keeps us one step ahead of emerging threats and allows us to provide superior security solutions.",
        },
        {
          title: "Comprehensive Report",
          description:
            "Our detailed yet easy-to-understand reports give your developers detailed insights to understand and fix vulnerabilities effectively. Our reports also facilitate achieving important security compliances and certifications.",
        },
        {
            title: "Process-Based Testing",
            description: "We don’t just rely on manual or automated pentesting techniques. Instead, we’ve created our unique process that combines both methods, and we evaluate your application thoroughly and repeatedly to deliver the most efficient and effective results."
          },
          {
            title: "Help in Fixing Vulnerabilities",
            description: "We assist your development and network teams in fixing identified vulnerabilities through expert guidance and consultation calls. Our ongoing online support ensures effective remediation and improved security posture."
          }
      ];

    const testimonials = [
        {
          id: 1,
          name: "Rishi Verma",
          role: "Co-founder",
          company: "Stethy",
          feedback:
            "Very prompt with service and replies. Qualysec Technologies was incredibly prompt in both their service delivery and their replies. I was impressed by their efficiency and professionalism. Highly recommended.",
          image: "https://via.placeholder.com/150", // Replace with actual image
        },
      ];
  return (

    <>
   
      {/* Header Section */}

      <div className='flex flex-row py-10 px-25 justify-between'>

        <div className="flex flex-col items-start justify-center ">
            <div className='flex flex-row items-start rounded-full border-2 border-gray-500 p-2'>
                <div className="w-3 h-3 bg-blue-600 rounded-full m-2 items-center items-start justify-center"></div>
                <h1 className="text-center">600+ Assessment Completed</h1>
            </div>
            <div>
            <div className="relative h-16 overflow-hidden text-[50px] font-bold ">
              <span className="absolute w-full animate-fade1">Expose cyber threat</span>
              <span className="absolute w-full animate-fade2">Gain Customer Trust</span>
              <span className="absolute w-full animate-fade3">Achieve compliances</span>
            </div>
            <p className="text-[50px] font-bold ">with Penetration Testing</p>
            <p className="text-[20px] font-semibold text-gray-500 leading-snug">
                Talk to an expert today to secure your business against potential threats
            </p>
        </div>
    
        <button className="bg-gradient-to-r from-[#3076F8] to-[#FB62F6] text-white px-6 py-3 rounded-full mt-10">
          <Link to='/contact'>Talk to an expert</Link>  
        </button>
        </div>

        <div className='pr-10'>
            <video className="w-full h-120 border-none"loop autoPlay muted>
            <source src="https://res.cloudinary.com/dajz8tznz/video/upload/v1736162489/main-animation_zsk6kv.mp4" type="video/webm" />
            </video>
        </div>
        
      </div>
   

      {/* Hero Section */}
      <section className="text-center">
        <h2 className="text-[24px] font-bold  mb-4">Fortune 100 to Startup, We Secure Them All</h2>
      </section>

      {/* Clients Section */}
      <section className="p-5 overflow-hidden">
  {/* <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">Trusted by Leading Brands</h3> */}
  <div className="marquee whitespace-nowrap flex gap-6">
    {Array(2).fill([
      "Konica Minolta", "Revvity", "Zee Media", "Insider", "Cloudbolt", "Card Bank",
      "Brandlive", "BPOC", "Wonderla", "Harbinger Group", "Oneshield", "Flydocs",
      "ICC", "Spectra Force", "Abrao Group", "Ollkom Group"
    ]).flat().map((client, index) => (
      <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg text-center inline-block min-w-[150px]">
        <p className="text-sm md:text-base">{client}</p>
      </div>
    ))}
  </div>
</section>


      {/* Services Section */}
      <section className="pl-35 pr-25 items-start justify-center ">
        <div className='flex flex-row justify-between'>
        <div className="max-w-[800px] items-start justify-between ">
        <h3 className="bg-gradient-to-r from-[#3076F8] to-[#FB62F6] text-xl md:text-2xl font-semibold mb-2 text-transparent bg-clip-text">Our Services</h3>
            <h4 className="text-[30px] font-bold mb-2">Comprehensive Penetration Testing Services</h4>
            <p className="mb-6 text-[20px]">
                Thoroughly assess your security infrastructure to identify vulnerabilities with Qualysec’s in-depth testing reports and data insights.
            </p>
        </div>
            <div className='flex items-center justify-center px-15 '>
                <button className="border-gradient-to-r from-[#3076F8] to-[#FB62F6] border-2 px-6 py-3 rounded-full ">
                <Link to='/Services'>All Services</Link>  
                </button>
            </div>
        </div>
      </section>
      <ServicesSection />

      <section className="pl-30 pr-35 items-start justify-center mt-20 ">
          <div className='flex flex-row  justify-between bg-gradient-to-r from-[#3076F8] to-[#FB62F6] py-10 px-25 rounded-[10px]'>
            <div className="max-w-[800px] justify-center ">
                <h4 className="text-[30px] font-bold mb-2">Stay One Step Ahead</h4>
                <p className="mb-6 text-[30px]">
                Let Qualysec help you find gaps in your security and suggest fixes to protect your digital assets.                </p>
            </div>
            <div className='flex items-center justify-center pl-10'>
                <button className="bg-white text-black px-6 py-3 rounded-full ">
                
                <Link to='/contact'>Get A Quote</Link>  
                
                </button>
            </div>
        </div>
       </section>

       <section className="pl-35 pr-25 items-start justify-center bg-white mt-20">
        <div className='flex flex-row justify-between'>
        <div className="max-w-[800px] items-start justify-between ">
        <h3 className="bg-gradient-to-r from-[#3076F8] to-[#FB62F6] text-xl md:text-2xl font-semibold mb-2 text-transparent bg-clip-text">Testimonials</h3>
            <h4 className="text-[30px] font-bold mb-2">          What Our Clients Say About Us
            </h4>
            <p className="mb-6 text-[20px]">
            Read what our clients say about our services. See how Qualysec has
            helped several businesses to keep their digital assets safe!
            </p>
        </div>
            <div className='flex items-center justify-center px-15 '>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg transition">
            Read All Reviews
          </button>
            </div>
        </div>

      <div className="hover:bg-gradient-to-r from-[#3076F8] to-[#FB62F6] rounded-[10px]">
       

        {/* Review Card */}
        <div className="mt-10  p-6 md:p-10  shadow-md">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col md:flex-row items-center text-left">
              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 rounded-lg object-cover shadow-lg md:mr-6"
              />

              {/* Text */}
              <div>
              <div className="mt-4 md:mt-0">
                <p className="text-4xl text-purple-400 font-serif">“</p>
                <p className="text-gray-800 text-lg italic">
                  {testimonial.feedback}
                </p>
                <h4 className="font-bold text-gray-900 mt-4">
                  {testimonial.name}
                </h4>
                <div className='flex flex-row justify-between'>
                <p className="text-gray-500">{testimonial.role} @ {testimonial.company}</p>
                <div className="float-end mb-5 b-4">
            <button className="border border-gray-400 px-4 mr-4 py-2 rounded-full text-gray-600 ">
              ⬅ 
            </button>
            <button className="border border-gray-400 px-4 py-2 rounded-full text-gray-600 ">
               ➡
            </button>
          </div>
                </div>
              </div>

              
             
</div>
            
            </div>
            
          ))}
          
        </div>

        {/* Buttons */}
        
        
      </div>
    </section>

      {/* Why Choose Qualysec Section */}


   
    <section className="bg-gradient-to-b from-[#020617] to-[#0F172A] text-white py-16 px-4 mt-5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-blue-400 uppercase tracking-wide mb-2">Choose Wisely</p>
        <h2 className="text-3xl font-bold mb-4">
          Choose Qualysec as Your Trusted Penetration Testing Service Provider
        </h2>
        <p className="text-gray-300 mb-8">
          Qualysec is known for its unmatched expertise and reliability in
          penetration testing. Here are more reasons to choose us for uncovering
          gaps in your business security.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-blue-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-pink-500 text-white p-6 rounded-2xl flex items-center justify-between  max-w-[1100px] mx-auto shadow-lg mt-20">
      <div className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Advisor"
          className="w-16 h-16 rounded-full border-2 border-white"
        />
        <div>
          <h3 className="text-lg font-bold">Swagat Kumar Dash</h3>
          <p className="text-sm">Business Development Manager</p>
        </div>
      </div>
      <div className="flex-1 px-6">
        <p className="text-md font-semibold">
          "Connect with Swagat, Your trusted penetration testing advisor.
          Secure your assets. Reach out today!"
        </p>
      </div>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200">
        Schedule a Call
      </button>
    </div>
    </section>
 
    <div className="text-center py-16 px-6">
        <h3 className="text-purple-500 font-semibold">INDUSTRY WE SERVE</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Industries We Secure with Our Penetration Testing Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Explore the diverse sectors we serve with our penetration testing
          services and protect against evolving cybersecurity threats.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-4">
        {[
          "Fin Tech",
          "E-Commerce",
          "SaaS",
          "AI-Driven Apps",
          "Health Care",
        ].map((category, index) => (
          <button
            key={index}
            className="border px-16 py-2 rounded-full hover:bg-gray-100 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-10 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-1">
          <img
            src="/nft-security.png"
            alt="NFT Security"
            className="rounded-lg shadow-md"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900">
            Securing Digital Financial Frontiers
          </h3>
          <p className="text-gray-600 mt-4">
            Qualysec protects your financial innovations and customer trust
            with its specialized fintech penetration testing. We simulate
            sophisticated attacks on payment gateways, mobile banking apps, and
            blockchain implementations to discover vulnerabilities before
            attackers do.
          </p>
        </div>
      </div>

      <section className="pl-35 pr-25 items-start justify-center ">
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


      {/* Contact Section */}
      <section className="p-5 md:p-10  flex flex-row ">
        <div className='max-w-[600px] ml-25 pt-15'>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Get Quote</h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Want To Protect Your Organization from Emerging Cyber Threats?</h3>
        <p className="mb-6 max-w-2xl mx-auto">
        Now is the perfect time to stay one step ahead of evolving cyber threats by taking proactive security measures. Fill out the form, and our expert pentesters will help you identify and address vulnerabilities before they escalate.
        </p>
        <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row gap-8 mt-45">
        {/* Left Side - Statistics */}
        <div className="w-full md:w-1/2 flex flex-col justify-center ">
          
            <div className='pl-10'>
              <p className="text-2xl font-bold text-purple-600">12,099</p>
              <p className="text-gray-600">Total No. Vulnerabilities</p>
            </div>
            <div className="grid grid-cols-2 text-center pl-8 pt-5">
            <div>
              <p className="text-2xl font-bold text-purple-600">4+</p>
              <p className="text-gray-600">Years in Business</p>
            </div>
            <div className='w-[400px] '>
              <p className="text-2xl font-bold text-purple-600">600+</p>
              <p className="text-gray-600">Assessment Completed</p>
            </div>
            <div className='pt-10'>
              <p className="text-2xl font-bold text-purple-600">150+</p>
              <p className="text-gray-600">Trusted Clients</p>
            </div>
            <div className='w-[400px] pt-10'>
              <p className="text-2xl font-bold text-purple-600">21+</p>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className="mx-auto bg-white rounded-lg">
         <ContactForm />
        </div>
      </section>
     
    
    </>
  )
}

export default HomePage