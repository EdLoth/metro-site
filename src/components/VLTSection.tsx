import * as React from "react";
import { useState } from "react"; // Adicionado useState
import { motion } from "framer-motion";
import { TrainFront, Hospital, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import allProjects from "@/projects";

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

// --- FUNÇÕES AUXILIARES DO CLOUDINARY ---
const getTinyUrl = (url: string) => {
  if (!url) return "";
  // Injeta transformações: largura 50px, blur máximo, qualidade 1%
  return url.replace("/upload/", "/upload/w_50,e_blur:1000,q_1,f_auto/");
};

const getFullUrl = (url: string) => {
  if (!url) return "";
  // Injeta transformações: formato e qualidade automáticos
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
};

export default function FullProjectSections() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const sectionConfig = [
    {
      id: "prj_icom_01",
      icon: Hospital,
      titleKey: "icom.title",
      subtitleKey: "icom.subtitle",
    },
    {
      id: "prj_vlt_03",
      icon: TrainFront,
      titleKey: "vlt.title",
      subtitleKey: "vlt.subtitle",
    },
    {
      id: "prj_centro_conv_02",
      icon: Landmark,
      titleKey: "cc.title",
      subtitleKey: "cc.subtitle",
    },
  ];

  return (
    <motion.section
      className="relative w-full h-auto lg:h-[500px] flex flex-col lg:flex-row flex-shrink-0 overflow-hidden bg-[#0a0a0a]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {sectionConfig.map((config, index) => {
        const projectData = allProjects.find((p) => p.id === config.id);
        const rawMainImage = projectData?.imagens?.[0] || "";
        const rawHoverImage = projectData?.imagens?.[1] || rawMainImage;

        return (
          <ProjectCard
            key={config.id}
            config={config}
            index={index}
            mainImage={rawMainImage}
            hoverImage={rawHoverImage}
            navigate={navigate}
            t={t}
          />
        );
      })}
    </motion.section>
  );
}

// --- SUB-COMPONENTE PARA GERENCIAR O LOADING DE CADA CARD ---
// Separei isso para que cada card tenha seu próprio estado de carregamento
function ProjectCard({ config, index, mainImage, hoverImage, navigate, t }: any) {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => navigate(`/projeto/${config.id}`)}
      className={`
        group
        relative
        min-h-[300px] md:min-h-[350px] lg:min-h-full
        flex-1
        bg-[#0a0a0a]
        flex items-center justify-center
        overflow-hidden
        px-6 cursor-pointer
        ${index !== 0 ? "border-t lg:border-t-0 lg:border-l border-white/10" : ""}
      `}
      variants={sideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={
        typeof window !== "undefined" && window.innerWidth >= 1024
          ? {
              flexGrow: 1.4,
              transition: { duration: 0.5 },
            }
          : {}
      }
    >
      {/* CAMADA DE IMAGENS */}
      <div className="absolute inset-0 pointer-events-none bg-[#111]"> 
        
        {/* === IMAGEM 1 (PADRÃO) === */}
        {/* Camada Blur (Aparece na hora) */}
        <img
          src={getTinyUrl(mainImage)}
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-0"
          alt=""
          aria-hidden="true"
        />
        {/* Camada HD (Carrega por cima) */}
        <img
          src={getFullUrl(mainImage)}
          onLoad={() => setImg1Loaded(true)}
          className={`
            absolute inset-0 w-full h-full object-cover 
            transition-opacity duration-700 
            group-hover:opacity-0
            ${img1Loaded ? "opacity-60" : "opacity-0"} 
          `}
          alt={config.id}
        />

        {/* === IMAGEM 2 (HOVER) === */}
        {/* Camada Blur (Aparece na hora) */}
        <img
          src={getTinyUrl(hoverImage)}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-60 scale-110 group-hover:scale-100"
          alt=""
          aria-hidden="true"
        />
        {/* Camada HD (Carrega por cima) */}
        <img
          src={getFullUrl(hoverImage)}
          onLoad={() => setImg2Loaded(true)}
          className={`
            absolute inset-0 w-full h-full object-cover 
            transition-opacity duration-700 
            scale-110 group-hover:scale-100
            ${img2Loaded ? "group-hover:opacity-60" : "opacity-0"}
          `}
          // Nota: a lógica do hover da imagem 2 HD precisa ser:
          // Se carregou -> aplica group-hover:opacity-60
          // Se não carregou -> fica opacity-0 sempre
          alt={`${config.id} hover`}
        />
      </div>

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-3"
        variants={contentVariants}
      >
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-colors">
          <config.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold leading-tight">
          {t(config.titleKey)}
        </h3>
        <p className="hidden lg:block text-white/80 text-base max-w-sm">
          {t(config.subtitleKey)}
        </p>
      </motion.div>
    </motion.div>
  );
}