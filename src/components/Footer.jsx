import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: site name */}
        <p className="text-green-400 font-semibold">YallaGoal</p>

        {/* Right side: copyright / designed by */}
        <p className="text-gray-400 mt-2 md:mt-0 text-center md:text-right text-sm">
          © جميع الحقوق محفوظة 2025 يلا جول | YallaGoal | مباريات اليوم بث مباشر
          yallagoal <br />
          Designed by Sharaf
        </p>
      </div>
    </footer>
  );
};

export default Footer;
