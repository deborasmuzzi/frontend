import{
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";
import { Login, Cadastro, Home } from "./pages";
import { AppLayout } from "./layouts";

const router = createBrowserRouter (
    createRoutesFromElements(
    <Route>
        <Route path="/" element={<AppLayout/>}>
            <Route index element={<Login/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>
        </Route>
    </Route>
    )
)

export default function Routes(){
    return <RouterProvider router={router}/>
}