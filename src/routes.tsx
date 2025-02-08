import HomeRoute from "./pages/HomeRoute"



const routes = [
    {path : '/' , element : <HomeRoute/> , children: [
        {path : '/dashboard' , element : <HomeRoute/> },
        {path : '/users' }
    ]}
]

export default routes