import "./App.css";

import Navbar from "./components/navbar/navbar";
import Search from "./components/search/search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mb-3">
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto header">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
