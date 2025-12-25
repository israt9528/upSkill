import React, { useState } from "react";
import {
  FiClock,
  FiUsers,
  FiBookOpen,
  FiChevronDown,
  FiChevronUp,
  FiPlayCircle,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";

const course = {
  title: "Advanced JavaScript & TypeScript Mastery",
  category: "Development",
  instructor: "Emma Williams",
  duration: "8h 0m",
  students: 950,
  price: "$79",
  rating: 4.9,
  image: "https://i.ibb.co.com/r20Gwkhd/937b943dab7c48f92c07dee92b0bbde7.jpg",
  curriculum: [
    {
      id: 1,
      title: "Module 1: JavaScript Basics",
      lessons: [
        "Variables & Data Types",
        "Functions & Scope",
        "Loops & Conditions",
      ],
    },
    {
      id: 2,
      title: "Module 2: Advanced Concepts",
      lessons: ["Closures", "Promises", "Async/Await"],
    },
    {
      id: 3,
      title: "Module 3: DOM Manipulation",
      lessons: ["Selecting Elements", "Event Listeners", "Forms & Validation"],
    },
  ],
};

const CourseDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState(
    course.curriculum[0].id
  );

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section className="px-6 md:px-10 lg:px-24 py-16 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-10 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 h-56 rounded-3xl overflow-hidden relative group">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center">
                  <FiPlayCircle className="text-white text-5xl drop-shadow-lg" />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <FiStar className="fill-current" /> {course.rating}
                  </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                  {course.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-400 uppercase tracking-tighter">
                  <span className="flex items-center gap-2">
                    <FiUsers className="text-indigo-500" /> {course.students}{" "}
                    Students
                  </span>
                  <span className="flex items-center gap-2">
                    <FiClock className="text-indigo-500" /> {course.duration}
                  </span>
                  <span className="text-slate-900">By {course.instructor}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide border-b border-slate-200">
                {["Overview", "Curriculum", "Instructor", "FAQ", "Reviews"].map(
                  (tab) => (
                    <button
                      key={tab}
                      className={`whitespace-nowrap px-6 py-3 font-black text-xs uppercase tracking-widest transition-all rounded-t-2xl
                      ${
                        tab === "Curriculum"
                          ? "bg-white text-indigo-600 border-t border-l border-r border-slate-200 -mb-px"
                          : "text-slate-400 hover:text-indigo-500"
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                    Course Content
                  </h3>
                  <span className="text-xs font-bold text-slate-400 uppercase">
                    {course.curriculum.length} Modules
                  </span>
                </div>

                {course.curriculum.map((module) => (
                  <div
                    key={module.id}
                    className={`border transition-all duration-300 rounded-3xl overflow-hidden
                      ${
                        activeAccordion === module.id
                          ? "bg-white border-indigo-100 shadow-xl shadow-indigo-900/5"
                          : "bg-slate-100/50 border-transparent hover:border-slate-200"
                      }`}
                  >
                    <button
                      className="w-full text-left px-6 py-5 flex justify-between items-center group"
                      onClick={() => toggleAccordion(module.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-8 w-8 rounded-xl flex items-center justify-center transition-colors
                          ${
                            activeAccordion === module.id
                              ? "bg-indigo-600 text-white"
                              : "bg-white text-slate-400 shadow-sm"
                          }`}
                        >
                          <FiBookOpen />
                        </div>
                        <span
                          className={`font-bold tracking-tight ${
                            activeAccordion === module.id
                              ? "text-slate-900"
                              : "text-slate-600"
                          }`}
                        >
                          {module.title}
                        </span>
                      </div>
                      {activeAccordion === module.id ? (
                        <FiChevronUp className="text-indigo-600" />
                      ) : (
                        <FiChevronDown className="text-slate-400" />
                      )}
                    </button>

                    {activeAccordion === module.id && (
                      <div className="px-6 pb-6 pt-2 animate-fadeIn">
                        <div className="ml-12 space-y-3 border-l-2 border-indigo-50 pl-6">
                          {module.lessons.map((lesson, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between group cursor-default"
                            >
                              <div className="flex items-center gap-3">
                                <FiCheckCircle className="text-emerald-500" />
                                <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-600 transition-colors">
                                  {lesson}
                                </span>
                              </div>
                              <span className="text-[10px] font-black text-slate-300 uppercase">
                                15:00
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-96 order-1 lg:order-2">
            <div className="sticky top-10 space-y-6">
              <div className="bg-primary rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 h-40 w-40 bg-indigo-600/20 rounded-full"></div>

                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.2em]">
                      Investment
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-5xl font-black italic">
                        {course.price}
                      </span>
                      <span className="text-slate-400 line-through text-lg font-bold">
                        $199
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase hover:bg-indigo-50 transition-all shadow-lg">
                      Enroll Now
                    </button>
                    <button className="w-full py-4 bg-primary-content text-white rounded-2xl font-black text-xs uppercase transition-all border border-slate-700">
                      Add to Wishlist
                    </button>
                  </div>

                  <div className="pt-6 border-t border-slate-800 space-y-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase text-center">
                      Includes
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-lg font-black">Full</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">
                          Access
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-black">Yes</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">
                          Certificate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-200">
                <h4 className="text-xl font-black leading-tight mb-2">
                  Group Access?
                </h4>
                <p className="text-indigo-100 text-xs mb-6">
                  Train your entire team with this course. Special enterprise
                  pricing available.
                </p>
                <button className="w-full py-3 text-white rounded-xl font-bold text-xs uppercase bg-indigo-800 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
