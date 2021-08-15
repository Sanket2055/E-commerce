
import './App.css';
import { Route, Switch } from 'react-router';
import HomePage from './pages/homepage/homepage.components';
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
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route  path='/shop/hats' component={HatsPage}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
