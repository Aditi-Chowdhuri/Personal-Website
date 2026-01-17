import React from "react";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
  right?: React.ReactNode;
};

export default function Section({ id, title, children, right }: Props) {
  return (
    <section id={id} className="section">
      <div className="sectionHeader">
        <div>
          <h2 className="sectionTitle">{title}</h2>
          <div className="sectionRule" />
        </div>
        {right ? <div className="sectionRight">{right}</div> : null}
      </div>
      {children}
    </section>
  );
}
