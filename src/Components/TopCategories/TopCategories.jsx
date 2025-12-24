import React from "react";
import {
  FiPenTool,
  FiCode,
  FiCamera,
  FiBarChart2,
  FiMusic,
  FiLayers,
} from "react-icons/fi";

const categories = [
  {
    name: "Art & Design",
    courses: 38,
    icon: <FiPenTool />,
  },
  {
    name: "Development",
    courses: 52,
    icon: <FiCode />,
  },
  {
    name: "Photography",
    courses: 21,
    icon: <FiCamera />,
  },
  {
    name: "Business",
    courses: 34,
    icon: <FiBarChart2 />,
  },
  {
    name: "Music",
    courses: 18,
    icon: <FiMusic />,
  },
  {
    name: "UI / UX",
    courses: 27,
    icon: <FiLayers />,
  },
];

const TopCategories = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-16 bg-base-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold">Top Course Categories</h2>
          <p className="text-gray-500 mt-1">
            Choose from our most popular learning categories and start building
            skills that make a real impact.
          </p>
        </div>

        <button className="hidden md:inline-flex btn btn-outline">
          All Categories
        </button>
      </div>

      {/* Categories */}
      <div
        className="
          grid gap-6
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-6
        "
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="
              group
              cursor-pointer
              rounded-xl
              bg-base-200
              p-6
              text-center
              transition-all
              hover:bg-primary
              hover:text-white
              hover:-translate-y-1
            "
          >
            <div
              className="
                mx-auto mb-4
                flex h-14 w-14
                items-center justify-center
                rounded-full
                bg-primary/10
                text-primary
                text-2xl
                group-hover:bg-white/20
                group-hover:text-white
              "
            >
              {category.icon}
            </div>

            <h3 className="font-semibold text-lg">{category.name}</h3>

            <p className="text-sm opacity-80 mt-1">
              {category.courses} Courses
            </p>
          </div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-10 flex justify-center md:hidden">
        <button className="btn btn-outline w-full max-w-xs">
          All Categories
        </button>
      </div>
    </section>
  );
};

export default TopCategories;
