import { Routes, Route, NavLink } from 'react-router-dom';
import Index from './routes/Index';
import Python from './routes/Python';
import HTML from './routes/HTML';
import JavaScript from './routes/JavaScript';
import CSS from './routes/CSS';
import Php from './routes/Php';
import Kotlin from './routes/Kotlin';
import Java from './routes/Java';
import Dart from './routes/Dart';
import './styles.css';

const App = () => {
  return (
    <div className="">
      <nav>
        <div className="profile-images">
          <img src="https://avatars.githubusercontent.com/u/154471150?v=4" alt="Profile Image" />
        </div>
        <NavLink to="/" activeClassName="active" className="navlink home"> 🏠 Inicio |</NavLink>
        <NavLink to="/python" activeClassName="active">🔵 Python</NavLink>
        <NavLink to="/html" activeClassName="active">🟠 HTML</NavLink>
        <NavLink to="/javascript" activeClassName="active">🟡 JavaScript</NavLink>
        <NavLink to="/css" activeClassName="active">🔵 CSS</NavLink>
        <NavLink to="/php" activeClassName="active">🔵 PHP</NavLink>
        <NavLink to="/kotlin" activeClassName="active">🟣 Kotlin</NavLink>
        <NavLink to="/java" activeClassName="active">🟤 Java</NavLink>
        <NavLink to="/dart" activeClassName="active">🔵 Dart </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/python" element={<Python />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/php" element={<Php />} />
        <Route path="/kotlin" element={<Kotlin />} />
        <Route path="/java" element={<Java />} />
        <Route path="/dart" element={<Dart />} />
      </Routes>
    </div>
  );
};

export default App;
