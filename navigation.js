import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = [
  "en",
  "de",
  "es",
  "ar",
  "fr",
  "id",
  "nl",
  "pt",
  "ru",
  "hi",
  "ja",
  "th",
  "it",
  "vi",
  "tr",
  "zh",
];
export const localePrefix = "as-needed";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
