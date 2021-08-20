//capitalize

import React from "react";

export const Capitalize = ({ palabras }) => {
  const capitalize = (string) =>
    string.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  return capitalize(palabras);
};
