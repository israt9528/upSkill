import React from "react";
import { FiClock, FiUsers, FiArrowRight, FiStar } from "react-icons/fi";

const courses = [
  {
    id: 1,
    title: "Generative AI: Prompt Engineering Masterclass",
    category: "AI & Data",
    instructor: "Sarah Johnson",
    duration: "6h 30m",
    students: "4.2k",
    price: "Free",
    rating: 4.9,
    image:
      "https://i.ibb.co.com/sf1Ynyt/How-Online-Learning-is-Transforming-Education.jpg",
  },
  {
    id: 2,
    title: "Full-Stack Next.js 15 & PostgreSQL Development",
    category: "Development",
    instructor: "John Doe",
    duration: "18h 10m",
    students: "12.4k",
    price: "$49",
    rating: 4.9,
    image:
      "https://i.ibb.co.com/wNt7MQPw/Top-Skills-You-Need-to-Succeed-in-2026.jpg",
  },
  {
    id: 3,
    title: "Growth Marketing & Data-Driven Analytics",
    category: "Marketing",
    instructor: "Emily Carter",
    duration: "8h 45m",
    students: "2.8k",
    price: "$29",
    rating: 4.7,
    image:
      "https://i.ibb.co.com/n8P4Q2Z8/Why-Learning-React-is-a-Smart-Career-Move.jpg",
  },
  {
    id: 4,
    title: "Product Design Systems: Figma to Production",
    category: "Design",
    instructor: "Michael Brown",
    duration: "10h 20m",
    students: "3.1k",
    price: "$59",
    rating: 4.5,
    image: "https://i.ibb.co.com/KccpT9VW/Design-Thinking-for-Beginners.jpg",
  },
  {
    id: 5,
    title: "Professional Photography: Mastering Light & Edit",
    category: "Photography",
    instructor: "Anna Williams",
    duration: "5h 15m",
    students: "1.6k",
    price: "Free",
    rating: 4.6,
    image: "https://i.ibb.co.com/tTX4vh2K/The-Future-of-Remote-Education.jpg",
  },
  {
    id: 6,
    title: "Business Strategy for Modern Entrepreneurs",
    category: "Business",
    instructor: "Daniel Smith",
    duration: "7h 40m",
    students: "5.4k",
    price: "$39",
    rating: 4.9,
    image: "https://i.ibb.co.com/WW8P4F81/Beginner-s-Guide-to-UIUX-Design.jpg",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-10 bg-base-100">
      <div className="mb-14 flex flex-col md:flex-row items-end justify-between gap-6">
        <div className="max-w-xl text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-base-content">
            <span className="text-primary">Featured</span> Courses
          </h2>
          <p className="text-base-content/60 mt-4 text-lg">
            Master the most in-demand skills for 2026 with our hand-picked,
            industry-expert-led programs.
          </p>
        </div>

        <button className="hidden md:flex btn btn-ghost text-primary border border-primary/20 hover:bg-primary hover:text-white rounded-2xl transition-all duration-300 group">
          View All Courses
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group flex flex-col rounded-3xl bg-base-100 border border-secondary/30 shadow-secondary/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:border-primary/40"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60"></div>

              <span className="absolute top-4 left-4 backdrop-blur-md bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/30">
                {course.category}
              </span>

              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-1 shadow-lg border border-white">
                <FiStar className="text-warning fill-warning text-sm" />
                <span className="text-xs font-bold text-slate-800">
                  {course.rating}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col">
              <div className="">
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 min-h-14">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm text-base-content/60 flex items-center gap-2">
                  by{" "}
                  <span className="text-base-content font-semibold hover:underline cursor-pointer decoration-primary underline-offset-4">
                    {course.instructor}
                  </span>
                </p>
              </div>

              <div className="my-5 border-t border-dashed border-base-300"></div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-medium text-base-content/60">
                  <span className="flex items-center gap-1.5">
                    <FiClock className="text-primary text-lg" />{" "}
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiUsers className="text-primary text-lg" />{" "}
                    {course.students}
                  </span>
                </div>

                <div className="text-2xl font-black text-primary italic">
                  {course.price}
                </div>
              </div>

              <button className="mt-6 btn btn-primary btn-md w-full rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 text-white border-none text-base font-bold">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center md:hidden">
        <button className="btn btn-outline border-primary text-primary w-full rounded-2xl h-14">
          Browse All Courses
        </button>
      </div>
    </section>
  );
};

export default FeaturedCourses;
