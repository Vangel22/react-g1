import { Routes, Route } from "react-router"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { ProtectedRoutes } from "./routes/ProtectedRoutes"
import { Dashboard } from "./components/Dashboard"
import ErrorPage from "./components/ErrorPage"

function App() {
  return (
    <>
     <Routes>
        <Route 
          path="/"
          element={<Login />}
        />
        {/* <ProtectedRoutes> */}
          {/* Nekoja komponenta -> togas imame Children */}
        {/* </ProtectedRoutes> */}
        {/* Na ovoj nacin kako children imame nested ruta i zatoa treba da koristime <Outlet /> */}
        <Route element={<ProtectedRoutes />}>
          {/* <Route 
            path="home"
            element={<Home />}
          /> */}
          <Route element={<Dashboard headingColor="blue" />} errorElement={ErrorPage}>
            <Route path="messages" element={<>Dashboard messages</>} />
            <Route path="tasks" element={<>Dashboard tasks</>} />
          </Route>
        </Route>
     </Routes>
    </>
  )
}

export default App
