import { Outlet } from "react-router-dom";

const Home = () => {
    return (
    <>
        <Outlet /> {/*displays on all child elems*/} 
    </>
    
    );
};

export default Home;