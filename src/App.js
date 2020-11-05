import Login from '../src/components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import { Route,Link,useLocation} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className="App">
        <Route path="/" exact component={Login}></Route>
        <Route path="/Dashboard" component={Dashboard}></Route>
      </div>
    
  );
}

export default App;
