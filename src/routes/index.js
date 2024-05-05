import Accessory from '~/pages/Accessory';
import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
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
];

// Đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
