import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { store } from "./redux";
import { Provider } from 'react-redux';

import { HomePage } from "./pages/home-page";
import {Header} from "./components/header"
import { GamePage } from "./pages/game-page";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>

          <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
          </Routes>

          <Routes>
            <Route path="/app/:title" element={<GamePage />}>
            </Route>
          </Routes>
          
        </div>
      </Router>
    </Provider>
  );
}

export default App;
