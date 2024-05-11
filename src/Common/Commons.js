export const Commons = {
    arrayList() {
        const category = [
            {
                title: "SHOES",
                value: "SHOES",
            },
            {
                title: "SANDALS",
                value: "SANDALS",
            },
            {
                title: "ACCESSORY",
                value: "ACCESSORY",
            },
        ];

        const trademark = [
            { title: "Adidas", value: "Adidas" },
            { title: "Nike", value: "Nike" },
            { title: "Vans", value: "Vans" },
            { title: "Jordan", value: "Jordan" },
        ];

        return { category, trademark };
    },

    formatTime(time) {
        const date = new Date(time);
        return date.toLocaleDateString("vi-vn");
    },

    formatTimeDay(time) {
        const date = new Date(time);
        return date.getDate();
    },

    formatTimeMonth(time) {
        const date = new Date(time);
        return date.getMonth() + 1;
    },

    formatTimeYear(time) {
        const date = new Date(time);
        return date.getFullYear();
    },

    formatPrice(price) {
        return price ? price.toLocaleString("vi-vn") : 0;
    },
};
