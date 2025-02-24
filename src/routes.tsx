import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Messages from "./pages/Messages"
import PrivatePage from "./pages/PrivatePage"
import Products from "./pages/Products"
import Tasks from "./pages/Tasks"
import Users from "./pages/Users"


const routes = [
    {path :'/' , element :<PrivatePage><Dashboard/></PrivatePage> },
    {path: '/login',element:<Login/>},
    {path: '/dashboard',element:<Dashboard/>},
    {path: '/users',element:<Users/>},
    {path: '/products',element:<Products/>},
    {path: '/messages',element:<Messages/>},
    {path: '/tasks',element:<Tasks/>}
]

export default routes