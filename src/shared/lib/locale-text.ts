import { Locale } from "@/src/shared/config";

export function t(
  obj: { [key: string]: string },
  locale: Locale,
  field: string
): string {
  const key = `${field}_${locale}`;
  return obj[key] || obj[`${field}_en`] || "";
}
