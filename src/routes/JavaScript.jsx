import React from 'react'

const JavaScript = () => {
  return (
    <div className="contentjavascript">
      <br/>
      <center><h1>Proyectos realizados con JAVASCRIPT</h1></center>
      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://user-images.githubusercontent.com/47857535/86643255-8aaa8d00-bfaa-11ea-8f6c-0ef3811f47a8.png" 
          alt="Imagen relacionada con pokedex" 
          style={{ width: '200px', height: '170px', marginRight: '55px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Pokedex</h3>
          <br/>
          <h4>Realizacion de una Api web de Pokemon llamada Pokedex en relacion con javascript (React JS)</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/pokedex" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#fdd835', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://react-pdf.org/images/document-graphic.png" 
          alt="Imagen relacionada con busqueda tabu" 
          style={{ width: '200px', height: '170px', marginRight: '55px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Proyecto PDF Javascript</h3>
          <br/>
          <h4>Proyecto enfocado a una visualizacion y descargas de un paciente sobre su salud ocular desde un sistema web en React JS, y JS</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/proyectoPDFReact" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#fdd835', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://knowledge.hubspot.com/hs-fs/hubfs/Knowledge_Base_2021/property-history-details.png?width=600&name=property-history-details.png" 
          alt="Imagen relacionada con cyw" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Proyecto Historial Javascript</h3>
          <br/>
          <h4>Proyecto enfocado a un historial sobre un sistema web en React JS, y JS</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/proyectoHistorialReact" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#fdd835', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default JavaScript
