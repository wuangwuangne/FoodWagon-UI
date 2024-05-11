import HeaderAdmin from "./HeaderAdmin";
import SideBarAdmin from "./SideBarAdmin";

function DefaultAdmin({ children }) {
    return (
        <div>
            <HeaderAdmin />
            <div className="flex">
                <SideBarAdmin />
                <div className="w-5/6 mx-20">{children}</div>
            </div>
        </div>
    );
}

export default DefaultAdmin;
