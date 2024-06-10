import React from 'react'

const Php = () => {
  return (
    <div className="contentphp">
      <br/>
      <center><h1>Proyectos realizados con PHP</h1></center>
      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://desarrolloweb.com/storage/manual_images/G3HThmSyUF7i88tPfV5ISClNIcuiZU7wIfq0aTQV.png" 
          alt="Imagen relacionada con algoritmos genéticos" 
          style={{ width: '200px', height: '170px', marginRight: '50px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Becas para el Tesji</h3>
          <br/>
          <h4>Realización de una práctica sobre el registro de becas para los estudiantes del TESJI, en el lenguaje de programación PHP</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/becas-tesji" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#1477d2', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://i.ytimg.com/vi/xIbSsNp8yyI/maxresdefault.jpg" 
          alt="Imagen relacionada con sistema biblioteca" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Sistema para una biblioteca</h3>
          <br/>
          <h4>Sistema para una biblioteca para el Tecnológico de Estudios Superiores de Jilotepec, implementada con el lenguaje de programación PHP</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/sistema_para_biblioteca" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#1477d2', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Php
