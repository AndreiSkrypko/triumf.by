import { useState } from "react";
import { useRouter } from "@tanstack/react-router";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to Telegram bot when token is provided
    console.log("Form data:", formData);
    onClose();
    router.navigate({ to: "/thank-you" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setFormData({ name: "", phone: "", message: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/90 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-navy border border-gold/30 rounded-sm max-w-md w-full p-8 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-navy-foreground/60 hover:text-gold transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h3 className="font-display text-2xl font-bold uppercase text-gold mb-2">Оставить заявку</h3>
        <p className="text-navy-foreground/60 mb-6 text-sm">Заполните форму и мы свяжемся с вами</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy-foreground/80 mb-2">
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-navy-foreground/5 border border-navy-foreground/20 rounded-sm text-navy-foreground placeholder:text-navy-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition"
              placeholder="Ваше имя"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-navy-foreground/80 mb-2">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-navy-foreground/5 border border-navy-foreground/20 rounded-sm text-navy-foreground placeholder:text-navy-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition"
              placeholder="+375 (XX) XXX-XX-XX"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy-foreground/80 mb-2">
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-navy-foreground/5 border border-navy-foreground/20 rounded-sm text-navy-foreground placeholder:text-navy-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition resize-none"
              placeholder="Опишите вашу задачу..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gold px-6 py-3 font-semibold uppercase tracking-wider text-navy rounded-sm transition hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
