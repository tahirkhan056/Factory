import React from "react";
require("./style.scss");

const DataLabel = (props) => {
  const { label, value } = props;
  return (
    <div className="label">
      <span className="label-name">{label}</span>
      <span className="label-data">{value}</span>
    </div>
  );
};

export default DataLabel;
