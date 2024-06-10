import React from 'react';

const Index = () => {
  return (
    <div className="content">
      <div className="top-section">
        <div className="profile-image">
          <img src="https://avatars.githubusercontent.com/u/154471150?v=4" alt="Profile Image" />
        </div>
        <div className="intro-text">
          <h1>¡Hola! 👋</h1>
          <br/>
          <h2>Soy Christian Martínez Hernández</h2>
          <br />
          <br />
          <p>_____________________ Me puedes encontrar por estos medios _____________________ </p>
          <br />
          <div className="social-links">
            <a href="https://www.linkedin.com/in/christian-martínez-hernández-72a4542a6" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"  />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009895803782&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" />
            </a>
            <a href="mailto:martinez.christian.isic@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
            </a>
            <a href="https://www.instagram.com/chris_mhz?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
            </a>
            <a href="https://github.com/chrismhz" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
      --------------------------------------------------------------------------------------------------------------------------------------------
      <div className="main-content">
        <h2>👨 <br />Información sobre mí:</h2>
        <br />
        <p>
          Soy estudiante de ingeniería, actualmente inmerso en la apasionante carrera de Ingeniería en Sistemas Computacionales en el Tecnológico de Estudios Superiores de Jilotepec.
          <br />
          <br />
          <p >💻 Además, cuento con una sólida formación técnica como Técnico en Programación, obtenido en el Colegio de Estudios Científicos y Tecnológicos del Estado de México.</p>
          <br />
          <p >🖥️ Mi verdadera pasión radica en el desarrollo Front-end, donde canalizo mi creatividad y habilidades técnicas para crear experiencias de usuario excepcionales. Poseo habilidades destacadas en la administración de bases de datos y me considero un auténtico Gurú de Redes, capaz de optimizar y asegurar una conectividad eficiente.</p>
          <br />
          <p >👫 Como creyente ferviente en la colaboración y el aprendizaje continuo, encuentro en el trabajo en equipo una fuente constante de inspiración. Disfruto compartiendo mis conocimientos y absorbiendo la experiencia de mis compañeros, ya que creo firmemente que el intercambio de ideas es fundamental para el crecimiento profesional.</p>
          <br />
          <p >🎧 Siempre estoy en la búsqueda de desafíos emocionantes que me permitan expandir mis habilidades y contribuir al mundo tecnológico. Considero que cada proyecto es una oportunidad para aprender y mejorar, y estoy listo para enfrentar cualquier reto que impulse mi desarrollo como profesional.</p>
          <br/>
          <br />
          Contacto: <i>martinez.christian.isic@gmail.com</i>
        </p>
        --------------------------------------------------------------------------------------------------------------------------------------------
        <h2><br/>👨🏻‍💻 <br />Tecnologías conocidas:</h2> 
        <br />
        <center>
        <div className="tech-icons">
          <img src="https://skillicons.dev/icons?i=androidstudio,angular,aws,bootstrap,c,cs,cpp,java,php,dart,flask,flutter,py,dotnet,css,html,mongodb,octave,react,js,nodejs,mysql,sqlite,firebase,git,github,postman,eclipse,vscode,kotlin,django,docker,vite,ubuntu,linux,npm,kali,visualstudio,postgresql,sqlite,tailwind,bootstrap,net,googlecloud,gitlab,gmail,instagram,kali,twitter,linkedin,windows,wordpress,yarn,gradle,discord,ps&perline=12" alt="Tech Stack Icons" />
        </div>
        </center>
        <br />
        --------------------------------------------------------------------------------------------------------------------------------------------
        <br />
        <br />
        <h2>😻 <br/>Si quieres que te ayude en algo, te sugiero:</h2>
        <br />
        <center>
        <div className="support-links">
          <a href='https://cafecito.app/unsimpledev' target='_blank' rel='noopener noreferrer'>
            <img src='https://cdn.cafecito.app/imgs/buttons/button_1.png' alt='Invítame un café en cafecito.app' />
          </a>
          <br />
          <a href="https://ko-fi.com/unsimpledev" target='_blank' rel='noopener noreferrer'>
            <img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" alt="Ko-fi" />
          </a>
        </div>
        </center>
        <br />
        --------------------------------------------------------------------------------------------------------------------------------------------
        <br />
        <br />
        <h2>Estadísticas sobre GitHub</h2>
        <br />
        <center>
        <img title="🔥 Get streak stats for your profile at git.io/streak-stats" alt="Mark streak" src="https://github-readme-streak-stats.herokuapp.com/?user=unsimpledev&theme=dark&hide_border=false" />
        <br />
        <img src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=unsimpledev&theme=dark&hide_border=false&no-bg=true&no-frame=true&langs_count=10" alt="GitHub Top Languages" width="500px" height="500px" />
        <br />
        <br />
        <a href="https://github.com/ryo-ma/github-profile-trophy" title="Go to Source">
          <img src="https://github-profile-trophy.vercel.app/?username=unsimpledev&theme=radical&row=1&column=7&margin-h=15&margin-w=5&no-bg=true" alt="TROPHY" />
        </a>
        </center>
      </div>
    </div>
  );
};

export default Index;
