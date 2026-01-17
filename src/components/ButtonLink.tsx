import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
};

export default function ButtonLink({ href, children, newTab = true }: Props) {
  return (
    <a
      className="btnLink"
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
