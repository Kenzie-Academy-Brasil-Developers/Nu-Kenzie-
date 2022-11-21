import "./styles.css"

function FormCreateValue({setValues, values}){
    const handleSubmit = (e) => {
        const description = e.target.valueName.value
        const value = e.target.valueInput.value
        const valueTypeIndex = e.target.selectValueType.options.selectedIndex
        const valueType = e.target.selectValueType.options[valueTypeIndex].value

        setValues([...values, {
            name: description,
            value: value,
            valueType: valueType,
        }])
    }


    return(
        <form action="submit" onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit(e)}
        }>
            <div>
            <p className="add-value-p">Descrição</p>
            <input name="valueName" className="value-descritpion" type="text" placeholder="Digite aqui sua descrição" required/>
            <p className="value-name-sample"></p>
            </div>
            <div className="form-data-organizer">
                <div className="form-data">
                    <p className="add-value-p">Valor</p>
                    <input name="valueInput" className="value-integer" type="number" min={1} required/>
                    <p className="add-value-p add-value-sample">Ex: Compra de roupas</p>
                </div>
                <div className="form-data">
                    <p className="add-value-p">Tipo de valor</p>
                    <select name="selectValueType" id="" required>
                        <option value="value-enter">Entrada</option>
                        <option value="value-out">Saída</option>
                    </select>
                </div>
            </div>
            <button type="submit">Inserir Valor</button>
        </form>
    )
}

export default FormCreateValue