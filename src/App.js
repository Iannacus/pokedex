import './App.css';
import './Theme.css';
import Pokedex from './modules/Pokedex';
import Login from './modules/Login';
import Pokemon from './modules/Pokemon';
import Encounters from './modules/Encounters';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { useAuth, ProvideAuth } from './provider/AuthProvider';
import ProtectedRoute from './component/ProtectedRoute';
import ThemeSup from './modules/ThemeSup';



function App() {

  return (
    <div className="App">
      <ProvideAuth >
        <Router>
          <ProtectedRoute path='/pokedex/pokemon/:id/encounters'>
            <Encounters />
          </ProtectedRoute>

          <ProtectedRoute path='/pokedex/pokemon/:id'>
            <Pokemon />
          </ProtectedRoute>
          <ProtectedRoute path='/pokedex'>
            <Pokedex></Pokedex>
          </ProtectedRoute>
          <Route path="/">  <Login /> </Route>
        </Router>
      </ProvideAuth>

    </div>



  );
}

export default App;
