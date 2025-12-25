import React from "react";
import {
  FiClock,
  FiUsers,
  FiBookOpen,
  FiSearch,
  FiChevronRight,
  FiGrid,
  FiList,
  FiStar,
  FiFilter,
  FiBarChart,
  FiArrowRight,
} from "react-icons/fi";

const courses = [
  {
    id: 1,
    title: "React 19 & Next.js: The Ultimate Guide",
    category: "Development",
    instructor: "Alice Johnson",
    duration: "5h 30m",
    students: "1.2k",
    price: "Free",
    rating: 4.8,
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200",
  },
  {
    id: 2,
    title: "UI/UX Design Systems for Enterprise",
    category: "Design",
    instructor: "Michael Brown",
    duration: "6h 15m",
    students: "850",
    price: "$49",
    rating: 4.9,
    level: "Intermediate",
    image: "https://i.ibb.co.com/FqK0jrr2/d1b677430034f12649819aa9f35095b7.jpg",
  },
  {
    id: 3,
    title: "Advanced TypeScript & Design Patterns",
    category: "Development",
    instructor: "Emma Williams",
    duration: "8h 0m",
    students: "950",
    price: "$79",
    rating: 4.7,
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1200",
  },
  {
    id: 4,
    title: "AI & Machine Learning with Python",
    category: "Data",
    instructor: "David Lee",
    duration: "10h 45m",
    students: "1.5k",
    price: "$99",
    rating: 4.6,
    level: "Beginner",
    image: "https://i.ibb.co.com/VW5qW0k9/f47fcf3f692a6e304310157e83a4b3c7.jpg",
  },
  {
    id: 5,
    title: "Cyber Security: Zero to Hero",
    category: "Development",
    instructor: "Marcus Vane",
    duration: "15h 20m",
    students: "2.1k",
    price: "$129",
    rating: 4.9,
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
  },
  {
    id: 6,
    title: "Growth Marketing & SEO Strategy",
    category: "Marketing",
    instructor: "Sarah Jenkins",
    duration: "7h 10m",
    students: "3.4k",
    price: "Free",
    rating: 4.5,
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
  },
];

const categories = [
  "All Courses",
  "Development",
  "Design",
  "Data Science",
  "Marketing",
  "Photography",
];

