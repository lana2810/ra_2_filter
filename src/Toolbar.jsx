import React from "react";

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <ul className="toolbar">
      {filters.map((item, index) => (
        <li
          key={index}
          onClick={() => onSelectFilter(item)}
          className={item === selected ? "li-item active" : "li-item"}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Toolbar;
