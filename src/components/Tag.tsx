import React from "react";

type Props = { children: React.ReactNode };

export default function Tag({ children }: Props) {
  return <span className="tag">{children}</span>;
}
