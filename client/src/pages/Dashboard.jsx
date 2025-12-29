import { Outlet } from "react-router-dom";
import { MobileBar, DesktopBar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext(); //context step 1: creating context to use toggleSidebar in props 

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <DashboardContext.Provider value={ { showSidebar } }> {/* context step 2: now all props below can use this value */}
            <Wrapper>
                <main className="dashboard">
                    <MobileBar />
                    <DesktopBar />
                    <div className="dashboard-page">
                        <Outlet />
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext) //context step 3: export
export default Dashboard;