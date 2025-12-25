import React from "react";
import {
  FiGift,
  FiUsers,
  FiBookOpen,
  FiSmile,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const Highlights = () => {
  return (
    <section className="px-6 md:px-10 lg:px-24 py-20 space-y-16 bg-base-100 overflow-hidden">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-700 via-blue-900/90 to-primary-content text-white p-8 md:p-16 shadow-2xl shadow-blue-200">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-widest mb-6">
            <FiGift className="text-lg" /> Limited Time Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Unlock Your Potential with <br className="hidden md:block" />
            <span className="text-sky-200">Premium Access</span>
          </h2>
          <p className="mt-6 text-lg text-blue-50/90 max-w-lg leading-relaxed font-light">
            Get unlimited access to 1,200+ top-rated courses, professional
            certificates, and 1-on-1 mentorship sessions.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="btn bg-white text-blue-700 hover:bg-blue-50 border-none px-8 rounded-xl font-bold shadow-lg">
              Get Started Now
            </button>
            <button className="btn btn-ghost text-white border border-white/30 hover:bg-white/10 px-8 rounded-xl backdrop-blur-sm">
              View Pricing
            </button>
          </div>
        </div>

        <div className="absolute -right-10 -top-10 h-80 w-80 rounded-full bg-white/10"></div>
        <div className="absolute right-20 bottom-12 h-40 w-40 rounded-full bg-sky-300/20"></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        <Stat
          icon={<FiUsers />}
          value="25K+"
          label="Active Students"
          color="bg-blue-50 text-blue-600"
        />
        <Stat
          icon={<FiBookOpen />}
          value="1.2K+"
          label="Premium Courses"
          color="bg-indigo-50 text-indigo-600"
        />
        <Stat
          icon={<FiUsers />}
          value="320+"
          label="Expert Mentors"
          color="bg-sky-50 text-sky-600"
        />
        <Stat
          icon={<FiSmile />}
          value="98%"
          label="Success Rate"
          color="bg-emerald-50 text-emerald-600"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-block px-4 py-1 rounded-lg bg-primary/10 text-primary text-sm font-bold mb-4">
            Flexible Learning
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
            Learn at your own pace, <br />
            <span className="text-primary">Anywhere in the world.</span>
          </h3>
          <p className="text-slate-500 mt-6 text-lg leading-relaxed max-w-xl">
            Our award-winning platform provides the tools you need to succeed.
            Transition into a new career or master a hobby with our
            industry-leading curriculum.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {[
              "Industry-ready curriculum",
              "Lifetime course access",
              "Verified certificates",
              "Interactive communities",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-slate-700 font-medium"
              >
                <FiCheckCircle className="text-primary text-xl" />
                {item}
              </div>
            ))}
          </div>

          <button className="btn btn-primary btn-lg mt-12 rounded-2xl px-10 shadow-xl shadow-primary/20 text-white">
            Start Learning Today
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="order-1 lg:order-2 relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
          <div className="relative overflow-hidden rounded aspect-square shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
              alt="Students collaborating"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 animate-bounce-slow">
            <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
              <FiSmile className="text-2xl" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">
                Community
              </p>
              <p className="text-sm font-black text-slate-800">
                4.9/5 User Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, value, label, color }) => (
  <div className="group p-8 rounded-3xl bg-white border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:border-primary/20 text-center">
    <div
      className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${color}`}
    >
      {icon}
    </div>
    <h4 className="text-3xl font-black text-slate-900">{value}</h4>
    <p className="text-slate-500 font-medium mt-1">{label}</p>
  </div>
);

export default Highlights;
