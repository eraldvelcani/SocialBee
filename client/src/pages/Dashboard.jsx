import { Outlet } from "react-router-dom";
import { MobileBar, DesktopBar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";

const Dashboard = () => {
    return (
        <Wrapper>
            <main className="dashboard">
                <MobileBar />
                <DesktopBar />
                <div className="dashboard-page">
                    <Outlet />
                </div>
            </main>
        </Wrapper>
    );
};

export default Dashboard;