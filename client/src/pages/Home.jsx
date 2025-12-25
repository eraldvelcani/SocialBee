import { Outlet } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <Outlet /> {/*displays on all child elems*/} 
    </div>
    
    );
};

export default Home;