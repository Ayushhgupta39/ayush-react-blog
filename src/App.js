import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const title = "Welcome to Ayush's Blog";
  const like = 50;
  let link = "http://www.google.com";

  return (
    <div className="App">
    <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
