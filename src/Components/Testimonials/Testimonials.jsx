import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    text: "This platform transformed my career! The courses are practical and the instructors are amazing.",
    name: "Alice Johnson",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    text: "I learned new skills that helped me land my dream job. Highly recommended for anyone looking to grow!",
    name: "Michael Brown",
    role: "Data Analyst",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    text: "The course content is top-notch, and the platform is very user-friendly. I love the learning experience!",
    name: "Emma Williams",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 4,
    text: "Great variety of courses and excellent instructors. I feel more confident in my career now!",
    name: "David Lee",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 5,
    text: "I can learn at my own pace and the content is very practical. Highly recommend this platform!",
    name: "Sophia Martinez",
    role: "Graphic Designer",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-20 bg-base-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Students Say</h2>
        <p className="text-gray-500 mt-2">
          Real feedback from learners who trusted our platform
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-base-200 p-6 rounded-2xl shadow-md flex flex-col justify-between h-full">
              <p className="text-gray-700 italic mb-6">"{item.text}"</p>
              <div className="flex items-center gap-4">
                {item.avatar && (
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
