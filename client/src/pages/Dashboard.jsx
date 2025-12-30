import { Outlet } from "react-router-dom";
import { MobileBar, DesktopBar, Navbar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext(); //context step 1: creating context to use toggleSidebar in jsx components 

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <DashboardContext.Provider value={ { showSidebar, toggleSidebar } }> {/* context step 2: now all jsx components below can use this value */}
            <Wrapper>
                <main className="dashboard">
                    <MobileBar />
                    <DesktopBar />
                    <div className="dashboard-page">
                        <Navbar />
                        <Outlet />
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext) //context step 3: export
export default Dashboard;