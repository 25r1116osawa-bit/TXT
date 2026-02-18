import { BrowserRouter ,Route,Switch} from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"

export const Router = ()=>{

    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Top/>
            </Route>
            <Route  path="/users">
                <Users/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}