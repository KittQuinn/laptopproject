import React from "react";

export default function Feature(props) {
  return (
    <div className="featureItem">
      <input
        type="radio"
        id={props.name}
        className="featureOption"
        name={props.feature}
        checked={props.name === props.selected[props.feature].name}
        onChange={() => props.handleUpdate(props.feature, props.index)}
      />
      <label htmlFor={props.name} className="featureLabel">
        {props.name} ({props.dollarFormat.format(props.cost)})
      </label>
    </div>
  );
}