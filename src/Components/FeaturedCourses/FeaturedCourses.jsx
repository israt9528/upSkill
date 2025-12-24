import React from "react";
import { FiClock, FiUsers } from "react-icons/fi";

const courses = [
  {
    id: 1,
    title: "How Online Learning is Transforming Education",
    category: "Design",
    instructor: "Sarah Johnson",
    duration: "6h 30m",
    students: 1200,
    price: "Free",
    image:
      "https://i.ibb.co.com/sf1Ynyt/How-Online-Learning-is-Transforming-Education.jpg",
  },
  {
    id: 2,
    title: "Top Skills You Need to Succeed in 2026",
    category: "Development",
    instructor: "John Doe",
    duration: "12h 10m",
    students: 2400,
    price: "$49",
    image:
      "https://i.ibb.co.com/wNt7MQPw/Top-Skills-You-Need-to-Succeed-in-2026.jpg",
  },
  {
    id: 3,
    title: "Why Learning React is a Smart Career Move",
    category: "Marketing",
    instructor: "Emily Carter",
    duration: "8h 45m",
    students: 980,
    price: "$29",
    image:
      "https://i.ibb.co.com/n8P4Q2Z8/Why-Learning-React-is-a-Smart-Career-Move.jpg",
  },
  {
    id: 4,
    title: "Design Thinking for Beginners",
    category: "Data Science",
    instructor: "Michael Brown",
    duration: "10h 20m",
    students: 3100,
    price: "$59",
    image: "https://i.ibb.co.com/KccpT9VW/Design-Thinking-for-Beginners.jpg",
  },
  {
    id: 5,
    title: "The Future of Remote Education",
    category: "Photography",
    instructor: "Anna Williams",
    duration: "5h 15m",
    students: 860,
    price: "Free",
    image: "https://i.ibb.co.com/tTX4vh2K/The-Future-of-Remote-Education.jpg",
  },
  {
    id: 6,
    title: "Beginner’s Guide to UI/UX Design",
    category: "Business",
    instructor: "Daniel Smith",
    duration: "7h 40m",
    students: 1450,
    price: "$39",
    image: "https://i.ibb.co.com/WW8P4F81/Beginner-s-Guide-to-UIUX-Design.jpg",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-16 bg-base-100">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Featured Courses</h2>
          <p className="text-gray-500 mt-1">
            Learn from our most popular and trending courses
          </p>
        </div>

        <button className="hidden md:inline-flex btn btn-outline">
          View All
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group rounded-xl bg-base-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Category Tag */}
              <span className="absolute top-3 left-3 badge badge-primary">
                {course.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold leading-snug">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500">
                By <span className="font-medium">{course.instructor}</span>
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <FiClock /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiUsers /> {course.students}
                  </span>
                </div>

                {/* Price */}
                <span
                  className={`font-semibold ${
                    course.price === "Free" ? "text-success" : "text-primary"
                  }`}
                >
                  {course.price}
                </span>
              </div>

              {/* CTA */}
              <button className="btn btn-sm w-full mt-3">View Course</button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-10 flex justify-center md:hidden">
        <button className="btn btn-outline w-full max-w-xs">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default FeaturedCourses;
