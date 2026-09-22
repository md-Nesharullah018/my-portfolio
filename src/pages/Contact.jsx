import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  ArrowUpRight,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
  XCircle,
  X,
} from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  // Toast state
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const showToast = (type, message) => {
    setToast({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setToast({
        show: false,
        type: "",
        message: "",
      });
    }, 3500);
  };

  const closeToast = () => {
    setToast({
      show: false,
      type: "",
      message: "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_mneshar_18",
        "template_jszsgm4",
        form.current,
        "sIX6pj9kdx1QjUdBH"
      )
      .then(() => {
        form.current.reset();

        showToast(
          "success",
          "Message sent successfully! I'll get back to you soon."
        );
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        showToast(
          "error",
          "Failed to send message. Please try again."
        );
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section className="relative min-h-screen bg-black text-white px-5 md:px-10 lg:px-16 py-28 overflow-hidden">

      {/* =====================================================
          TOAST
      ===================================================== */}

      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -30, x: 30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 right-5 md:right-8 z-[9999] w-[calc(100%-40px)] sm:w-[380px]"
          >
            <div
              className={`relative flex items-start gap-3 p-4 rounded-2xl backdrop-blur-xl border shadow-2xl ${
                toast.type === "success"
                  ? "bg-cyan-950/80 border-cyan-400/30"
                  : "bg-red-950/80 border-red-400/30"
              }`}
            >

              {toast.type === "success" ? (
                <CheckCircle
                  size={22}
                  className="text-cyan-400 mt-0.5 shrink-0"
                />
              ) : (
                <XCircle
                  size={22}
                  className="text-red-400 mt-0.5 shrink-0"
                />
              )}

              <div className="flex-1">

                <p
                  className={`text-sm font-semibold ${
                    toast.type === "success"
                      ? "text-cyan-300"
                      : "text-red-300"
                  }`}
                >
                  {toast.type === "success"
                    ? "Message Sent"
                    : "Something went wrong"}
                </p>

                <p className="text-xs text-gray-400 mt-1 leading-5">
                  {toast.message}
                </p>

              </div>

              <button
                onClick={closeToast}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />


      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500 blur-[160px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-32 w-[550px] h-[550px] bg-blue-600 blur-[170px] rounded-full pointer-events-none"
      />


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >

          <div className="flex items-center gap-4 mb-5">

            <span className="text-cyan-400 text-xs font-mono tracking-[0.3em]">
              06
            </span>

            <div className="w-12 h-px bg-cyan-400/50" />

            <span className="text-gray-500 text-xs uppercase tracking-[0.3em]">
              Contact
            </span>

          </div>


          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]">

            LET'S

            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              CONNECT.
            </span>

          </h2>

        </motion.div>


        {/* =====================================================
            CONTACT GRID
        ===================================================== */}

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">


          {/* ===================================================
              LEFT SIDE
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >

            <div>

              <p className="text-gray-400 text-sm md:text-base leading-7 max-w-sm">
                I am currently looking for opportunities where I can
                contribute my development skills, learn from experienced
                teams, and grow as a software developer.
              </p>


              {/* Availability */}

              <div className="mt-10 p-5 rounded-2xl border border-white/10 bg-white/[0.03]">

                <div className="flex items-center gap-3 mb-3">

                  <span className="relative flex h-3 w-3">

                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />

                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />

                  </span>

                  <span className="text-sm font-medium">
                    Open to opportunities
                  </span>

                </div>

                <p className="text-xs text-gray-500 leading-5">
                  Looking for Full Stack, Frontend and Backend development
                  opportunities.
                </p>

              </div>


              {/* Contact Details */}

              <div className="mt-8 space-y-5">

                {/* Email */}

                <a
                  href="mailto:mneshar018@gmail.com"
                  className="group flex items-center gap-4"
                >

                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-cyan-400/40 group-hover:bg-cyan-400/5 transition-all">

                    <Mail
                      size={18}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">
                      Email
                    </p>

                    <p className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                      mneshar018@gmail.com
                    </p>

                  </div>

                </a>


                {/* Location */}

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">

                    <MapPin
                      size={18}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">
                      Location
                    </p>

                    <p className="text-sm text-gray-300">
                      Delhi NCR
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* Social Links */}

            <div className="mt-12">

              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-4">
                Find me online
              </p>

              <div className="flex gap-3">

                {/* GitHub */}

                <a
                  href="https://github.com/md-Nesharullah018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                >
                  <Github size={18} />
                </a>


                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/md-neshar-874516292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                >
                  <Linkedin size={18} />
                </a>

              </div>

            </div>

          </motion.div>


          {/* ===================================================
              RIGHT SIDE FORM
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl p-6 md:p-10">

              {/* Top decoration */}

              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />


              <div className="mb-8">

                <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
                  Get in touch
                </p>

                <h3 className="text-2xl md:text-3xl font-bold">
                  Interested in working together?
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Feel free to reach out regarding job opportunities,
                  collaborations, or professional discussions.
                </p>

              </div>


              {/* Form */}

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
              >

                <input
                  type="hidden"
                  name="title"
                  value="New Contact Message"
                />


                {/* Name + Email */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* Name */}

                  <div className="space-y-2">

                    <label className="flex items-center gap-2 text-[10px] uppercase text-gray-500 font-semibold tracking-[0.2em]">

                      <User size={13} />

                      Name

                    </label>

                    <input
                      name="from_name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/60 focus:bg-cyan-400/[0.02] transition-all"
                    />

                  </div>


                  {/* Email */}

                  <div className="space-y-2">

                    <label className="flex items-center gap-2 text-[10px] uppercase text-gray-500 font-semibold tracking-[0.2em]">

                      <Mail size={13} />

                      Email

                    </label>

                    <input
                      name="from_email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/60 focus:bg-cyan-400/[0.02] transition-all"
                    />

                  </div>

                </div>


                {/* Message */}

                <div className="space-y-2">

                  <label className="flex items-center gap-2 text-[10px] uppercase text-gray-500 font-semibold tracking-[0.2em]">

                    <MessageSquare size={13} />

                    Message

                  </label>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="I would like to discuss a job opportunity..."
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none resize-none placeholder:text-gray-700 focus:border-cyan-400/60 focus:bg-cyan-400/[0.02] transition-all"
                  />

                </div>


                {/* Submit */}

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSending}
                  className="group w-full relative overflow-hidden bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-4 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 text-sm"
                >

                  {isSending ? (
                    <span className="animate-pulse">
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>
                        Send Message
                      </span>

                      <Send
                        size={17}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}

                </motion.button>

              </form>

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3"
        >

          <p className="text-gray-600 text-xs">
            Available for professional opportunities
          </p>

          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">

            <span>LET'S CONNECT</span>

            <ArrowUpRight size={14} />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;