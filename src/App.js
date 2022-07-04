import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import User from './components/User';
import TodoList from './components/TodoList/TodoList';
import HPCharacters from './components/apiHarryPotter/HPCharacters';

function App() {
  let varUsuario = {
    name: "Vergara",
    age: "36",
    skills: ["HTML", "PHP", "Postgres"]
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <div>
            <Counter/>
            <hr/>
          </div>
          <div>
            <User name={"Cristyan"} age={36} skills={["PSQL", "PHP", "Angular", "React"]}/>
            <hr/>
            <User {...varUsuario}/>
            <hr/>
            <User name={"Pineda"} age={varUsuario.age} skills={varUsuario.skills}/>
            <hr/>
          </div>
          <div>
            <TodoList/>
            <hr/>
          </div>
          <div>
            <HPCharacters/>
            <hr/>
          </div>
      </body>
    </div>
  );
}

export default App;
