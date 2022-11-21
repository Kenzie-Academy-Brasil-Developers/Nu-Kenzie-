import "./styles.css"

function FormCreateValue({setValues}){
    
    return(
        <form action="submit">
            <div>
            <p>Descrição</p>
            <input type="text" placeholder="Digite aqui sua descrição"/>
            <p className="value-name-sample"></p>
            </div>
            <div className="form-data-organizer">
                <div className="form-data">
                    <p>Valor</p>
                    <input type="number" min={1}/>
                </div>
            </div>
        </form>
    )
}

export default FormCreateValue