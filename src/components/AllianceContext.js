import React from "react";

const AllianceContext = React.createContext({
  getAlliance: (allianceInput) => {},
  alliances: [],
  checkbox: () => {},
  checkStatus: false
});

export default AllianceContext;
