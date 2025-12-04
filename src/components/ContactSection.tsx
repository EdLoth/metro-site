import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";

export default function ContactSection() {
  const [tipo, setTipo] = useState<"contato" | "trabalhe">("contato");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contato">
      <div className="relative grid lg:grid-cols-[1.35fr_1fr] gap-0 overflow-hidden shadow-xl  bg-zinc-900/70 backdrop-blur-sm">
        {/* painel esquerdo com vídeo/parallax */}
        <div className="relative h-[420px] lg:h-auto overflow-hidden">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/30 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white space-y-2 w-full max-w-[32rem]">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl font-bold w-full max-w-[32rem] [text-wrap:balance]"
            >
              Conecte-se à Metro Engenharia
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-md text-white/80 leading-relaxed w-full max-w-[32rem] [text-wrap:pretty]"
            >
              Seja cliente ou futuro colaborador — compartilhe conosco sua
              visão.
            </motion.p>
          </div>
        </div>

        {/* painel direito: formulário */}
        <div className="p-8 sm:p-10 bg-primary text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-between mb-6"
          >
            <div className="font-semibold text-lg">Formulário</div>
            <div className="flex gap-2 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tipo"
                  value="contato"
                  checked={tipo === "contato"}
                  onChange={() => setTipo("contato")}
                  className="accent-primary cursor-pointer"
                />
                Captação de Clientes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tipo"
                  value="trabalhe"
                  checked={tipo === "trabalhe"}
                  onChange={() => setTipo("trabalhe")}
                  className="accent-primary cursor-pointer"
                />
                Trabalhe Conosco
              </label>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            className="grid gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <input
              required
              placeholder="Nome completo"
              className="border rounded-2xl px-4 py-3 bg-white/10 text-white placeholder:text-white/70 focus:border-primary outline-none"
            />
            <input
              required
              type="email"
              placeholder="Seu email"
              className="border rounded-2xl px-4 py-3 bg-white/10 text-white placeholder:text-white/70 focus:border-primary outline-none"
            />

            {tipo === "contato" && (
              <>
                <input
                  placeholder="Telefone/WhatsApp"
                  className="border rounded-2xl px-4 py-3 bg-white/10 text-white placeholder:text-white/70 focus:border-primary outline-none"
                />
                <textarea
                  required
                  placeholder="Como podemos ajudar?"
                  rows={5}
                  className="border rounded-2xl px-4 py-3 bg-white/10 text-white placeholder:text-white/70 focus:border-primary outline-none"
                ></textarea>
              </>
            )}

            {tipo === "trabalhe" && (
              <>
                <input
                  placeholder="LinkedIn"
                  className="border rounded-2xl px-4 py-3 bg-white/10 text-white placeholder:text-white/70 focus:border-primary outline-none"
                />
                <input
                  type="url"
                  placeholder="Portfólio (opcional)"
                  className="border rounded-2xl px-4 py-3 bg-white/10 text-white placeholder:text-white/70 focus:border-primary outline-none"
                />
                <textarea
                  placeholder="Conte-nos sobre você"
                  rows={4}
                  className="border rounded-2xl px-4 py-3 bg-white/10 text-white placeholder:text-white/70 focus:border-primary outline-none"
                />
              </>
            )}

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary mt-2 bg-white hover:bg-gray-100 text-primary font-medium rounded-2xl py-3"
            >
              {tipo === "contato" ? "Enviar mensagem" : "Enviar currículo"}
            </motion.button>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-300 mt-1"
              >
                {tipo === "contato"
                  ? "Obrigado! Entraremos em contato em breve."
                  : "Recebemos seus dados! Obrigado pelo interesse."}
              </motion.div>
            )}
          </motion.form>

          {/* informações de contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 border-t border-white/10 pt-4 text-sm space-y-2 text-white/80"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Alameda Salvador, 1057 – Torre
              América, Salvador
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> (71) 3333-0000
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> contato@metroengenharia.com
            </div>

            <div className="mt-3 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-pink-400 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-400 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-pink-400 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
