import * as React from "react";
import { motion } from "framer-motion";
import { TrainFront, Hospital } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <motion.section
      // flex-shrink-0 impede que o pai "esmague" este componente
      // h-auto no mobile permite que ele cresça conforme o conteúdo empilhado
      className="relative w-full h-auto lg:h-[500px] flex flex-col lg:flex-row flex-shrink-0 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* SECTION 1: ICOM */}
      <motion.div
        layout
        onClick={() => navigate("/projetos")}
        className="
          group
          relative
          /* min-h garante que a altura apareça mesmo sob pressão do flexbox */
          min-h-[300px] md:min-h-[350px] lg:min-h-full
          flex-1
          bg-[#0a0a0a]
          flex items-center justify-center
          overflow-hidden
          px-6 cursor-pointer
        "
        variants={sideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={typeof window !== 'undefined' && window.innerWidth >= 1024 ? {
          flexGrow: 1.4,
          transition: { duration: 0.5 },
        } : {}}
      >
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/ICOM.jpeg"
            className="w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-30"
            alt="Hospital ICOM"
          />
          <video
            src="/hero.mp4"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            autoPlay muted loop playsInline
          />
        </div>

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors pointer-events-none" />

        <motion.div
          className="relative z-10 flex flex-col items-center text-center gap-3"
          variants={contentVariants}
        >
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
            <Hospital className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold leading-tight">
            {t("icom.title")}
          </h3>
          <p className="hidden lg:block text-white/80 text-base max-w-sm">
            {t("icom.subtitle")}
          </p>
        </motion.div>
      </motion.div>

      {/* SECTION 2: VLT */}
      <motion.div
        layout
        onClick={() => navigate("/projetos")}
        className="
          group
          relative
          min-h-[300px] md:min-h-[350px] lg:min-h-full
          flex-1
          bg-[#111]
          flex items-center justify-center
          overflow-hidden
          px-6 cursor-pointer
          border-t lg:border-t-0 lg:border-l border-white/10
        "
        variants={sideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={typeof window !== 'undefined' && window.innerWidth >= 1024 ? {
          flexGrow: 1.4,
          transition: { duration: 0.5 },
        } : {}}
      >
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/vlt.jpg"
            className="w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-30"
            alt="VLT Salvador"
          />
          <video
            src="/hero.mp4"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            autoPlay muted loop playsInline
          />
        </div>

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors pointer-events-none" />

        <motion.div
          className="relative z-10 flex flex-col items-center text-center gap-3"
          variants={contentVariants}
        >
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
            <TrainFront className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold leading-tight">
            {t("vlt.title")}
          </h3>
          <p className="hidden lg:block text-white/80 text-base max-w-sm">
            {t("vlt.subtitle")}
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}