const Courses = () => {
  return (
    <section className="px-6 md:px-10 lg:px-24 py-20 bg-slate-50 min-h-screen font-sans">
      <div className="mb-16 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
          <span className="w-12 h-1 bg-secondary rounded-full"></span>
          <span className="text-secondary font-bold uppercase text-sm">
            Elevate Your Skills
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          Explore Our <span className="text-primary">Premium</span> Courses
        </h1>
        <p className="text-slate-500 max-w-2xl text-lg">
          Advance your career with industry-leading courses taught by expert
          instructors. Choose your path and start learning today.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* --- MAIN CONTENT --- */}
        <div className="flex-1 order-2 lg:order-1">
          {/* GRID VIEW SECTION */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-10 border-b border-slate-200 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-content text-white rounded-xl shadow-lg shadow-indigo-100">
                  <FiGrid />
                </div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                  Featured Grid
                </h2>
              </div>
              <span className="text-slate-400 text-sm font-medium">
                Grid View Layout
              </span>
            </div>

            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div key={`grid-${course.id}`} className="group flex flex-col">
                  <div className="relative h-56 w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-sm">
                      <FiStar className="text-amber-500 fill-amber-500 text-xs" />
                      <span className="text-xs font-bold text-slate-800">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <div className="mx-4 -mt-10 relative z-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 transition-all duration-300 group-hover:border-indigo-100 group-hover:shadow-indigo-900/5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase text-primary-content/70 bg-indigo-50 px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                      {/* Added Level Field */}
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mt-3 leading-tight group-hover:text-secondary transition-colors">
                      {course.title}
                    </h3>

                    {/* Added Instructor, Duration, and Students Field */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <img
                          src={`https://i.pravatar.cc/150?u=${course.id}`}
                          className="w-5 h-5 rounded-full"
                          alt={course.instructor}
                        />
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase">
                        <span className="flex items-center gap-1">
                          <FiClock className="text-secondary" />{" "}
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiUsers className="text-secondary" />{" "}
                          {course.students}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-xl font-black text-slate-900 italic">
                        {course.price}
                      </span>
                      <button className="h-10 w-10 flex items-center justify-center bg-slate-900 text-white rounded-xl hover:bg-secondary transition-all transform group-hover:rotate-12">
                        <FiArrowRight className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-10 border-b border-slate-200 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-content text-white rounded-xl">
                  <FiList />
                </div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                  Classified List
                </h2>
              </div>
              <span className="text-slate-400 text-sm font-medium">
                Detailed Row Layout
              </span>
            </div>

            <div className="space-y-6">
              {courses.map((course) => (
                <div
                  key={`list-${course.id}`}
                  className="group bg-white rounded-[2.5rem] p-5 border border-slate-200 transition-all hover:shadow-2xl hover:border-indigo-200 flex flex-col md:flex-row gap-8"
                >
                  <div className="md:w-64 h-48 overflow-hidden rounded-2xl relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-secondary/50 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg">
                      {course.level}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-black text-primary-content/70 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded">
                        {course.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm font-bold text-slate-900">
                        <FiStar className="text-amber-500 fill-amber-500" />{" "}
                        {course.rating}
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-primary mb-4 group-hover:text-secondary transition-colors tracking-tight">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 font-bold uppercase tracking-tighter">
                      <span className="flex items-center gap-2">
                        <FiClock className="text-secondary" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiBarChart className="text-secondary" /> {course.level}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiUsers className="text-secondary" /> {course.students}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-900 border-2 border-indigo-100 overflow-hidden shadow-sm">
                          <img
                            src={`https://i.pravatar.cc/150?u=${course.id}`}
                            alt={course.title}
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-700">
                          {course.instructor}
                        </span>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-2xl font-black text-slate-900 italic">
                          {course.price}
                        </span>
                        <button className="px-8 py-3 bg-white text-primary rounded-2xl font-black text-xs hover:bg-primary hover:text-white border border-primary transition-all shadow-lg shadow-indigo-100 uppercase tracking-widest">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- PAGINATION --- */}
          <div className="flex justify-center items-center gap-3 mt-20">
            <button className="h-12 w-12 rounded-2xl bg-primary text-white font-black shadow-lg shadow-indigo-200 transform transition">
              1
            </button>
            <button className="h-12 w-12 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:border-secondary transition-all">
              2
            </button>
            <button className="px-8 py-3 rounded-2xl bg-primary text-white font-black text-xs uppercase transition-all">
              Next Page
            </button>
          </div>
        </div>

        {/* --- SIDEBAR --- */}
        <aside className="w-full lg:w-80 order-1 lg:order-2">
          <div className="sticky top-10 space-y-6">
            {/* Search */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex items-center group focus-within:ring-2 ring-indigo-100 transition-all">
              <div className="p-3 text-slate-400 group-focus-within:text-secondary transition-colors">
                <FiSearch />
              </div>
              <input
                type="text"
                placeholder="Find a course..."
                className="flex-1 bg-transparent py-2 pr-4 outline-none text-sm font-medium"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-8 text-slate-900 font-black text-xs uppercase tracking-[0.2em]">
                <FiFilter className="text-secondary" /> Categories
              </div>
              <ul className="space-y-2">
                {categories.map((cat, i) => (
                  <li key={cat}>
                    <button
                      className={`w-full text-left px-5 py-3.5 rounded-2xl text-sm font-bold transition-all flex items-center justify-between group
                      ${
                        i === 1
                          ? "bg-primary text-white shadow-xl shadow-indigo-100"
                          : "text-slate-500  hover:text-primary"
                      }
                    `}
                    >
                      {cat}
                      <FiChevronRight
                        className={`transition-transform ${
                          i === 1
                            ? "translate-x-0"
                            : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary Promo */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <FiBookOpen className="text-2xl" />
                </div>
                <h4 className="text-xl font-black leading-tight mb-2">
                  Pro Access
                </h4>
                <p className="text-slate-400 text-xs mb-8 leading-relaxed">
                  Get unlimited access to all certifications and private mentor
                  channels.
                </p>
                <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-colors">
                  Upgrade Now
                </button>
              </div>
              <div className="absolute -right-10 -bottom-10 h-40 w-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Courses;
