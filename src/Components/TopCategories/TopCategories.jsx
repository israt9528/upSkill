import React from "react";
import {
  FiPenTool,
  FiCode,
  FiCamera,
  FiBarChart2,
  FiMusic,
  FiLayers,
  FiArrowRight,
} from "react-icons/fi";

const categories = [
  {
    name: "Art & Design",
    courses: 38,
    icon: <FiPenTool />,
    color: "text-orange-500",
  },
  {
    name: "Development",
    courses: 52,
    icon: <FiCode />,
    color: "text-blue-500",
  },
  {
    name: "Photography",
    courses: 21,
    icon: <FiCamera />,
    color: "text-purple-500",
  },
  {
    name: "Business",
    courses: 34,
    icon: <FiBarChart2 />,
    color: "text-emerald-500",
  },
  { name: "Music", courses: 18, icon: <FiMusic />, color: "text-rose-500" },
  {
    name: "UI / UX",
    courses: 27,
    icon: <FiLayers />,
    color: "text-indigo-500",
  },
];

const TopCategories = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-20 bg-base-100">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-primary"></span>
            <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold">
              Explore Programs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-base-content tracking-tight">
            <span className="text-primary-content">Top</span> Course Categories
          </h2>
          <p className="text-base-content/60 mt-4 text-lg">
            Choose from our most popular learning categories and start building
            skills that make a real impact.
          </p>
        </div>

        <button className="hidden md:flex btn btn-ghost hover:bg-primary/10 text-primary border border-primary/20 rounded-xl items-center gap-2 group">
          All Categories
          <FiArrowRight className="group-hover:translate-x-1 transition-all" />
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden
              cursor-pointer rounded-2xl
              border border-primary-content/40 bg-primary-content/10
              p-8 transition-all duration-300
              hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
              hover:-translate-y-2
            "
          >
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>

            <div
              className={`
                mb-6 flex h-16 w-16
                items-center justify-center
                rounded-2xl bg-base-200/50
                text-3xl transition-all duration-300
                group-hover:scale-110 group-hover:bg-primary group-hover:text-white
                ${category.color}
              `}
            >
              {category.icon}
            </div>

            <div className="relative z-10">
              <h3 className="font-bold text-lg text-base-content group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-medium text-base-content/50 uppercase tracking-tighter">
                  {category.courses} Courses
                </p>
                <div className="h-1 w-1 rounded-full bg-base-300 group-hover:w-8 group-hover:bg-primary transition-all duration-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center md:hidden">
        <button className="btn btn-primary btn-outline w-full rounded-xl">
          View All Categories
        </button>
      </div>
    </section>
  );
};

export default TopCategories;
