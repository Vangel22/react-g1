import { useState } from "react";
import { Outlet } from "react-router"
// Dashboard.module.css -> klasa flex i imam klasa grid
// className
// style

const Dashboard = ({ headingColor, isFlex }) => {
    const [button, setButton] = useState(false);
    console.log("heading color", headingColor);
    return(
        <div>
            <h1 style={{ color: headingColor }}>Welcome to Dashboard</h1>
            <button style={{ background: button ? "green" : "red" }} onClick={() => setButton(!button)}>Play</button>

            {isFlex ?
                <div className="flex">
                    flex test
                </div> :
                <div className="grid">
                    grid test
                </div>
            }
        
           
            <Outlet />
        </div>
    )
}

Dashboard.defaultProps = {
   headingColor: "red",
   isFlex: false
};

export { Dashboard }