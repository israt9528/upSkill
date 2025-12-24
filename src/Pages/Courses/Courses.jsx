import React from "react";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    category: "Development",
    instructor: "Alice Johnson",
    duration: "5h 30m",
    students: 1200,
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1581091215360-5857f1025db0?q=80&w=1200",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    instructor: "Michael Brown",
    duration: "6h 15m",
    students: 850,
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200",
  },
  {
    id: 3,
    title: "Advanced JavaScript",
    category: "Development",
    instructor: "Emma Williams",
    duration: "8h 0m",
    students: 950,
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1581092335682-11808b7c0b17?q=80&w=1200",
  },
  {
    id: 4,
    title: "Data Science Bootcamp",
    category: "Data",
    instructor: "David Lee",
    duration: "10h 45m",
    students: 1500,
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
  },
];

const categories = [
  "All",
  "Development",
  "Design",
  "Data",
  "Marketing",
  "Photography",
];

const CoursesPage = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-20 bg-base-100">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Courses Grid/List */}
        <div className="flex-1 space-y-8">
          {/* Grid view */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Courses Grid</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-base-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col h-full"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-sm text-primary font-semibold">
                      {course.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      {course.instructor}
                    </p>
                    <div className="flex justify-between items-center text-gray-600 text-sm mb-3">
                      <span>{course.duration}</span>
                      <span>{course.students} Students</span>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="font-semibold">{course.price}</span>
                      <button className="btn btn-outline btn-sm">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* List view */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Courses List</h2>
            <div className="space-y-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-base-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-40 sm:h-auto sm:w-48 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-sm text-primary font-semibold">
                      {course.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      {course.instructor}
                    </p>
                    <div className="flex justify-between items-center text-gray-600 text-sm mb-3">
                      <span>{course.duration}</span>
                      <span>{course.students} Students</span>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="font-semibold">{course.price}</span>
                      <button className="btn btn-outline btn-sm">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            <button className="btn btn-sm btn-outline">1</button>
            <button className="btn btn-sm btn-outline">2</button>
            <button className="btn btn-sm btn-outline">3</button>
            <span className="px-3 py-1 rounded-lg bg-base-300">...</span>
            <button className="btn btn-sm btn-outline">Next</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
          <div className="bg-base-200 rounded-2xl p-5 shadow-md">
            <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/20 transition">
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-base-200 rounded-2xl p-5 shadow-md">
            <h3 className="text-lg font-semibold mb-4">Other Filters</h3>
            <p className="text-gray-500 text-sm">
              Placeholder for additional filters (difficulty, price, etc.)
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CoursesPage;
