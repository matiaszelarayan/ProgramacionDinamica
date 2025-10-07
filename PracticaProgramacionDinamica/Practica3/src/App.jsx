
import AnimacionReact from './components/AnimacionReact';
import './components/AnimacionReact.css';

function App() {
  return (
    <div>
      <h1>Animación con React</h1>
      <AnimacionReact />
      <h2>Cambio dinámico de color y ocultamiento</h2>
      <CambioColorReact />
      <h2>Ocultamiento y revelado con transición</h2>
      <OcultarReact />
    </div>
  );
}

export default App;
import OcultarReact from './components/OcultarReact';
import './components/OcultarReact.css';
import CambioColorReact from './components/CambioColorReact';
import './components/CambioColorReact.css';
