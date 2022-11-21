import { useState } from "react";
import "./styles.css";
import {FaTrash} from "react-icons/fa"


function CardRender({ value, removeValue, index }) {
  console.log(value)

  return (
    <div
      style={
        { borderLeft: value?.valueType === "value-enter" ?
         "solid 5px #03B898"
         :
         "solid 5px #E9ECEF"
        }

      }
    >
      <div>
      <h3>{value.name}</h3>
      <p className="value-type-tag">{value.valueType}</p>
      </div>
      <div>
        <h4>{value.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
        <FaTrash onClick={() => removeValue(index)}/>
      </div>
    </div>
  );
}

export default CardRender;
