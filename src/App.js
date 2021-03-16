import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
import client from "./config/graphqlConfig"
import { PokemonList, PokemonDetail, MyPokemon, MyPokemonDetail } from "./pages"
import { Navbar, MobileNavbar } from "./components"
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Navbar/>
          <MobileNavbar/>
          <Switch>
            <Route exact path="/">
              <PokemonList/>
            </Route>
            <Route exact path="/my-pokemon-list">
              <MyPokemon/>
            </Route>
            <Route path="/my-pokemon-list/:name">
              <MyPokemonDetail/>
            </Route>
            <Route path="/:name">
              <PokemonDetail/>
            </Route>
          </Switch>
        </Provider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
