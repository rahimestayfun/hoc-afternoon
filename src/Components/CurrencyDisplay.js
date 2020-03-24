import React from "react";
function CurrencyDisplay(props) {
  return (
    <>
      <p>
        $ {props.amount.toFixed(2)} US Dollar = {props.currency.symbol} {(props.amount * props.currency.rate).toFixed(2)} {props.currency.name} 
      </p>
    </>
  );
}
export default CurrencyDisplay;
