import { httpRequest } from "~/utils/httprequest";

export const newProduct = async (data) => {
    try {
        const token = await window.localStorage.getItem("token");
        const res = await httpRequest.post("product/new-product", data, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return res.data;
    } catch (error) {
        return error;
    }
};

export const getAllProduct = async ({ page, perPage, name, price, size, category, discount, trademark, sortBy }) => {
    try {
        const res = await httpRequest.get("product/get-all-product", {
            params: {
                page,
                per_page: perPage,
                name,
                category,
                discount,
                sortBy,
                trademark,
                size,
                price,
            },
        });
        return res.data;
    } catch (error) {
        return error;
    }
};

export const getProductById = async ({ id }) => {
    try {
        const res = await httpRequest.get(`product/get-product/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
};

export const uploadProduct = async ({ data, id }) => {
    try {
        const res = await httpRequest.put(`product/edit-product/${id}`, data, {
            headers: {
                Authorization: "Bearer " + localStorage.token,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};

export const deleteProduct = async ({ id }) => {
    try {
        const res = await httpRequest.delete(`product/delete-product/${id}`, {
            headers: {
                Authorization: "Bearer " + localStorage.token,
            },
        });

        return res;
    } catch (error) {
        return error;
    }
};
