// move router

const routes = {
    home: "/",
    searchName: "/search/:name",
    login: "/login",
    register: "/register",
    size: "/size",
    shoes: "/shoes",
    product: "/product/:id",
    sandals: "/sandals",
    accessory: "/accessory",
    cart: "/cart",
    policyMaintenance: "/chinh-sach-bao-hanh-bao-tri",
    policyReturn: "/chinh-sach-doi-tra-hang-va-hoan-tien",
    policySecurity: "/chinh-sach-bao-mat-thong-tin-ca-nhan",
    paymentResult: "/payment-result",
    profile: "/profile",
    editProfile: "/edit-profile",
    history: "/history",

    user: "/user",
    productAd: "/productAd",
    dashboard: "/dashboard",
    transaction: "/transaction",

    editUser: "/manager/user-edit/:id",
    newProduct: "/manager/new-product",
    detailOrder: "/manager/transaction/detail",
};

export default routes;
