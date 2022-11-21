import "./styles.css";
import CardRender from "./Card";
import { useState } from "react";

function ListValues({ values, setValues }) {
    const [filtered, setFilter ] = useState('allValues')
        
  return (
    <section>
        <div className="render-cards-organizer">
        <div><h3>Resumo financeiro</h3></div>
        <div className="value-render">
            <button className="filter-buttons" onClick={ () => setFilter("allValues") }>Todos</button>
            <button className="filter-buttons" onClick={ () => setFilter("value-enter")  }>Entradas</button>
            <button className="filter-buttons" onClick={ () => setFilter("value-out") }>Saída </button>
        </div>
        </div>
        <div className="render-cards">
            {values.map((value, i)=> 
            (<CardRender 
                values={value}
                setValues={setValues} 
                key={i}
                />))            
        }
        </div>
    </section>
  );
}

export default ListValues;
