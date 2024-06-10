import React from 'react'

const Java = () => {
  return (
    <div className="contentjava">
      <br/>
      <center><h1>Proyectos realizados con JAVA</h1></center>
      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://www.geocities.ws/itmina_web/lya/Auto_Archivos/proy/compil2.gif" 
          alt="Imagen relacionada con analizador lexico" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Analizador Léxico</h3>
          <br/>
          <h4>Analizador Léxico fase 1 en introducir palabras de español a francés con Java</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/AnalizadorLexicoFase1" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: 'brown', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Java
