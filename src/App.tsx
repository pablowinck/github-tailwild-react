import Container from "./components/Container";
import Content from "./components/Content";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-300">
      <Container>
        <Header />
        <Searchbar />
        <Content />
      </Container>
    </div>
  );
}

export default App;
