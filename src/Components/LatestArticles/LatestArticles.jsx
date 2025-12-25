import React from "react";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const articles = [
  {
    id: 1,
    title: "The Rise of AI in Modern Web Development",
    date: "Dec 20, 2025",
    category: "Technology",
    summary:
      "A deep dive into how Generative AI is reshaping the way we write code and build digital interfaces.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mastering Color Psychology in UI/UX Design",
    date: "Dec 15, 2025",
    category: "Design",
    summary:
      "How to use color theory to influence user behavior and create more accessible digital products.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Scaling Your Career in Distributed Teams",
    date: "Dec 10, 2025",
    category: "Career",
    summary:
      "Actionable strategies for remote professionals looking to move into leadership roles in 2026.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Data Visualization: Telling Stories with Code",
    date: "Dec 05, 2025",
    category: "Data",
    summary:
      "Transforming complex datasets into compelling visual narratives using modern JavaScript libraries.",
    image: "https://i.ibb.co.com/FLfX8xXz/7508e3990857d8ab2c6b83d89bf7eda1.jpg",
  },
];

const LatestArticles = () => {
  return (
    <section className="px-6 md:px-10 lg:px-24 py-26 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-10 bg-primary"></span>
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Knowledge Base
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Latest from <span className="text-primary">UpSkills</span>
          </h2>
        </div>
        <button className="btn btn-ghost hover:bg-primary/5 text-primary border border-primary/20 rounded-2xl group">
          View All Insights
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <article
            key={article.id}
            className="shadow-lg shadow-secondary/20 p-5 rounded-3xl flex flex-col h-full cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-3/2 mb-6 shadow-sm border border-slate-100">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
              <FiCalendar className="text-primary" />
              <span>{article.date}</span>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                {article.summary}
              </p>

              <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link">
                <span className="relative">
                  Read Article
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
                <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
