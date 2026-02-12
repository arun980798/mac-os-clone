
import "./app.scss";
import Dock from "./component/Dock";
import Nav from "./component/Nav";
import { Macwindow } from "./component/windows/Macwindow";
import Ghithub from "./component/windows/Ghithub";
import Note from "./component/windows/Note";

function App() {
  return (
    <main>
      <Nav />
      <Dock />
      <Ghithub />
      <Note />
    </main>
  );
}

export default App;
