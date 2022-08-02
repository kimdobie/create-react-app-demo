import React from "react";
import leaf from "./leaf.svg";

const DinoListItem = ({ name, type }) => {
  return (
    <li>
      {type === "herbivore" ? (
        <img src={leaf} alt='logo' style={{ border: "1px solid" }} />
      ) : null}
      {name} - {type}
    </li>
  );
};

export default DinoListItem;
