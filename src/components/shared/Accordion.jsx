"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion({ title, subtitle, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card mx-auto fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat>
      {/* Header Row */}
      <div className="header" onClick={() => setOpen(!open)}>
        <div className="text-content">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          {content}
        </div>
      )}

      <style jsx>{`
        .card {
          background-image: url('/assets/Rectangle130.webp');
          background-size: cover;
          background-position: center;
          max-width:90vw;
          color: white;
          padding: 24px;
          transition: all 0.3s ease;
          margin:0 auto !important;
         border-radius: 30px; overflow: hidden;}

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }

        .text-content {
          flex: 1;
        }

        :global(.card .title) {
          font-weight: bold;
          letter-spacing: 0.05em;
          font-size: 1.125rem; /* 18px */
          margin: 0;
        }

        :global(.card .subtitle) {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          margin: 4px 0 0 0;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 16px;
        }

        .expanded {
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          line-height: 1.5;
        }
                  @media (max-width: 575px) {
                          .card {
          max-width:95vw;
          color: white;
          padding: 20px;
          transition: all 0.3s ease;
         border-radius: 30px; overflow: hidden;}
            }
      `}</style>
    </div>
  );
}
