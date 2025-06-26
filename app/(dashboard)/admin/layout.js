import { MyProvider } from "@/app/context/Context ";
import AdminHeader from "../components/layout/admin-header";
import SideBar from "../components/layout/sideBar";

const Layout = ({ children }) => {

    return (
        <MyProvider >
            <div className="min-h-screen flex flex-row bg-[#F5F6FA]">
                <div>
                    <SideBar />
                </div>

                <div className="w-full">
                    <AdminHeader />
                    <div className="h-fit">
                        {children}
                    </div>
                </div>
            </div>
        </MyProvider>
    );
};



export default Layout;