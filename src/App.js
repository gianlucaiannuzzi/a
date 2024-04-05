import logo from './logo.svg';
import './App.css';
import Follow from './Components/pure/follow';
import DragonBallF from './Components/pure/dragonBallF';
import TaskListComponent from './Components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente Propio Follow */}
        {/* <Follow personaje="Goku" transformacion="SSJ" numero="3"></Follow> */}
        {/* Componente Funcion Propia */}
        {/* <DragonBallF personaje="Goku" transformacion="SSJ" numero="3"></DragonBallF> */}
        {/* Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
