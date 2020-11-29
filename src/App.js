import GlobalStyles from "./components/GlobalStyle";

import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
