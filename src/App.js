import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(100);
  const [title, setTitle] = useState("Project Family Man.");

  return (
    <div>
      <div>Parent Component {counter}</div>
      <ChildA counter={counter} />
    </div>
  );
}

function ChildA(props) {
  return (
    <div>
      <div>Child A {props.counter}</div>
      <ChildB counter={props.counter} />
    </div>
  );
}

function ChildB(props) {
  const [counter, setCounter] = useState(props.counter);

  return (
    <div>
      <div>
        Child B {counter}
        <button onClick={(e) => setCounter(counter + 100)}>Update</button>
      </div>
      <ChildC counter={props.counter} />
    </div>
  );
}

function ChildC(props) {
  const [counter, setCounter] = useState(props.counter);

  return (
    <div>
      <div>
        Child C is stateful now {counter}{" "}
        <button onClick={(e) => setCounter(counter + 100)}>Update</button>
      </div>

      <ChildD counter={counter} />
    </div>
  );
}

function ChildD(props) {
  return (
    <div>
      <div>Child D {props.counter}</div>
    </div>
  );
}

export default App;
