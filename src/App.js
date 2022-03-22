import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { store } from "./redux";
import { Provider } from 'react-redux';
import { HomePage } from "./pages/home-page";
import {Header} from "./components/header"

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
          
        </div>
      </Router>
    </Provider>
  );
}

export default App;