import Dashboard from "./pages/Dashboard"
import Messages from "./pages/Messages"
import Products from "./pages/Products"
import Users from "./pages/Users"


const routes = [
    {path :'/' , element :<Dashboard/> },
    {path: '/users',element:<Users/>},
    {path: '/products',element:<Products/>},
    {path: '/messages',element:<Messages/>}
]

export default routes