import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Maximize, Wifi, Coffee, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomDouble1 from "@/assets/room-double-1.jpg";
import roomDouble2 from "@/assets/room-double-2.jpg";
import roomFamily1 from "@/assets/room-family-1.jpg";
import roomFamily2 from "@/assets/room-family-2.jpg";

const rooms = [
  {
    id: 1,
    name: "Двуместный номер",
    description: "В номере 1 двуспальная кровать, санузел (душ, туалет, набор саше), Wi-Fi, холодильник и чайник, ТВ. Из номера открывается вид на реку и горы. На террасе возле каждого номера есть стол со стульями.",
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
    images: [roomFamily1, roomFamily2],
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
    images: [roomFamily, roomDeluxe],
    price: 6000,
    capacity: 4,
    size: 23,
    amenities: ["Wi-Fi", "ТВ", "Фен", "Балкон", "Холодильник", "Микроволновка", "Мультиварка", "Чайник", "Диван", "Душ", "Вид на реку"],
    icons: [Wifi, Eye, Coffee],
  },
];

// Room Image Carousel Component
const RoomImageCarousel = ({ 
  images, 
  name, 
  className = "" 
}: { 
  images: string[]; 
  name: string; 
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={images[currentIndex]}
        alt={`${name} - фото ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />
      
      {images.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft size={18} className="text-foreground" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100"
            aria-label="Следующее фото"
          >
            <ChevronRight size={18} className="text-foreground" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-white w-4" 
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const RoomsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const openRoom = (room: typeof rooms[0]) => {
    setSelectedRoom(room);
    setModalImageIndex(0);
  };

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
              {/* Image Carousel */}
              <RoomImageCarousel 
                images={room.images} 
                name={room.name} 
                className="h-64"
              />

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
                    onClick={() => openRoom(room)}
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
              {/* Modal Image Carousel */}
              <div className="relative h-72 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg group">
                <img
                  src={selectedRoom.images[modalImageIndex]}
                  alt={`${selectedRoom.name} - фото ${modalImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {selectedRoom.images.length > 1 && (
                  <>
                    {/* Navigation Buttons */}
                    <button
                      onClick={() => setModalImageIndex((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
                      aria-label="Предыдущее фото"
                    >
                      <ChevronLeft size={20} className="text-foreground" />
                    </button>
                    <button
                      onClick={() => setModalImageIndex((prev) => (prev + 1) % selectedRoom.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
                      aria-label="Следующее фото"
                    >
                      <ChevronRight size={20} className="text-foreground" />
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedRoom.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setModalImageIndex(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            index === modalImageIndex 
                              ? "bg-white w-5" 
                              : "bg-white/60 hover:bg-white/80"
                          }`}
                          aria-label={`Перейти к фото ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
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