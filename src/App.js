import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Categoria from './pages/Categoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Globalstyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/produtos" component={Produtos}/>
        <Route path="/categorias" component={Categoria}/>
      </Switch>
      
    
    
    </BrowserRouter>

  );
}

export default App;
