import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Create from './Create';
import Blogdetails from './Blogdetails';
import NotFound from './NotFound';
import AdminPage from "./AdminPage"
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
          <Switch>
            <Route exact path = "/">
            <Home/>
            </Route>
            <Route path = "/create">
            <Create/>
            </Route>
            <Route path = "/blogs/:id">
            <Blogdetails/>
            </Route>
            <Route path = "/mohamedistheadmin/:id">
            <AdminPage/>
            </Route>
            <Route path = "*">
            <NotFound/>
            </Route>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
