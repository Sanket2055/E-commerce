
import './App.css';
import { Route, Switch } from 'react-router';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
const HatsPage=()=>{
  return(
    <div>
      <h1>hatspage</h1>
    </div>
  )
}
function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route  path='/shop' component={ShopPage}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
