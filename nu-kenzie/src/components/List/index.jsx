import "./styles.css";
import CardRender from "./Card";
import { useEffect, useState } from "react";

function ListValues({ values, setValues }) {
    const [filtered, setFilter ] = useState(values)

    const removeValue = (valueIndex) => {
        setValues(values.filter((e,i) => i !== valueIndex))
    }

    const all = () => {
        setFilter(values)
    }
    const enter = () => {
        setFilter(values.filter(e => e.valueType === "value-enter"))
    }
    const out = () => {
        setFilter(values.filter(e => e.valueType === "value-out"))
    }
    useEffect(() => {
        setFilter(values)
    },[,values])


  return (
    <section>
        <div className="render-cards-organizer">
        <div><h3>Resumo financeiro</h3></div>
        <div className="value-render">
            <button className="filter-buttons" onClick={ all }>Todos</button>
            <button className="filter-buttons" onClick={ enter }>Entradas</button>
            <button className="filter-buttons" onClick={ out }>Saída </button>
        </div>
        </div>
        <div className="render-cards">
            {filtered?.map((value, i)=> 
            (<CardRender 
                value={value}
                setValues={setValues} key={i}
                removeValue={removeValue}
                index={i} 
                />))            
        }
        </div>
    </section>
  );
}

export default ListValues;
