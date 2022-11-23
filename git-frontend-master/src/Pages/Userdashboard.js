import Dashboard from "./Userdashboard/dashboard"
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Application from "./Userdashboard/application"

const Userdashboard=()=>
{

    return(<div>
              {/* <BrowserRouter>
                <Routes>
                    <Route path='/application' element={<Application></Application>}></Route>
                    <Route path='/userdashboard' element={<Dashboard></Dashboard>}></Route>

                </Routes>
                </BrowserRouter> */}
        <Dashboard></Dashboard>
    </div>
    )
}
export default Userdashboard