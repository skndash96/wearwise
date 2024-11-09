import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout : React.FC = () => {
    return (
        <div id="wrapper">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;