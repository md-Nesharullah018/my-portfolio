


import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

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
        alert("Success! Your message has been sent.");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 px-4 bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-4 uppercase tracking-tighter">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base">
            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-white/[0.03] backdrop-blur-2xl p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input type="hidden" name="title" value="New Contact Message" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs uppercase text-pink-400 font-bold tracking-widest ml-1">
                  <User size={14} /> Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50 outline-none transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs uppercase text-pink-400 font-bold tracking-widest ml-1">
                  <Mail size={14} /> Email
                </label>
                <input
                  name="from_email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50 outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs uppercase text-pink-400 font-bold tracking-widest ml-1">
                <MessageSquare size={14} /> Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Let's build something amazing..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50 outline-none resize-none transition-all placeholder:text-gray-600"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSending}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-pink-500 to-rose-600 text-white font-extrabold py-5 rounded-2xl shadow-[0_10px_20px_rgba(236,72,153,0.3)] hover:shadow-pink-500/40 transition-all disabled:opacity-50 flex items-center justify-center gap-3 uppercase tracking-[0.2em]"
            >
              {isSending ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;