import React from 'react';


export default function CartSummary (props) {
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = `${feature} ${idx}`;
    const selectedOption = props.selected[feature];

    return (
      <div className="option-summ" key={featureHash}>
        <div className="option-summ-label">{feature} </div>
        <div className="option-summ-value">{selectedOption.name}</div>
        <div className="option-summ-cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });
  return summary
}