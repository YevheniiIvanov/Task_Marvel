import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Aboutus from "../about-us/Aboutus";
import Characters from "../characters/Characters";
import Store from "../store/Store";
import Games from "../games/Games";
import AppHeader from "../header/AppHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader/>
          <main>
            <Routes>
              <Route exact path='/' element={<Aboutus/>}/>
              <Route exact path='/characters' element={<Characters/>}/>
              <Route exact path='/store' element={<Store/>}/>
              <Route exact path='/games' element={<Games/>}/>
            </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;
