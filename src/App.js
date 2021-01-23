import "./App.css";
import { useSelector, useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        Child B {counter}
        <button onClick={(e) => dispatch({ type: "INC" })}>
          INCREMENT
        </button>
      </div>
      <ChildC />
    </div>
  );
}

// Child C will dispatch the action.
function ChildC() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        Child C {counter}
        <button onClick={(e) => dispatch({ type: "INC" })}>
          INCREMENT
        </button>
        <button onClick={(e) => dispatch({ type: "DEC" })}>
          DECREMENT
        </button>
      </div>

      <ChildD />
    </div>
  );
}

function ChildD() {
  const rdState = useSelector((state) => state);
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <div>
        Child D {counter} {rdState.title} {rdState.city}
      </div>
    </div>
  );
}

export default App;
