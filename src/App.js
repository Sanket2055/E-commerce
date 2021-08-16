
import './App.css';
import { Route, Switch } from 'react-router';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
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
      <Route  path='/signin' component={SignInAndSignUpPage}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
