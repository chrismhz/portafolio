import React from 'react'

const HTML = () => {
  return (
    <div className="contenthtml">
      <br/>
      <center><h1>Proyectos realizados con HTML</h1></center>
      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://i0.wp.com/hardsoftsecurity.es/wp-content/uploads/2018/02/sqlinjection2.png?fit=1140%2C600&ssl=1" 
          alt="Imagen relacionada con inyeccion sql" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Inyeccion SQL</h3>
          <br/>
          <h4>La inyección SQL es un ataque que inserta código malicioso en entradas de usuario para manipular bases de datos. Se previene validando entradas y usando consultas preparadas.</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/InyeccionSQL_Ciberseguridad" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#F57F17', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://www.data4impactproject.org/wp-content/uploads/2023/11/datasets_transparent.png" 
          alt="Imagen relacionada con busqueda tabu" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Visualizacion de un datasets con ia</h3>
          <br/>
          <h4>La visualización de datasets con IA usa técnicas de inteligencia artificial para representar visualmente grandes conjuntos de datos, identificando patrones y tendencias.</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/practica1_Visualizacion_del_datasets_con_ia" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#F57F17', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>
      
      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://i0.wp.com/www.aprendemachinelearning.com/wp-content/uploads/2018/11/CNN-08.png" 
          alt="Imagen relacionada con cyw" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Convoluciones de capas a una imagen</h3>
          <br/>
          <h4>Las convoluciones en imágenes identifican contornos y características clave mediante redes neuronales, siendo esenciales en visión por computadora.</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/Convoluciones_Aplicar_capa_denotar_contornos_imagen" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#F57F17', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f33c.png" 
          alt="Imagen relacionada con hillclimb" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Animacion de una flor a Html</h3>
          <br/>
          <h4>Una animación de flor en HTML se puede lograr con código html, utilizando técnicas de transformación y transición para mover y cambiar la apariencia de los pétalos y el centro de la flor.</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/Animacion_flor_python_flask" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#F57F17', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default HTML
