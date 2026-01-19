import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Maximize, Wifi, Coffee, Wind, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomDouble1 from "@/assets/room-double-1.jpg";
import roomDouble2 from "@/assets/room-double-2.jpg";

const rooms = [
  {
    id: 1,
    name: "Двуместный номер",
    description: "В номере 1 двуспальная кровать, санузел (душ, туалет, набор саше), Wi-Fi, холодильник и чайник, ТВ. Из номера открывается вид на реку и горы. На террасе возле каждого номера есть стол со стульями.",
    image: roomDouble1,
    images: [roomDouble1, roomDouble2],
    price: 4300,
    capacity: 2,
    size: 12.5,
    amenities: ["Wi-Fi", "Холодильник", "Чайник", "ТВ", "Душ", "Туалетные принадлежности", "Полотенца", "Вид на реку"],
    icons: [Wifi, Eye, Coffee],
  },
  {
    id: 2,
    name: "Семейный номер с балконом",
    description: "Большие панорамные окна, уютная терраса с видом на реку и горы. 2-спальная кровать + диван (доп. место). Wi-Fi, холодильник, чайник, ТВ, фен, гардероб. Санузел с душем. Доп. детское место: до 3 лет — бесплатно, 3-10 лет — 500₽, от 10 лет — 1000₽.",
    image: roomDeluxe,
    price: 5000,
    capacity: 4,
    size: 17,
    amenities: ["Wi-Fi", "Холодильник", "Чайник", "ТВ", "Фен", "Балкон", "Диван", "Душ", "Туалетные принадлежности", "Вид на реку"],
    icons: [Wifi, Eye, Coffee],
  },
  {
    id: 3,
    name: "Люкс",
    description: "Большой балкон с панорамными окнами и мебелью под ротанг. 2-спальная кровать + диван (доп. место). Wi-Fi, ТВ, фен, шкаф. Мини-кухня: холодильник, чайник, микроволновка, мультиварка. Санузел с душем. Доп. детское место: до 3 лет — бесплатно, 3-10 лет — 500₽, от 10 лет — 1000₽.",
    image: roomFamily,
    price: 6000,
    capacity: 4,
    size: 23,
    amenities: ["Wi-Fi", "ТВ", "Фен", "Балкон", "Холодильник", "Микроволновка", "Мультиварка", "Чайник", "Диван", "Душ", "Вид на реку"],
    icons: [Wifi, Eye, Coffee],
  },
];

export const RoomsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);

  return (
    <section id="rooms" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-pine text-sm tracking-[0.2em] uppercase font-medium">
            Размещение
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Выберите ваш идеальный номер
          </h2>
          <p className="text-muted-foreground text-lg">
            Каждый номер оформлен в экостиле с использованием натуральных материалов. 
            Комфорт и гармония с природой в каждой детали.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-cream rounded-lg overflow-hidden shadow-card hover-lift group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>

                {/* Room Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users size={16} />
                    до {room.capacity} гостей
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize size={16} />
                    {room.size} м²
                  </span>
                </div>

                {/* Amenities Icons */}
                <div className="flex gap-2 mb-6">
                  {room.icons.map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-sand flex items-center justify-center"
                    >
                      <Icon size={14} className="text-pine" />
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-display text-pine">
                      {room.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <span className="text-muted-foreground text-sm"> / сутки</span>
                  </div>
                  <Button
                    variant="pine"
                    size="sm"
                    onClick={() => setSelectedRoom(room)}
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Room Detail Modal */}
      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        <DialogContent className="max-w-2xl">
          {selectedRoom && (
            <>
              <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">
                  {selectedRoom.name}
                </DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {selectedRoom.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-6 text-sm">
                  <span className="flex items-center gap-2">
                    <Users size={18} className="text-pine" />
                    До {selectedRoom.capacity} гостей
                  </span>
                  <span className="flex items-center gap-2">
                    <Maximize size={18} className="text-pine" />
                    {selectedRoom.size} м²
                  </span>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Удобства:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {selectedRoom.amenities.map((amenity) => (
                      <li
                        key={amenity}
                        className="px-3 py-1 bg-sand rounded-full text-sm text-pine"
                      >
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-display text-pine">
                      {selectedRoom.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <span className="text-muted-foreground"> / сутки</span>
                  </div>
                  <Button
                    variant="pine"
                    size="lg"
                    onClick={() => {
                      setSelectedRoom(null);
                      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Забронировать
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
