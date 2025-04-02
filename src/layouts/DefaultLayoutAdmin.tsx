import { Outlet } from "react-router-dom";
import Header from "../components/admin/Header";
import Footer from "../components/admin/Footer";
import Sidebar from "../components/admin/Sidebar";
function DefaultLayoutAdmin() {
    return ( 
        <>
            <Header />
            <main className="flex">
                <Sidebar />
                <Outlet />
            </main>
            <Footer />
        </>
     );
}

export default DefaultLayoutAdmin;