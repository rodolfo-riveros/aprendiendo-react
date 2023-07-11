import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/pure/ComponenteA';
import ComponenteB from './components/pure/ComponenteB';
import Contacto from './models/Contacto';

const contacto = new Contacto('Rodolfo', 'Riveros', 'rodolfo.riveros@example.com', true);

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
        <ComponenteA contacto={contacto} />
        <ComponenteB contacto={contacto} />
      </header>
    </div>
  );
}

export default App;
