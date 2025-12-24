import React from "react";

const articles = [
  {
    id: 1,
    title: "Top 10 Web Development Trends in 2025",
    date: "Dec 20, 2025",
    summary:
      "A breakdown of the most in-demand skills employers are looking for and how online courses can help you master them.",
    image:
      "https://images.unsplash.com/photo-1581091215360-5857f1025db0?q=80&w=1200",
  },
  {
    id: 2,
    title: "UI/UX Design Tips for Beginners",
    date: "Dec 15, 2025",
    summary:
      "Learn essential UI/UX principles to create beautiful and intuitive digital products.",
    image: "https://i.ibb.co.com/WW8P4F81/Beginner-s-Guide-to-UIUX-Design.jpg",
  },
  {
    id: 3,
    title: "Effective Remote Learning Strategies",
    date: "Dec 10, 2025",
    summary:
      "Maximize your online learning efficiency with these actionable strategies for students and instructors.",
    image: "https://i.ibb.co.com/tTX4vh2K/The-Future-of-Remote-Education.jpg",
  },
  {
    id: 4,
    title: "Building a Career in Data Science",
    date: "Dec 5, 2025",
    summary:
      "A step-by-step guide to start your journey in the booming field of data science.",
    image: "https://i.ibb.co.com/vvjm2BMd/Career-Paths-in-Data-Science.jpg",
  },
];

const LatestArticles = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-20 bg-base-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
        <h2 className="text-3xl font-bold mb-4 sm:mb-0">Latest Articles</h2>
        <button className="btn btn-primary">All Articles</button>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-base-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col h-full"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{article.date}</p>
              <p className="text-gray-600 flex-grow">{article.summary}</p>
              <button className="btn btn-outline mt-4 self-start">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
