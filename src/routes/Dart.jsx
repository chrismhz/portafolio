import React from 'react';

const Dart = () => {
  return (
    <div className="contentdart">
      <br/>
      <center><h1>Proyectos realizados con DART</h1></center>
      <br/>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://i.ytimg.com/vi/VvZ3iAavTEw/maxresdefault.jpg" 
          alt="Imagen relacionada con hola mundo" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Hola Mundo</h3>
          <br/>
          <h4>En Dart, imprimir Hola mundo es tan simple como escribir una línea de código.</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/DartProjects" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#0077b6', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dart;
