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
    {path: '/dashboard',element:<PrivatePage><Dashboard/></PrivatePage>},
    {path: '/users',element:<PrivatePage><Users/></PrivatePage>},
    {path: '/products',element:<PrivatePage><Products/></PrivatePage>},
    {path: '/messages',element:<PrivatePage><Messages/></PrivatePage>},
    {path: '/tasks',element:<PrivatePage><Tasks/></PrivatePage>}
]

export default routes