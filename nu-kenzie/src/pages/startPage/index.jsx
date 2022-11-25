import "./styles.css"
import illustration from "../../img/illustration.svg"

function StartPage({setPage}){
    return(
        <main className="start-main">
            <div className="text-centralizer">
                <h1><span>Nu</span> Kenzie</h1>
                <h2>Centralize o</h2>
                <h2>Controle das suas</h2>
                <h2>finanças</h2>
                <p>de forma rápida e segura</p>
                <button onClick={ ()=> setPage("home") }>Iniciar</button>
            </div>
            <figure className="start-figure">
                <img src={illustration} alt="Ilustração" />
            </figure>
        </main>
    )    
}
export default StartPage