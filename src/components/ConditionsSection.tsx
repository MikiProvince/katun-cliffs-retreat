import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  CalendarCheck, 
  Clock, 
  CreditCard, 
  Phone, 
  Baby, 
  Cigarette, 
  Wind,
  Car,
  AlertCircle,
  CheckCircle,
  XCircle
} from "lucide-react";

const bookingConditions = [
  {
    icon: Phone,
    title: "Способы бронирования",
    description: "По телефону или через форму обратной связи",
  },
  {
    icon: CreditCard,
    title: "Подтверждение брони",
    description: "После оплаты первых суток проживания",
  },
  {
    icon: CalendarCheck,
    title: "Отмена бронирования",
    description: "Не позднее чем за 7 дней до заезда",
  },
  {
    icon: Clock,
    title: "Возврат средств",
    description: "В течение 3 рабочих дней",
  },
];

const houseRules = [
  {
    icon: Baby,
    text: "Проживание детей любого возраста",
    allowed: true,
  },
  {
    icon: Car,
    text: "Бесплатная парковка поблизости",
    allowed: true,
  },
  {
    icon: Cigarette,
    text: "Курение в номерах и на балконах",
    allowed: false,
    note: "Есть оборудованное место",
  },
  {
    icon: Wind,
    text: "Кальяны на территории базы",
    allowed: false,
  },
];

export const ConditionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-b from-sand/50 to-cream relative overflow-hidden" ref={ref}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pine/20 to-transparent" />
      
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-graphite rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-pine rounded-full blur-[100px]" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-pine text-sm tracking-[0.2em] uppercase font-medium">
            Важная информация
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Условия и правила
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Conditions Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-card overflow-hidden"
          >
            {/* Header */}
            <div className="bg-pine px-8 py-6">
              <h3 className="font-display text-2xl text-white flex items-center gap-3">
                <CalendarCheck className="w-7 h-7" />
                Условия бронирования
              </h3>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="space-y-6">
                {bookingConditions.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-pine/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-pine" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Check-in/Check-out */}
              <div className="mt-8 pt-6 border-t border-sand">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-sand rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 text-pine mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Заезд</p>
                    <p className="font-display text-xl text-foreground">с 14:00</p>
                  </div>
                  <div className="bg-sand rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 text-pine mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Отъезд</p>
                    <p className="font-display text-xl text-foreground">до 11:00</p>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  Перед оплатой брони уточняйте наличие свободных мест на интересующую вас дату.
                </p>
              </div>
            </div>
          </motion.div>

          {/* House Rules Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-card overflow-hidden"
          >
            {/* Header */}
            <div className="bg-graphite px-8 py-6">
              <h3 className="font-display text-2xl text-white flex items-center gap-3">
                <AlertCircle className="w-7 h-7" />
                Правила проживания
              </h3>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="space-y-4">
                {houseRules.map((rule, index) => (
                  <motion.div
                    key={rule.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      rule.allowed ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      rule.allowed ? "bg-green-100" : "bg-red-100"
                    }`}>
                      <rule.icon className={`w-5 h-5 ${
                        rule.allowed ? "text-green-600" : "text-red-600"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {rule.allowed ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-600" />
                        )}
                        <span className={`font-medium ${
                          rule.allowed ? "text-green-800" : "text-red-800"
                        }`}>
                          {rule.allowed ? "Разрешено" : "Запрещено"}
                        </span>
                      </div>
                      <p className={`text-sm mt-1 ${
                        rule.allowed ? "text-green-700" : "text-red-700"
                      }`}>
                        {rule.text}
                      </p>
                      {rule.note && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {rule.note}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-sand">
                <div className="bg-sand rounded-xl p-6">
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <Baby className="w-5 h-5 text-pine" />
                    Дополнительные места для детей
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>До 3 лет</span>
                      <span className="font-medium text-pine">Бесплатно</span>
                    </li>
                    <li className="flex justify-between">
                      <span>От 3 до 10 лет</span>
                      <span className="font-medium text-foreground">500 ₽</span>
                    </li>
                    <li className="flex justify-between">
                      <span>От 10 лет и старше</span>
                      <span className="font-medium text-foreground">1 000 ₽</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
