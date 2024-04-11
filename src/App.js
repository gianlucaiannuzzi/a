import logo from './logo.svg';
import './App.css';
import Follow from './Components/pure/follow';
import DragonBallF from './Components/pure/dragonBallF';
import TaskListComponent from './Components/container/task_list';
import Hook1 from './hooks/Hook1.jsx'
import Hook2 from './hooks/Hook2.jsx';
import Hook3 from './hooks/Hook3.jsx';
import Hook4 from './hooks/Hook4.jsx';
import Torneo from './Components/pure/torneo.jsx';
import GreetingStyled from './Components/pure/greetingStyled.jsx';
import Father from './Components/container/father.jsx';
import OptionalRender from './Components/pure/optionalRender.jsx';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente Propio Follow */}
        {/* <Follow personaje="Goku" transformacion="SSJ" numero="3"></Follow> */}
        {/* Componente Funcion Propia */}
        {/* <DragonBallF personaje="Goku" transformacion="SSJ" numero="3"></DragonBallF> */}
        {/* Componente de Listado de Tareas */}
        {/* Ejempolos de uso de HOOKS */}
        {/* <Hook1></Hook1> */}
        {/* <Hook2></Hook2> */}
        {/* <Hook3></Hook3> */}
        {/* <Hook4 nombre="BABIBOY">
          Todo lo que hay aca adentro, es props.children
          <h3>
            Contenido del Childe
          </h3>
        </Hook4> */}
        {/* <Torneo></Torneo> */}
        {/* <GreetingStyled name="Cardigan"></GreetingStyled> */}
      {/* </header>  */}
      {/* Gestion de Eventos */}
      {/* <Father></Father> */}
      {/* <OptionalRender></OptionalRender> */}

      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
