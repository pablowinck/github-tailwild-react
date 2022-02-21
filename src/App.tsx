import Container from "./components/Container";
import Content from "./components/Content";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="h-full w-full grid place-items-center bg-slate-800">
      <Container>
        <Header />
        <Searchbar />
        <Content />
      </Container>
    </div>
  );
}

export default App;
