import React from "react";
import { FiGift, FiUsers, FiBookOpen, FiSmile } from "react-icons/fi";

const Highlights = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-20 space-y-20 bg-base-100">
      {/* PROMO BANNER */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white p-8 md:p-12">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 badge badge-outline border-white text-white mb-4">
            <FiGift /> Limited Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Upgrade Your Skills with Premium Courses
          </h2>
          <p className="mt-4 text-white/90">
            Get full access to all courses, certificates, and exclusive
            resources at a discounted price.
          </p>
          <button className="btn btn-outline border-white text-white mt-6">
            Explore Add-ons
          </button>
        </div>

        {/* Decorative */}
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/10"></div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat icon={<FiUsers />} value="25K+" label="Students" />
        <Stat icon={<FiBookOpen />} value="1.2K+" label="Courses" />
        <Stat icon={<FiUsers />} value="320+" label="Instructors" />
        <Stat icon={<FiSmile />} value="98%" label="Satisfaction" />
      </div>

      {/* INFO BLOCK */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h3 className="text-3xl font-bold">Learn Anytime, Anywhere</h3>
          <p className="text-gray-500 mt-4">
            Our platform is designed to support your learning journey with
            flexible schedules, expert instructors, and practical content.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Industry-ready curriculum
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Lifetime course access
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Verified certificates
            </li>
          </ul>

          <button className="btn btn-primary mt-8">Start Learning Today</button>
        </div>

        {/* Illustration */}
        <div className="relative">
          <div className="rounded-2xl bg-linear-to-br from-indigo-100 to-sky-100 p-10 text-center">
            <img
              src="https://i.ibb.co.com/21LDXdzR/742ac873eaf672e6805c8514397a1ebd.jpg"
              alt="Learning illustration"
              className="mx-auto max-h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, value, label }) => (
  <div className="space-y-3">
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
      {icon}
    </div>
    <h4 className="text-2xl font-bold">{value}</h4>
    <p className="text-gray-500">{label}</p>
  </div>
);

export default Highlights;
