import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Home, Login, PageNotFound, Signup } from '../Components'
import allPaths from './path'

const PrivateRoute = (props) => {
    const user = useSelector(state => state?.authReducer?.user)

    return (
        user ? <Route {...props} /> : <Redirect to={allPaths.LOGIN} />
    )
}

const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path={allPaths.HOME} exact component={Home} />
                <Route path={allPaths.LOGIN} exact component={Login} />
                <Route path={allPaths.REGISTER} exact component={Signup} />
                <Route path='/login/:404' exact component={PageNotFound} />
                <Route path='/:404' exact component={PageNotFound} />
            </Switch>
        </Router>
    )
}

export default Routes