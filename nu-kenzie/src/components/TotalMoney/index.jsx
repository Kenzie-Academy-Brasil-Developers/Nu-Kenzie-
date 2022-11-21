import "./styles.css";

function DisplayTotal({ values }) {
  const difference = values.reduce((acumulator, currentValue) => {
    return currentValue.valueType === "value-enter"
      ? acumulator + currentValue.value
      : acumulator - currentValue.value;
  }, 0);

  return (
    <div>
      <div className="display-total">
        <h4>Valor total:</h4>
        <h4>
          <span>$ {difference}</span>
        </h4>
      </div>
      <p className="">Valor referente ao seu saldo</p>
    </div>
  );
}

export default DisplayTotal;
