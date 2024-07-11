import { Outlet } from "react-router"

const Dashboard = () => {
    return(
        <div>
            <h1>Welcome to Dashboard</h1>
            <Outlet />
        </div>
    )
}

export { Dashboard }