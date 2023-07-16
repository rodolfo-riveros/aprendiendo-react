import logo from './logo.svg';
import './App.css';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
// import ComponenteA from './components/pure/ComponenteA';
// import ComponenteB from './components/pure/ComponenteB';
// import Contacto from './models/Contacto';

//const contacto = new Contacto('Rodolfo', 'Riveros', 'rodolfo.riveros@example.com', true);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* Este es mi primer componente */}
        {/* <Greeting name = { 'Rodolfo' } ></Greeting> */}
        {/* <GreetingF name = { 'Rodolfo' }></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ComponenteA contacto={contacto} /> */}
        {/* <ComponenteB contacto={contacto} /> */}

        {/* ejemplo de hooks */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre= 'Rodolfo'>
          <h3>
            contenido del props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
