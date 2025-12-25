import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri"; // Using react-icons for quotes
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    text: "This platform transformed my career! The courses are practical and the instructors are truly experts in their fields.",
    name: "Alice Johnson",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    text: "I learned new skills that helped me land my dream job. Highly recommended for anyone looking to grow professionally!",
    name: "Michael Brown",
    role: "Data Analyst",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    text: "The content is top-notch and the platform is very user-friendly. I love the interactive learning experience and want to explore more!",
    name: "Emma Williams",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 4,
    text: "Great variety of courses and excellent instructors. I feel more confident in my software engineering career now!",
    name: "David Lee",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 5,
    text: "I can learn at my own pace and the content is very practical. Highly recommend this for hobbyists and pros alike!",
    name: "Sophia Martinez",
    role: "Graphic Designer",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="px-6 md:px-10 lg:px-24 py-20 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-25 -mt-20 w-96 h-96 bg-secondary/5 rounded-full "></div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-px w-8 bg-primary/40"></span>
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Success Stories
          </span>
          <span className="h-px w-8 bg-primary/40"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          What Our <span className="text-secondary">Students</span> Say
        </h2>
        <p className="text-slate-500 mt-6 text-lg">
          Real feedback from 25,000+ learners who have accelerated their careers
          through our industry-leading programs.
        </p>
      </div>

      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className=" h-full bg-secondary/10 border border-slate-100 p-5 md:p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Floating Quote Icon */}
                <RiDoubleQuotesL className="text-6xl text-slate-50 absolute top-6 right-8 group-hover:text-primary/10 transition-colors duration-500" />

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-warning fill-warning text-sm"
                    />
                  ))}
                </div>

                <div className="relative z-10 ">
                  <p className="text-slate-600 italic">"{item.text}"</p>
                </div>

                <div className="w-12 h-1 bg-primary/20 my-4 rounded-full group-hover:w-20 transition-all duration-500"></div>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="relative h-14 w-14 rounded-full object-cover border-2 border-white shadow-md"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm font-medium text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
