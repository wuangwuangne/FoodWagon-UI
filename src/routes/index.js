import Accessory from '~/pages/Accessory';
import Cart from '~/pages/Cart';
import CheckOut from '~/pages/CheckOut/CheckOut';
import HomeAdmin from '~/pages/Dashboard/HomeAdmin';
import ProductAdmin from '~/pages/Dashboard/Product/ProductAdmin';
import Transaction from '~/pages/Dashboard/Transaction';
import UserAdmin from '~/pages/Dashboard/UserAdmin';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Change from '~/pages/Privacy/Change';
import MyInfo from '~/pages/Privacy/MyInfo';
import Trans from '~/pages/Privacy/Trans';
import Product from '~/pages/Product';
import Register from '~/pages/Register';
import Sandals from '~/pages/Sandals';
import Shoes from '~/pages/Shoes';
import Size from '~/pages/Size';

//Xem bth
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/size', component: Size },
    { path: '/shoes', component: Shoes },
    { path: '/product/:id', component: Product },
    { path: '/sandals', component: Sandals },
    { path: '/accessory', component: Accessory },
    { path: '/cart', component: Cart },
    { path: '/dashboard', component: HomeAdmin, layout: null },
    { path: '/checkout', component: CheckOut },
    { path: '/chinh-sach-bao-hanh-bao-tri', component: Trans },
    { path: '/chinh-sach-doi-tra-hang-va-hoan-tien', component: Change },
    { path: '/chinh-sach-bao-mat-thong-tin-ca-nhan', component: MyInfo },
    { path: '/user', component: UserAdmin, layout: null },
    { path: '/transaction', component: Transaction, layout: null },
    { path: '/productAd', component: ProductAdmin, layout: null },
];

// Đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
