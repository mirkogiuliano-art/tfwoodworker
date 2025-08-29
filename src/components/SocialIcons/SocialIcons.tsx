import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function SocialIcons() {
  const socials = [
    { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com/tuoprofilo" },
    { icon: <Facebook className="w-6 h-6" />, url: "https://facebook.com/tuoprofilo" },
    { icon: <Mail className="w-6 h-6" />, url: "mailto:tuamail@example.com" },
    { icon: <Phone className="w-6 h-6" />, url: "tel:+391234567890" },

  ];

  return (
    <div className="social-icons">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
