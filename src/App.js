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
  return (
    <div>
      <div>Child B {props.counter}</div>
      <ChildC counter={props.counter} />
    </div>
  );
}

function ChildC(props) {
  return (
    <div>
      <div>Child C {props.counter}</div>
      <ChildD counter={props.counter} />
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
