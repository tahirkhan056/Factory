import React from "react";
require("./style.scss");

const PageHeader = (props) => {
  const { text } = props;
  return (
    <div className="page-header">
      <span className="text-span">{text}</span>
    </div>
  );
};

export default PageHeader;
