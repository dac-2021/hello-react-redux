import "./App.css";

function App() {
  return (
    <div>
      <div>Parent Component</div>
      <ChildA />
    </div>
  );
}

function ChildA() {
  return (
    <div>
      <div>Child A</div>
      <ChildB />
    </div>
  );
}

function ChildB() {
  return (
    <div>
      <div>Child B</div>
      <ChildC />
    </div>
  );
}

function ChildC() {
  return (
    <div>
      <div>Child C</div>
    </div>
  );
}

export default App;
