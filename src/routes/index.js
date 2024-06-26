import { DefaultAdmin } from "~/Layout";
import routes from "~/config/routes";

import Accessory from "~/pages/Accessory";
import { Dashboard, Transaction, UserAdmin } from "~/pages/Admin";
import NewProduct from "~/pages/Admin/NewProduct";
import ProductAdmin from "~/pages/Admin/ProductAdmin";
import DetailOrder from "~/pages/Admin/Transaction/DetailOrder";
import { Login, Register } from "~/pages/Auth";
import Cart from "~/pages/Cart";
import EditUser from "~/pages/EditUser";
import HistoryOrder from "~/pages/HistoryOrder";
import Home from "~/pages/Home";
import PaymentResult from "~/pages/PaymentResult";
import Change from "~/pages/Privacy/Change";
import MyInfo from "~/pages/Privacy/MyInfo";
import Trans from "~/pages/Privacy/Trans";
import Product from "~/pages/Product";
import Profile from "~/pages/Profile";
import EditProfile from "~/pages/Profile/EditProfile";
import Sandals from "~/pages/Sandals";
import SearchData from "~/pages/SearchData";
import Shoes from "~/pages/Shoes";
import Size from "~/pages/Size";

//Xem bth
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.login, component: Login, Layout: null },
    { path: routes.register, component: Register, Layout: null },
    { path: routes.size, component: Size },
    { path: routes.shoes, component: Shoes },
    { path: routes.searchName, component: SearchData },
    { path: routes.product, component: Product },
    { path: routes.sandals, component: Sandals },
    { path: routes.accessory, component: Accessory },
    { path: routes.cart, component: Cart },
    { path: routes.policyMaintenance, component: Trans },
    { path: routes.policyReturn, component: Change },
    { path: routes.policySecurity, component: MyInfo },
    { path: routes.paymentResult, component: PaymentResult },
    { path: routes.profile, component: Profile },
    { path: routes.editProfile, component: EditProfile },
    { path: routes.history, component: HistoryOrder },

    // Admin
    { path: routes.dashboard, component: Dashboard, Layout: DefaultAdmin },
    { path: routes.user, component: UserAdmin, Layout: DefaultAdmin },
    { path: routes.transaction, component: Transaction, Layout: DefaultAdmin },
    { path: routes.productAd, component: ProductAdmin, Layout: DefaultAdmin },
    { path: routes.editUser, component: EditUser, Layout: null },
    { path: routes.newProduct, component: NewProduct, Layout: DefaultAdmin },
    { path: routes.detailOrder, component: DetailOrder, Layout: DefaultAdmin },
];

// Đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
