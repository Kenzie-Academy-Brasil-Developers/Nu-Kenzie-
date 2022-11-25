import { useState } from "react";
import "./styles.css";
import {FaTrash} from "react-icons/fa"


function CardRender({ value, removeValue }) {


  return (
    <div className="value-card"
      style={
        { borderLeft: value?.valueType === "value-enter" ?
         "solid 5px #03B898"
         :
         "solid 5px #E9ECEF"
        }

      }
    >
      <div>
      <h3 className="card-title">{value.name}</h3>
      <p className="value-type-tag">{value.valueType === "value-enter"? "Entrada":"Saída"}</p>
      </div>
      <div className="card-options">
        <h4>{value.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
        <FaTrash onClick={() => removeValue(value.id)}/>
      </div>
    </div>
  );
}

export default CardRender;
