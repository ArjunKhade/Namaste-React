import { useState } from "react";
import LineItem from "./LineItem";

const RestaCategory = ({ section, showItems, setShowItems }) => {
  
  const itemsId = `menu-items-${section.id}`;

  return (
    <section className="menu-section">
      <div className="section-heading-row" onClick={setShowItems}>
        <h2 className="section-title" >{section.title}{section.items.length > 0 && ` (${section.items.length})`}</h2>
        <button
          type="button"
          className="section-toggle"
          aria-expanded={showItems}
          aria-controls={itemsId}
          aria-label={`${showItems ? "Hide" : "Show"} ${section.title} items`}
          
        >
          <svg
            aria-hidden="true"
            className="section-toggle-icon"
            viewBox="0 0 24 24"
            width="18"
            height="18"
          >
            <path
              d={showItems ? "m6 9 6 6 6-6" : "m6 15 6-6 6 6"}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      {showItems && (
        <div className="section-items" id={itemsId}>
          {section.items.map((item) => (
            <LineItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RestaCategory;
