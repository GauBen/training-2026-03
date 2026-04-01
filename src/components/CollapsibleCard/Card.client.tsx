import { useState, type ReactNode } from "react";

export default function Card({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "▼ " : "▶︎ "}
        {title}
      </button>
      <div style={{ display: open ? "block" : "none" }}>{children}</div>
    </div>
  );
}
