import { MessageCircle, Phone, UserCheck } from "lucide-react";
import { CONTACT, LINKS, whatsappLink } from "@/lib/site";

export function AnnouncementBar({ userName }: { userName?: string }) {
  return (
    <div className="border-b border-emerald-900/10 bg-[#14532d] px-4 py-2 text-xs font-semibold text-emerald-100">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
          {userName ? (
            <span className="flex items-center gap-1.5 font-bold text-white">
              <UserCheck size={14} className="text-emerald-300" />
              Welcome, {userName}! Your personalized protocol is ready.
            </span>
          ) : (
            <span>Personalized Nutrition &amp; 1-on-1 Health Coaching with Coach Amen</span>
          )}
        </div>
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <a
            href={whatsappLink(
              "Hi Coach Amen, I would like to inquire about your nutrition coaching.",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-emerald-200 transition hover:text-white"
          >
            <Phone size={13} className="text-emerald-300" />
            <span>WhatsApp: {CONTACT.displayPhone}</span>
          </a>
          <span className="hidden text-emerald-600 sm:inline">|</span>
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 font-bold text-emerald-200 transition hover:text-white sm:inline-flex"
          >
            <MessageCircle size={13} className="text-emerald-300" />
            <span>Telegram: {CONTACT.displayPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
