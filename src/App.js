import "./App.css";
import { useSelector } from "react-redux";

function App() {
  // Accessing the Store State
  const rdState = useSelector((state) => state);
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <div>Parent Component {counter}</div>
      <ChildA />
    </div>
  );
}

function ChildA() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <div>Child A {counter}</div>
      <ChildB />
    </div>
  );
}

function ChildB() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <div>Child B {counter}</div>
      <ChildC />
    </div>
  );
}

function ChildC() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <div>Child C {counter}</div>

      <ChildD />
    </div>
  );
}

function ChildD() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <div>Child D {counter}</div>
    </div>
  );
}

export default App;
