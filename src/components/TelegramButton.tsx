import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const TelegramButton = () => {
  return (
    <motion.a
      href="https://t.me/uteskatuni"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0088cc] rounded-full flex items-center justify-center shadow-elevated hover:shadow-card transition-shadow group"
      aria-label="Написать в Telegram"
    >
      <Send className="w-6 h-6 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-cream text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Напишите нам в Telegram!
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#0088cc] animate-ping opacity-30" />
    </motion.a>
  );
};
