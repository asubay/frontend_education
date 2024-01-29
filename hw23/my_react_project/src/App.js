import Counter from "./components/Counter";
import Form from "./components/Form";
import './styles/App.css';

function App() {

  return (
      <div className="App">
          <div className="container mt-3">
              <h3>Component #1</h3>
              <Counter/>
              <hr/>
              <h3>Component #2</h3>
              <Form/>
          </div>
      </div>
  );
}

export default App;
