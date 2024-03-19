import Home from '~/pages/Home';
import Item from '~/pages/Home/Item';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

//Xem bth
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'items', component: Item },
    { path: 'login', component: Login, layout: null },
    { path: 'register', component: Register, layout: null },
];

// Đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
