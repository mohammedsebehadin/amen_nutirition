"use client";

import { useEffect, useState } from "react";

type TelegramUser = { first_name?: string } | null;

export function useTelegram() {
  const [user, setUser] = useState<TelegramUser>(null);
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.Telegram?.WebApp) return;
    const tg = window.Telegram.WebApp;
    tg.ready?.();
    try {
      tg.expand?.();
      tg.enableClosingConfirmation?.();
    } catch {}
    const nextUser = tg.initDataUnsafe?.user ?? null;
    const active = Boolean(nextUser || tg.initData);
    queueMicrotask(() => {
      if (nextUser) setUser(nextUser);
      if (active) setIsTelegram(true);
    });
  }, []);

  const triggerHaptic = (style: "light" | "medium" | "heavy" = "light") => {
    try {
      window.Telegram?.WebApp?.HapticFeedback?.impactOccurred?.(style);
    } catch {}
  };

  return { user, isTelegram, triggerHaptic };
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready?: () => void;
        expand?: () => void;
        enableClosingConfirmation?: () => void;
        initData?: string;
        initDataUnsafe?: { user?: { first_name?: string } };
        HapticFeedback?: { impactOccurred?: (s: string) => void };
      };
    };
  }
}
