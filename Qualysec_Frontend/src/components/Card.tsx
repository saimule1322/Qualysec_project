import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-6 border border-gray-200 max-w-sm h-[480px] flex flex-col justify-between">
    {/* Image Section */}
    <div className="relative bg-gradient-to-r from-blue-500 to-pink-500 p-4 rounded-xl flex justify-center">
      <img src={image} alt={title} className="h-32 object-cover rounded-lg shadow-lg" />
    </div>

    {/* Title & Description */}
    <div className="flex-grow">
      <h2 className="text-xl font-semibold mt-4 text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-2 line-clamp-4">{description}</p>
    </div>

    {/* Button - Always at the Bottom */}
      <button className="w-full px-2 py-2 text-white bg-blue-500 rounded-full font-semibold transition-all hover:bg-blue-600">
        {buttonText}
      </button>
  </div>
  );
};

export default Card;
