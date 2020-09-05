import React from "react";

export default function Total(props) {
  const total = Object.keys(props.selected).reduce((acc, curr) =>
    acc + props.selected[curr].cost, 0);

  return (
    <div className="summaryTotal">
      <div className="summaryTotalLabel">Total</div>
      <div className="summaryTotalValue">
        {props.dollarFormat.format(total)}
      </div>
    </div>
  );
}