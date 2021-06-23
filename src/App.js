import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Categoria from './pages/Categoria';
import Listar from './pages/Listar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Globalstyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/produtos" component={Produtos}/>
        <Route path="/categorias" component={Categoria}/>
        <Route path="/listar" component={Listar}/>
      </Switch>
      
      <Globalstyle />
    
    </BrowserRouter>

  );
}

export default App;
