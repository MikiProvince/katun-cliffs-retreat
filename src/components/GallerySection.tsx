import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImage from "@/assets/hero-katun.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";

const galleryImages = [
  { src: gallery1, alt: "Терраса с видом на реку", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Утренний чай с видом на горы", span: "col-span-1 row-span-1" },
  { src: gallery4, alt: "Закат над долиной", span: "col-span-1 row-span-2" },
  { src: gallery3, alt: "Каякинг на Катуни", span: "col-span-1 row-span-1" },
  { src: heroImage, alt: "Река Катунь", span: "col-span-1 row-span-1" },
  { src: roomDeluxe, alt: "Интерьер номера", span: "col-span-1 row-span-1" },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-pine text-sm tracking-[0.2em] uppercase font-medium">
            Галерея
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Моменты вашего отдыха
          </h2>
          <p className="text-muted-foreground text-lg">
            Каждый уголок нашей базы — это возможность для незабываемого впечатления
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative overflow-hidden rounded-lg cursor-pointer group`}
              onClick={() => setLightboxImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pine/0 group-hover:bg-pine/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-sand transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};
