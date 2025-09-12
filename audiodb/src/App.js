import Library from "./component/Library/Library";
import Searchartist from "./component/Search/searchartist";
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Searchartist/>}/>            
          <Route path="/artist" element={<Library/>}/>
        </Routes>

      </header>
    </div>
  );
}

export default App;
