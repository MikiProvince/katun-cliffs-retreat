import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Waves, Mountain, TreePine, Sun } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Первая линия",
    description: "База расположена прямо на берегу легендарной реки Катунь с собственным выходом к воде",
  },
  {
    icon: Mountain,
    title: "Панорамные виды",
    description: "Каждое утро вы просыпаетесь с видом на величественные горы Алтая",
  },
  {
    icon: TreePine,
    title: "Единение с природой",
    description: "Вековые сосны, чистейший горный воздух и пение птиц — ваши постоянные спутники",
  },
  {
    icon: Sun,
    title: "Абсолютная тишина",
    description: "Вдали от суеты города, только шум реки и голоса природы",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-pine text-sm tracking-[0.2em] uppercase font-medium">
            О нашей базе
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Где начинается настоящий отдых
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            «Утес Катуни» — это уникальное место силы на берегу бирюзовой Катуни в самом сердце Чемальского района. 
            Здесь вы найдете идеальный баланс комфорта и первозданной природы Алтая.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sand flex items-center justify-center group-hover:bg-pine transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-pine group-hover:text-cream transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <p className="font-display text-2xl md:text-3xl text-pine italic">
            «Алтай — это место, где душа обретает покой, а время замедляет свой бег»
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};
