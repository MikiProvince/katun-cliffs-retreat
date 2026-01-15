import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Анна Михайлова",
    location: "Москва",
    text: "Невероятное место! Просыпаться с видом на бирюзовую Катунь — это то, ради чего стоит ехать на Алтай. Персонал очень заботливый, а тишина — просто целебная.",
    rating: 5,
  },
  {
    id: 2,
    name: "Дмитрий Соколов",
    location: "Новосибирск",
    text: "Отдыхали семьёй в шале — дети были в восторге! Природа, чистый воздух, река прямо у порога. Обязательно вернёмся ещё раз.",
    rating: 5,
  },
  {
    id: 3,
    name: "Елена Петрова",
    location: "Санкт-Петербург",
    text: "Идеальное место для перезагрузки. Минимализм, уют и потрясающие виды. Особенно понравились завтраки с видом на горы. Рекомендую всем!",
    rating: 5,
  },
  {
    id: 4,
    name: "Алексей Волков",
    location: "Барнаул",
    text: "Бываю здесь каждый год — это моё место силы. Катунь, сосны, горы — идеальное сочетание. База постоянно развивается и становится только лучше.",
    rating: 5,
  },
];

export const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="section-padding bg-sand" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-pine text-sm tracking-[0.2em] uppercase font-medium">
            Отзывы гостей
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Что говорят наши гости
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Review Card */}
          <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-card relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-pine/10" />
            
            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                  "{reviews[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pine flex items-center justify-center">
                    <span className="text-cream font-display text-lg">
                      {reviews[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {reviews[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {reviews[currentIndex].location}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full bg-cream shadow-soft flex items-center justify-center text-pine hover:bg-pine hover:text-cream transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-pine w-8" : "bg-pine/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full bg-cream shadow-soft flex items-center justify-center text-pine hover:bg-pine hover:text-cream transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
