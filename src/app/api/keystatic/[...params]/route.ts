import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig, { showAdminUI } from "@/keystatic.config";

export const { POST, GET } = (() => {
  if (!showAdminUI) {
    const notFoundHandler = () => new Response(null, { status: 404 });
    return { GET: notFoundHandler, POST: notFoundHandler };
  }
  return makeRouteHandler({ config: keystaticConfig });
})();
