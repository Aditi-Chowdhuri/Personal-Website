import React from "react";
import type { NavItem } from "../data/content";

type Props = {
  items: NavItem[];
  activeId: string;
  onClick: (id: string) => void;
};

export default function Tabs({ items, activeId, onClick }: Props) {
  return (
    <nav className="tabs">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onClick(item.id)}
          className={item.id === activeId ? "tab active" : "tab"}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
