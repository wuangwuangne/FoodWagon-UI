import Home from '~/pages/Home';
import Item from '~/pages/Item';

//Xem bth
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'items', component: Item },
];

// Đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
