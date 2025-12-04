import * as React from "react";
import { motion } from "framer-motion";
import { TrainFront, Hospital } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const sideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 },
  },
};

export default function FullProjectSections() {
  const { t } = useLanguage();

  return (
    <motion.section
      className="relative w-full h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex w-full h-full relative">

        {/* LEFT */}
        <motion.div
          layout
          className="
            group
            relative
            h-full flex-1
            bg-gradient-to-br from-[#0a0a0a] to-[#1b1b1b]
            flex items-center justify-center
            overflow-hidden
            px-10 cursor-pointer
          "
          variants={sideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            flexGrow: 1.6,
            scale: 1.02,
            transition: { duration: 0.5 },
          }}
        >
          <div className="absolute inset-0">
            <div className="relative w-full h-full">

              {/* Imagem */}
              <img
                src="/ICOM.jpeg"
                className="
                  w-full h-full object-cover
                  opacity-70
                  transition-opacity duration-300
                  group-hover:opacity-0
                "
              />

              {/* VÍDEO — AGORA FUNCIONANDO */}
              <video
                src="/hero.mp4"
                className="
                  absolute inset-0 w-full h-full object-cover
                  opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-black/40" />

          <motion.div
            className="relative z-10 flex flex-col items-center text-center max-w-lg"
            variants={contentVariants}
          >
            <Hospital className="h-12 w-12 text-white mb-4" />
            <h3 className="text-3xl md:text-4xl text-white font-bold">
              {t("icom.title")}
            </h3>
            <p className="text-white/80 mt-3">{t("icom.subtitle")}</p>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          layout
          className="
            group
            relative
            h-full flex-1
            bg-gradient-to-br from-primary to-primary/70
            flex items-center justify-center
            overflow-hidden
            px-10 cursor-pointer
          "
          variants={sideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            flexGrow: 1.6,
            scale: 1.02,
            transition: { duration: 0.5 },
          }}
        >
          <div className="absolute inset-0">
            <div className="relative w-full h-full">

              <img
                src="/vlt.jpg"
                className="
                  w-full h-full object-cover
                  opacity-70
                  transition-opacity duration-300
                  group-hover:opacity-0
                "
              />

              <video
                src="/hero.mp4"
                className="
                  absolute inset-0 w-full h-full object-cover
                  opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-black/35" />

          <motion.div
            className="relative z-10 flex flex-col items-center text-center max-w-lg"
            variants={contentVariants}
          >
            <TrainFront className="h-12 w-12 text-white mb-4" />
            <h3 className="text-3xl md:text-4xl text-white font-bold">
              {t("vlt.title")}
            </h3>
            <p className="text-white/80 mt-3">{t("vlt.subtitle")}</p>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}
