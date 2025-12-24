import React, { useState } from "react";

const course = {
  title: "Advanced JavaScript",
  category: "Development",
  instructor: "Emma Williams",
  duration: "8h 0m",
  students: 950,
  price: "$79",
  image:
    "https://images.unsplash.com/photo-1581092335682-11808b7c0b17?q=80&w=1200",
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
    <section className="px-4 md:px-10 lg:px-20 py-20 bg-base-100">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Course Header */}
          <div className="flex flex-col lg:flex-row gap-6">
            <img
              src={course.image}
              alt={course.title}
              className="w-full lg:w-1/3 h-60 object-cover rounded-2xl"
            />
            <div className="flex flex-col justify-between">
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="text-gray-500">{course.category}</p>
              <p className="text-gray-700 mt-2">{course.instructor}</p>
              <div className="flex gap-4 mt-2 text-gray-600">
                <span>{course.duration}</span>
                <span>{course.students} Students</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-300">
            {["Overview", "Curriculum", "Instructor", "FAQ", "Reviews"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`py-2 px-4 font-semibold ${
                    tab === "Curriculum"
                      ? "border-b-2 border-primary text-primary"
                      : "text-gray-500 hover:text-primary transition"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Curriculum Accordion */}
          <div className="mt-6 space-y-2">
            {course.curriculum.map((module) => (
              <div
                key={module.id}
                className="bg-base-200 rounded-xl shadow-md overflow-hidden"
              >
                <button
                  className="w-full text-left px-5 py-3 flex justify-between items-center font-semibold hover:bg-base-300 transition"
                  onClick={() => toggleAccordion(module.id)}
                >
                  {module.title}
                  <span>{activeAccordion === module.id ? "-" : "+"}</span>
                </button>
                {activeAccordion === module.id && (
                  <ul className="px-8 py-3 space-y-1">
                    {module.lessons.map((lesson, index) => (
                      <li key={index} className="text-gray-600 text-sm">
                        {lesson}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
          <div className="bg-base-200 rounded-2xl p-6 shadow-md flex flex-col items-center space-y-4">
            <span className="text-gray-500">Price</span>
            <span className="text-3xl font-bold">{course.price}</span>
            <button className="btn btn-primary w-full">Buy / Enroll</button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CourseDetails;
