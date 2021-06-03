import './App.css';
import './Theme.css';
import Pokedex from './modules/Pokedex';
import Login from './modules/Login';
import Pokemon from './modules/Pokemon';
import Encounters from './modules/Encounters';
import Conf from './modules/Conf';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ProvideAuth } from './provider/AuthProvider';
import { ProvidePokemonContext } from './component/PokemonContext'
import ProtectedRoute from './component/ProtectedRoute';
import { useBgContext } from './component/BgContext'




function App() {

  const { bg } = useBgContext();
  console.log(bg);

  return (
    <div className="App" >
      <style>{`body {background-image: url('${bg}');}`}</style>
      <ProvideAuth >
        <Router>
          <Switch >
            <Route exact path="/">  <Login /> </Route>
            <ProtectedRoute path='/pokedex/pokemon/:id/encounters'>
              <Encounters />
            </ProtectedRoute>
            <ProtectedRoute path='/pokedex/pokemon/:id'>
              <Pokemon />
            </ProtectedRoute>
            <ProvidePokemonContext >
              <ProtectedRoute path='/pokedex'>
                <Pokedex />
              </ProtectedRoute>
              <ProtectedRoute path='/conf'>
                <Conf />
              </ProtectedRoute>
            </ProvidePokemonContext>
            <Route path="/login">  <Login /> </Route>

          </Switch>
        </Router>
      </ProvideAuth>


    </div>



  );
}

export default App;
