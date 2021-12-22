import { Route, Routes } from "react-router";
import "./App.css";
import Quotes from "./pages/Quotes";
import Alphabet from "./pages/Alphabet";
import { ROUTES } from "./config/navigation";
import Nav from "./components/navigationBar";
import Authors from "./pages/Authors";
import Author from "./pages/Author";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path={ROUTES.QUOTES} element={<Quotes />} />
        <Route path={ROUTES.ALPHABET} element={<Alphabet />} />
        <Route path={ROUTES.AUTHORS} element={<Authors />}>
          <Route path=":name" element={<Author />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
