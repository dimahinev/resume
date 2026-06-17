import type { Node } from "@markdoc/markdoc";
import Markdoc from "@markdoc/markdoc";
import React from "react";

const config = {
  nodes: {
    document: { render: "section" },
  },
};

export interface MarkdownRendererProps {
  node: Node;
  className?: string;
}

export const MarkdownRenderer = ({ node, className }: MarkdownRendererProps) => {
  const errors = Markdoc.validate(node, config).filter(
    (e) => e.error.level === "error" || e.error.level === "critical"
  );

  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid content");
  }

  const renderable = Markdoc.transform(node, config);

  return (
    <div className={className}>
      {Markdoc.renderers.react(renderable, React)}
    </div>
  );
};
