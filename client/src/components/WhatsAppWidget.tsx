import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import logoImg from "@assets/roanros_logo_1771933628066.png";

const PHONE = "32468259503";

export function WhatsAppWidget() {
  const { language } = useLanguage();
  const nl = language === "nl";
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const defaultMessage = nl
    ? "Hallo, ik heb een vraag over jullie diensten."
    : "Hello, I have a question about your services.";

  const sendMessage = () => {
    const text = encodeURIComponent(message || defaultMessage);
    window.open(`https://wa.me/${PHONE}?text=${text}`, "_blank");
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-[340px] max-w-[calc(100vw-2.5rem)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            <div className="bg-[#075E54] p-4 flex items-center gap-3">
              <img
                src={logoImg}
                alt="Roan Ros"
                className="w-10 h-10 rounded-full object-contain bg-white/10 p-0.5"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm">Roan Ros</p>
                <p className="text-white/70 text-xs">
                  {nl ? "Antwoordt meestal binnen een uur" : "Typically replies within an hour"}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
                data-testid="button-whatsapp-close"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#ECE5DD] dark:bg-neutral-800 p-4 min-h-[100px]">
              <div className="bg-white dark:bg-neutral-700 rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%]">
                <p className="text-sm text-foreground">
                  {nl
                    ? "Hallo! Hoe kan ik u helpen? Stuur ons gerust een bericht."
                    : "Hello! How can I help you? Feel free to send us a message."}
                </p>
                <p className="text-[10px] text-muted-foreground mt-1 text-right">Roan Ros</p>
              </div>
            </div>

            <div className="p-3 flex gap-2 bg-card border-t border-border">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={nl ? "Typ een bericht..." : "Type a message..."}
                data-testid="input-whatsapp-message"
                className="flex-1 px-4 py-2.5 rounded-full bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 focus:border-[#25D366] transition-all"
              />
              <button
                onClick={sendMessage}
                data-testid="button-whatsapp-send"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20BD5A] transition-colors flex-shrink-0"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        data-testid="button-whatsapp-toggle"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="WhatsApp"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
