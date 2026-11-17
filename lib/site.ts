export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://amenwellness.com";

export const CONTACT = {
  whatsappNumber: "+251981120503",
  telegramHandle: "+251981120503",
  displayPhone: "+251 981 120 503",
} as const;

export const LINKS = {
  whatsapp: `https://wa.me/251981120503`,
  telegram: `https://t.me/+251981120503`,
  tel: `tel:${CONTACT.whatsappNumber}`,
} as const;

export function whatsappLink(message: string) {
  return `${LINKS.whatsapp}?text=${encodeURIComponent(message)}`;
}
