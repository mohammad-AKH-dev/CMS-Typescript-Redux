import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Users from "./pages/Users"


const routes = [
    {path :'/' , element :<Dashboard/> },
    {path: '/users',element:<Users/>},
    {path: '/products',element:<Products/>}
]

export default routes