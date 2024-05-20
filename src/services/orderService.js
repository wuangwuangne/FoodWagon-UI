import { httpRequest } from "~/utils/httprequest";

export const newOrder = async (data) => {
    try {
        const token = await window.localStorage.getItem("token");
        const res = await httpRequest.put("order/new-order", data, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return res.data;
    } catch (error) {
        return error;
    }
};

export const getAllOrder = async ({ page, perPage, userId, productId }) => {
    try {
        const res = await httpRequest.get("order/get-all-order", {
            headers: { Authorization: "Bearer " + localStorage.token },
            params: { page, per_page: perPage, userId, productId },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};

export const getMyOrder = async (data) => {
    try {
        const res = await httpRequest.get("order/get-my-order", {
            headers: { Authorization: "Bearer " + localStorage.token },
        });
        return res.data;
    } catch (error) {
        return error;
    }
};

export const getHistory = async (data) => {
    try {
        const res = await httpRequest.get("order/get-history", {
            headers: { Authorization: "Bearer " + localStorage.token },
        });
        return res.data;
    } catch (error) {
        return error;
    }
};

export const cancelOne = async (id) => {
    try {
        const res = await httpRequest.delete(`order/cancel-one/${id}`, {
            headers: { Authorization: "Bearer " + localStorage.token },
        });

        return res;
    } catch (error) {
        return error;
    }
};

export const buyNow = async (data) => {
    try {
        const res = await httpRequest.post("order/buy-now", data, {
            headers: { Authorization: "Bearer " + localStorage.token },
        });
        return res.data;
    } catch (error) {
        return error;
    }
};

export const successOrder = async ({data}) => {
    try {
        const res = await httpRequest.put(`order/success-order/${data.id}`,data, {
            headers: { Authorization: "Bearer " + localStorage.token },
        });

        return res;
    } catch (error) {
        return error;
    }
};

export const deleteOrder = async (id) => {
    try {
        const res = await httpRequest.delete(`order/delete/${id}`, {
            headers: { Authorization: "Bearer " + localStorage.token },
        });

        return res;
    } catch (error) {
        return error;
    }
};

export const getMonthIncome = () => {
    try {
        const res = httpRequest.get(`order/month-income`, {
            headers: { authorization: "Bearer " + localStorage.token },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getTopIncome = () => {
    try {
        const res = httpRequest.get(`order/top-income`, {
            headers: { authorization: "Bearer " + localStorage.token },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
