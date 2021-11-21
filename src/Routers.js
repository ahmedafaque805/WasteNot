import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from "./Views/Home/Home";
import ProductEdit from "./Views/ProductEdit/ProductEdit";
import Login from "./Views/Login/Login";
import Verification from "./Views/Verification/Verification";

function Routers() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/home' component={Home} />
                    <Route path='/productEdit' component={ProductEdit} />
                    <Route path='/verification' component={Verification} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routers