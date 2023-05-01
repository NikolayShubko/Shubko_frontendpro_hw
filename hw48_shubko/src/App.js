// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
