import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Navigation,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoLight from "@/assets/logo-light.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function SocialLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
}) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      className="group inline-flex items-center gap-2 text-white/90"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-5 w-5 text-white transition-opacity group-hover:opacity-90" />
      <span className="relative">
        {label}
        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white/80 transition-all duration-300 group-hover:w-full" />
      </span>
    </motion.a>
  );
}

const enderecoTexto = "Alameda Salvador, 1057, Ed. Salvador Shopping Business, Torre América – Sala 1516, Caminho das Árvores – Salvador, Ba. CEP 41.820-7910";
const enderecoEncoded = encodeURIComponent(enderecoTexto);
const mapsEmbedSrc = `https://www.google.com/maps?hl=pt-BR&q=${enderecoEncoded}&t=m&z=16&output=embed`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${enderecoEncoded}`;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative text-white overflow-hidden bg-gradient-to-br from-[#111a2b] via-[#15243b] to-[#18233d]">
      {/* brilho sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12 grid gap-12 xl:grid-cols-[1.4fr_1fr_1.4fr] md:grid-cols-[1.2fr_1fr] items-start">
          {/* coluna 1 - Empresa */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-3"
          >
            <img src={logoLight} className="w-44 mb-4" alt="Metro Engenharia" />
            
            <p className="text-white/80 leading-relaxed max-w-lg">
              {t("footer.description")}
            </p>

            <div className="mt-4 space-y-2 text-white/85">
              <div className="font-semibold">{t("footer.address")}</div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-white shrink-0" />
                <address className="not-italic">
                  {enderecoTexto}
                  <div className="mt-2">
                    <a
                      href={mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-white hover:opacity-90 transition-opacity"
                    >
                      <Navigation className="h-4 w-4" />
                      {t("footer.viewMap")}
                    </a>
                  </div>
                </address>
              </div>
            </div>
          </motion.div>

          {/* coluna 2 - Contato + Comercial unificados */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="font-semibold mb-3">{t("footer.contact")}</div>
            <ul className="space-y-2 text-white/85">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-white" />
                <a
                  href="mailto:contato@metroengenharia.com.br"
                  className="hover:underline transition-all"
                >
                  contato@metroengenharia.com.br
                </a>
              </li>
              <li className="text-white/80">Propostas e novas parcerias</li>
            </ul>

            <div className="mt-6">
              <div className="font-semibold mb-3">{t("footer.quickLinks")}</div>
              <ul className="space-y-2 text-white/85">
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="hover:text-white transition-all"
                  >
                    {t("footer.services")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projetos")}
                    className="hover:text-white transition-all"
                  >
                    {t("nav.projects")}
                  </button>
                </li>
                <li>
                  <Link
                    to="/institucional"
                    className="hover:text-white transition-all"
                  >
                    {t("nav.institutional")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="font-semibold mb-3">{t("footer.social")}</div>
              <div className="flex gap-4 flex-wrap">
                <SocialLink href="#" label="LinkedIn" Icon={Linkedin} />
                <SocialLink href="#" label="Instagram" Icon={Instagram} />
              </div>
            </div>
          </motion.div>

          {/* coluna 3 - Mapa */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="xl:col-span-1 md:col-span-2"
          >
            <div className="font-semibold mb-3">Localização</div>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
              <iframe
                title="Mapa - Metro Engenharia"
                src={mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-60 md:h-72"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-black/25"
      >
        <div className="container mx-auto px-4 text-sm py-4 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
          <span className="text-white font-semibold tracking-wide">
            © {new Date().getFullYear()} Metro Engenharia
          </span>
            <span className="text-white/80">
              {t("footer.rights")}
            </span>
        </div>
      </motion.div>
    </footer>
  );
}
