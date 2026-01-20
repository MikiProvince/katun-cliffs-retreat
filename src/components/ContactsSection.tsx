import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Адрес",
    content: "Республика Алтай, с. Чемал, ул. Набережная, 35а",
    link: "https://yandex.ru/maps/-/CLhxFW8t",
  },
  {
    icon: Phone,
    title: "Телефон",
    content: "+7 (923) 535-42-45",
    link: "tel:+79235354245",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@uteskatuni.ru",
    link: "mailto:info@uteskatuni.ru",
  },
  {
    icon: Clock,
    title: "Время работы",
    content: "Круглосуточно, заезд с 14:00",
  },
];

export const ContactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacts" className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-pine text-sm tracking-[0.2em] uppercase font-medium">
            Контакты
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Как нас найти
          </h2>
          <p className="text-muted-foreground text-lg">
            Мы находимся в живописном селе Чемал — сердце туристического Алтая
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px] shadow-card"
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c&amp;source=constructor&ll=85.989388%2C51.401854&z=14"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ border: 0 }}
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-pine" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium hover:text-pine transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 pt-8 border-t border-border"
            >
              <p className="text-muted-foreground mb-4">Пишите нам:</p>
              <div className="flex gap-3 mb-6">
                <a
                  href="https://t.me/uteskatuni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-sand hover:bg-pine transition-colors flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-pine group-hover:text-cream transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a
                  href="https://max.ru/u/f9LHodD0cOKA6FnRpOVRTWHXzP4gz5_DqmekhIb4nZs1_6ufogcWRvTdgv4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-sand hover:bg-pine transition-colors flex items-center justify-center group overflow-hidden"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Max_logo_2025.png/120px-Max_logo_2025.png" 
                    alt="Max" 
                    className="w-6 h-6 object-contain"
                  />
                </a>
                <a
                  href="http://wa.me/79235354245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-sand hover:bg-pine transition-colors flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-pine group-hover:text-cream transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
              
              <Button
                variant="pine"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open("http://wa.me/79235354245", "_blank")}
              >
                <MessageCircle className="mr-2" />
                Написать в WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
