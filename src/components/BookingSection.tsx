import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon, Users, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { cn } from "@/lib/utils";

export const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    if (checkIn && checkOut && guests) {
      setShowConfirmation(true);
    }
  };

  return (
    <section id="booking" className="section-padding bg-pine relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cream/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-cream/80 text-sm tracking-[0.2em] uppercase font-medium">
            Бронирование
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mt-4 mb-6">
            Забронируйте ваш отдых
          </h2>
          <p className="text-cream/80 text-lg">
            Выберите даты и количество гостей для расчета стоимости
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-cream/10 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-cream/20">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Check-in Date */}
              <div className="md:col-span-1">
                <label className="text-cream/80 text-sm block mb-2">Заезд</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-cream/10 border-cream/30 text-cream hover:bg-cream/20 hover:text-cream",
                        !checkIn && "text-cream/60"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkIn ? format(checkIn, "d MMM", { locale: ru }) : "Выберите"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check-out Date */}
              <div className="md:col-span-1">
                <label className="text-cream/80 text-sm block mb-2">Выезд</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-cream/10 border-cream/30 text-cream hover:bg-cream/20 hover:text-cream",
                        !checkOut && "text-cream/60"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOut ? format(checkOut, "d MMM", { locale: ru }) : "Выберите"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      disabled={(date) => date < (checkIn || new Date())}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guests */}
              <div className="md:col-span-1">
                <label className="text-cream/80 text-sm block mb-2">Гости</label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="bg-cream/10 border-cream/30 text-cream hover:bg-cream/20 [&>span]:text-cream">
                    <Users className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Кол-во" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 гость</SelectItem>
                    <SelectItem value="2">2 гостя</SelectItem>
                    <SelectItem value="3">3 гостя</SelectItem>
                    <SelectItem value="4">4 гостя</SelectItem>
                    <SelectItem value="5">5 гостей</SelectItem>
                    <SelectItem value="6">6+ гостей</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-1 flex items-end">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={!checkIn || !checkOut || !guests}
                >
                  Подобрать номер
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pine/10 flex items-center justify-center">
              <Check className="w-8 h-8 text-pine" />
            </div>
            <DialogTitle className="font-display text-2xl text-center">
              Отлично выбор!
            </DialogTitle>
            <DialogDescription className="text-center text-base mt-4">
              <p className="mb-4">Ваш запрос на бронирование:</p>
              <div className="bg-sand rounded-lg p-4 text-left space-y-2">
                <p><strong>Заезд:</strong> {checkIn && format(checkIn, "d MMMM yyyy", { locale: ru })}</p>
                <p><strong>Выезд:</strong> {checkOut && format(checkOut, "d MMMM yyyy", { locale: ru })}</p>
                <p><strong>Гостей:</strong> {guests}</p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Наш менеджер свяжется с вами в течение 15 минут для подтверждения и подбора номера.
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex gap-3">
            <Button variant="outline" className="flex-1" onClick={() => setShowConfirmation(false)}>
              Изменить
            </Button>
            <Button
              variant="pine"
              className="flex-1"
              onClick={() => {
                const phone = "79139999999";
                const text = `Здравствуйте! Хочу забронировать отдых.\nЗаезд: ${checkIn && format(checkIn, "d.MM.yyyy")}\nВыезд: ${checkOut && format(checkOut, "d.MM.yyyy")}\nГостей: ${guests}`;
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
              }}
            >
              Написать в WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
