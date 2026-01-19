import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Mountain, Sun, Users, Snowflake, Flower2, TreeDeciduous } from "lucide-react";

const seasons = [
  { icon: Snowflake, name: "Зима", description: "Малоснежная и уютная" },
  { icon: Flower2, name: "Весна", description: "Свежая и цветущая" },
  { icon: Sun, name: "Лето", description: "Тёплое и ласковое" },
  { icon: TreeDeciduous, name: "Осень", description: "Яркая и красивая" },
];

export const AdvantagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-b from-sand/50 to-cream relative overflow-hidden" ref={ref}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pine/20 to-transparent" />
      
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-pine rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-pine rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-pine text-sm tracking-[0.2em] uppercase font-medium">
            Почему выбирают нас
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-8">
            Наши преимущества
          </h2>
        </motion.div>

        {/* Main Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-card p-8 md:p-12 lg:p-16 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-pine/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pine" />
                </div>
                <h3 className="font-display text-2xl text-foreground">
                  Красота природы
                </h3>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                К нам приезжают отдыхать гости из разных регионов России, а также из стран зарубежья.
                Что их привлекает здесь? Главное, конечно, это <span className="text-pine font-medium">красота природы</span>.
              </p>

              <blockquote className="border-l-4 border-pine pl-6 py-2 italic text-foreground/80">
                "Мы рады всем, кто любит жизнь и родную природу! Всем, кто приезжает к нам с открытым, 
                добрым сердцем и желанием отдыхать в тёплой дружеской компании!"
              </blockquote>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-pine" />
                </div>
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center">
                  <Users className="w-5 h-5 text-pine" />
                </div>
                <span className="text-sm text-muted-foreground ml-2">
                  Место для тех, кто устал от суеты городов
                </span>
              </div>
            </div>

            {/* Right - Seasons */}
            <div className="bg-sand rounded-xl p-8">
              <h4 className="font-display text-xl text-foreground mb-6 text-center">
                Прелесть всех времён года
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {seasons.map((season, index) => (
                  <motion.div
                    key={season.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-cream rounded-lg p-4 text-center hover-lift"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-pine/10 flex items-center justify-center">
                      <season.icon className="w-6 h-6 text-pine" />
                    </div>
                    <h5 className="font-medium text-foreground mb-1">{season.name}</h5>
                    <p className="text-sm text-muted-foreground">{season.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          <span className="font-display text-2xl text-pine">"</span>
          Утес Катуни — это место для отдыха тех, кто устал от суеты городов и повседневных забот!
          <span className="font-display text-2xl text-pine">"</span>
        </motion.p>
      </div>
    </section>
  );
};
