import React from "react";
import style from './styles/fixed.module.css';
import GerarFicha from './pages/GerarFicha';
import GemialidadeWeasley from './pages/GemialidadeWeasley'
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <div class={style.container + ' container'}>
            <h1><Link to="/">Hogwarts HM</Link></h1>
            <nav id="desktop">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/gemialidadeweasley">Gemialidade Weasley</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Switch>
          <Route path="/gemialidadeweasley">
            <GemialidadeWeasley />
          </Route>
          <Route path="/gerarficha">
            <GerarFicha />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer>
          <div class={style.container + ' container'}>
            <p>Amanda © 2004-{new Date().getFullYear()}</p>
            <a href="https://brennonaleatorio.com.br" >⊰➛ Desenvolvedor: Brennon Oliveira</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}