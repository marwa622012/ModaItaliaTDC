import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "201286693375";
const MESSAGE = "Hello Moda Italia TDC, I'd like to know more about your services.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Moda Italia TDC on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] print:hidden"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
