import React from 'react'

const CSS = () => {
  return (
    <div className="contentcss">
      <br/>
      <center><h1>Proyectos realizados con CSS</h1></center>
      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://lenguajecss.com/css/maquetacion-y-colocacion/grid-css/grid-css-conceptos.png" 
          alt="Imagen relacionada con practica grid 1" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Practica con Grid 1</h3>
          <br/>
          <h4>Practica en relación con la materia de Programación Web para el tema de Grid</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/practicagrid1" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#1065c0', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://lenguajecss.com/css/maquetacion-y-colocacion/grid-css/grid-gap.png" 
          alt="Imagen relacionada con practica grid 2" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Practica con Grid 2</h3>
          <br/>
          <h4>Practica en relación con la materia de Programación Web para el tema de Grid</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/practicagrid2" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#1065c0', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default CSS
