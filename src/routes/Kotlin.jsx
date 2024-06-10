import React from 'react'

const Kotlin = () => {
  return (
    <div className="contentkotlin">
      <br/>
      <center><h1>Proyectos realizados con KOTLIN</h1></center>
      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" 
          alt="Imagen relacionada con cine proyecto" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Cine Proyecto</h3>
          <br/>
          <h4>Proyecto enfocado a una plataforma de stream diseñada en Android Studio con Autentificacion Firebase y Firestore</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/CineProyecto" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#9c27b0', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://i.ytimg.com/vi/dlin2Kp1rdE/hqdefault.jpg" 
          alt="Imagen relacionada con busqueda tabu" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Frases de los simpson en Android Studio</h3>
          <br/>
          <h4>Api consumida por Retrofit en Android Studio Kotlin</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/FrasesSimpsonApp" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#9c27b0', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>
      
      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://apix-drive.com/media/systems/es/google-contacts_es_api2.png" 
          alt="Imagen relacionada con cyw" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Proyecto Contactos</h3>
          <br/>
          <h4>Agenda de Contactos hecha por android Studio Kotlin y Retrofit</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/Proyecto_Contactos" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#9c27b0', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Kotlin
