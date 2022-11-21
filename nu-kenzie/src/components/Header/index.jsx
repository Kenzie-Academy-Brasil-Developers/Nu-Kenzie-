import './styles.css'
function Header({setPage}) {
  return (
    <header>
      <div className='header-wrapper'>
        <h1 className="header-title">
            <span>Nu</span> Kenzie
        </h1>
      </div>
      <button className='return-start-btn' onClick={()=>setPage('start')}>Inicio</button>
    </header>
  );
}
export default Header;
