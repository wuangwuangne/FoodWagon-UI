import { useContext } from "react";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "~/components/AuthProvider";
import routes from "~/config/routes";

function HeaderAdmin() {
    const { logOut } = useContext(AuthContext);

    return (
        <header className="flex justify-end items-center py-4">
            <Link to={routes.newProduct} className="bg-primary text-white p-2 rounded-xl">
                Thêm sản phẩm
            </Link>
            <CiLogout size={50} className="p-4 hover:bg-gray-200 mx-4 rounded-full" onClick={logOut} />
        </header>
    );
}

export default HeaderAdmin;
