import LogIn from './components/LogIn';
import PantallaPartidos from './views/PantallaPartidos'
import PantallaRanking from './views/PantallaRanking'
import PantallaDevs from './views/PantallaDevs'
import NavBar from './components/NavBar';
import { appReducer, initialState, AppContext } from "./appInfo";
import './App.css';
import './App.scss';
import {  useReducer } from "react";

import {
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  //const [habilitado, setHabilitado] = useState(true);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {/* <User /> */} 
      <Routes>
        <Route path='/' element={<PantallaPartidos />} />
        <Route path='/ranking' element={<PantallaRanking />} />
        <Route path='/devs' element={<PantallaDevs />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
      <NavBar />
    </AppContext.Provider>
  );
}

export default App;
