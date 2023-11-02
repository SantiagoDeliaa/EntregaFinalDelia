import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={'Hi tutor {Sofi}'}/>
    </div>
  );
}

export default App;
