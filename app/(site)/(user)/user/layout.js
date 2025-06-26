"use client"
import Breadcrumb from "@/app/component/common/breadcrumb";
import SideBar from "./components/common/sitdber/page";

const Layout = ({ children }) => {
  const page = [
    { title: "Home", link: "/" },
    { title: "User Dashboard", link: "/user" },
  ];
    return (
           <div className="min-h-screen mt-[150px] bg-white">
             <Breadcrumb title={"User Dashboard"} page={page} />
             <div className="container flex flex-row py-[50px] gap-[50px]">
                    <SideBar />

                    <div className="h-fit !w-full">
                        {children}
                    </div>
            </div>
           </div>
    );
};



export default Layout;