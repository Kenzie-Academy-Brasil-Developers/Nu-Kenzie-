import "./styles.css";

function DisplayTotal({ values }) {
  const difference = values.reduce((acumulator, currentValue) => {
    return currentValue.valueType === "value-enter"
      ? acumulator + currentValue.value
      : acumulator - currentValue.value;
  }, 0);

  return (
    <div className="display-total-box">
      <div className="display-total">
        <h4>Valor total:</h4>
        <h4>
          <span className="color-total">{difference.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
        </h4>
      </div>
      <p className="total-value-advice">Valor referente ao seu saldo</p>
    </div>
  );
}

export default DisplayTotal;
