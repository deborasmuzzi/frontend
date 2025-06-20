import{
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Outlet,
    Navigate
} from "react-router-dom";
import { Login, Cadastro, Home, Perfil, Usuario1} from "./pages";
import { AppLayout } from "./layouts";
import { useAuthStore } from "./stores/auth";

function RotasPrivadas (){
    const token = useAuthStore((state)=>state.token);

    if(token) return <Outlet/>;

    return <Navigate to = "/" replace />
}
const router = createBrowserRouter (
    createRoutesFromElements(
    <Route>
        <Route path="/" element={<AppLayout/>}>
            <Route element = {<RotasPrivadas/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="perfil" element={<Perfil/>}/>
            <Route path="usuario" element={<Usuario1/>}/>
            </Route>
            <Route index element={<Login/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>
        </Route>
    </Route>
    )
)

export default function Routes(){
    return <RouterProvider router={router}/>
}
