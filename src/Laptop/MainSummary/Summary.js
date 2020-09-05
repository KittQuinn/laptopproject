import React from "react";

export default function Summary(props) {
  return (
    <div className="summaryOption">
      <div className="summaryOptionLabel">{props.feature} </div>
      <div className="summaryOptionValue">{props.option}</div>
      <div className="summaryOptionCost">
        {props.dollarFormat.format(props.cost)}
      </div>
    </div>
  );
}