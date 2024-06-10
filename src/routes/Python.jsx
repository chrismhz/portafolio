import React from 'react'

const Python = () => {
  return (
    <div className="contentpython">
      <br/>
      <center><h1>Proyectos realizados con PYTHON</h1></center>
      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Evolutionary_algorithm.svg/300px-Evolutionary_algorithm.svg.png" 
          alt="Imagen relacionada con algoritmos genéticos" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Algoritmos Genéticos</h3>
          <br/>
          <h4>Se inspiran en las teorías evolutivas de Darwin sobre selección natural, parten de una gran población de individuos, siempre según la función de evaluación</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/algoritmos_geneticos" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#0747a1', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://www.cs.us.es/~fsancho/Blog/posts/img/aco2.png" 
          alt="Imagen relacionada con busqueda tabu" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Busqueda Tabu</h3>
          <br/>
          <h4>Es un procedimiento metahuristico que trata de diversificar la exploracion en el espacio de estados para evitar caer en optimos locales</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/Busqueda_tabu_en_Python" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#0747a1', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>
      
      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://d3i71xaburhd42.cloudfront.net/90b10ce5c2aad17d441b18ceb8d3eb56b2a822a1/3-Figure4-1.png" 
          alt="Imagen relacionada con cyw" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Algoritmo Clarke y Wright</h3>
          <br/>
          <h4>Es un algoritmo que usa una heuristica, qe analizaremos para la contruccion sistematicamente las rutas de un vehiculo</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/Algoritmo_Clarke_y_wiright_en_Python" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#0747a1', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

      <br/>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://i.ytimg.com/vi/PcwjCPiECMM/maxresdefault.jpg" 
          alt="Imagen relacionada con hillclimb" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Hillclimb</h3>
          <br/>
          <h4>Es un algoritmo de busqueda local que, a partir de un estado inicial, trata de ir mejorando el resultado analizado los estados vecinos</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/hillclimb_con_python" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#0747a1', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>

      <br/>
      <br/>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src="https://slideplayer.es/slide/3122808/11/images/15/Temple+simulado+Prop%C3%B3sito%3A+evitar+el+problema+de+los+m%C3%A1ximos+%28o+m%C3%ADnimos%29+locales+de+la+ascensi%C3%B3n+de+colinas+%28AdC%29..jpg" 
          alt="Imagen relacionada con templado simulado" 
          style={{ width: '200px', height: '170px', marginRight: '20px' }} 
        />
        <div style={{ flexGrow: 1, textAlign: 'center', marginRight: '20px' }}>
          <h3>Templado Simulado</h3>
          <br/>
          <h4>Son metaheuriticas parametrizables que nos permiten atacar un gran espectro de problemas deferentes.</h4>
          <br/>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a href="https://github.com/chrismhz/PLF_templado_simulado_python" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#0747a1', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px' }}>
              Da clic aquí 👆🏻
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Python
