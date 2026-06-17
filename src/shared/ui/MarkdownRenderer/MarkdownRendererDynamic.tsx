import dynamic from "next/dynamic";

export const MarkdownRendererDynamic = dynamic(
  () =>
    import("./MarkdownRenderer").then((mod) => ({
      default: mod.MarkdownRenderer,
    })),
  {
    ssr: true,
    loading: () => <div style={{ minHeight: "200px" }} />,
  }
);
