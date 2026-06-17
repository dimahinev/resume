import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export async function getCvData() {
  const cv = await reader.singletons.cv.read({ resolveLinkedFiles: true });
  if (!cv) throw new Error("CV data not found. Run Keystatic admin to create it.");
  return cv;
}

export type CvData = NonNullable<Awaited<ReturnType<typeof reader.singletons.cv.read>>>;
export type CvBlock = CvData["blocks"][number];
