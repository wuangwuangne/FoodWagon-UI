import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Commons } from "~/Common/Commons";
import TextInput from "~/components/TextInput";
import { newProduct, uploadProduct } from "~/services/productService";

const startValue = 35;
const endValue = 45;
function NewProduct() {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState({
        name: "",
        price: 0,
        description: "",
        category: "",
        discount: 0,
        size: [],
        discountDate: "",
        imageUrl: "",
        trademark: "",
    });
    const [image, setImage] = useState("");

    const onChange = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };

    const onChangeImage = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const img = URL.createObjectURL(file);
            setImage(img);

            const newData = { ...data };
            newData.imageUrl = file;
            setData(newData);
        }
    };

    const onCheckSize = (event) => {
        const { value, checked } = event.target;
        const updatedSize = [...data.size];

        if (checked) {
            if (!updatedSize.includes(value)) {
                updatedSize.push(value);
            }
        } else {
            const index = updatedSize.indexOf(value);
            if (index !== -1) {
                updatedSize.splice(index, 1);
            }
        }

        setData((prevData) => ({
            ...prevData,
            size: updatedSize,
        }));
    };

    const checkboxes = [];
    for (let i = startValue; i <= endValue; i += 1) {
        checkboxes.push(
            <div key={i} className="pr-10">
                <div className="flex">
                    <input
                        className="input-size mr-1"
                        type="checkbox"
                        value={i}
                        checked={data.size.includes(i.toString())}
                        onChange={onCheckSize}
                        id={i}
                    />
                    <label htmlFor={i}>{i}</label>
                </div>
            </div>,
        );
    }

    useEffect(() => {
        if (location?.state?.status === "Edit") {
            setData(location?.state?.dataProduct);
            setImage(location?.state?.dataProduct.imageUrl);
        }
    }, [location?.state?.status, location?.state?.dataProduct]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("discount", data.discount);
        formData.append("size", data.size);
        formData.append("discountDate", data.discountDate);
        formData.append("imageUrl", data.imageUrl);
        formData.append("trademark", data.trademark);

        if (location?.state?.status === "Edit") {
            await uploadProduct({ data: formData, id: location?.state?.dataProduct._id })
                .then((product) => {
                    alert("Update success");
                    navigate(-1);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            await newProduct(formData)
                .then((product) => {
                    alert("Add success");
                    navigate(-1);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <form onSubmit={onSubmit}>
            {image && <img src={image} alt="" className="w-[200px] h-auto mb-4" />}
            <TextInput type="text" required={true} name="name" title="Name" value={data.name} onChange={onChange} />

            <TextInput
                type="Number"
                required={true}
                name="price"
                title="Price"
                value={data.price}
                onChange={onChange}
            />

            <TextInput
                type="text"
                name="description"
                title="Description"
                value={data.description}
                onChange={onChange}
            />

            <select
                name="category"
                className="w-full border mb-4 py-2 px-2 rounded-lg"
                onChange={onChange}
                value={data.category}
                required
            >
                <option value="">Loại</option>
                {Commons.arrayList().category.map((item) => (
                    <option value={item.value} key={item.title}>
                        {item.title}
                    </option>
                ))}
            </select>

            <select
                name="trademark"
                className="w-full border mb-4 py-2 px-2 rounded-lg"
                onChange={onChange}
                value={data.trademark}
                required
            >
                <option value="">Hãng</option>
                {Commons.arrayList().trademark.map((item) => (
                    <option value={item.value} key={item.title}>
                        {item.title}
                    </option>
                ))}
            </select>

            <TextInput type="number" name="discount" title="Discount" value={data.discount} onChange={onChange} />

            {data.category !== "ACCESSORY" && <div className="flex flex-wrap w-[900px] mx-2 mb-4">{checkboxes}</div>}

            <TextInput
                type="Number"
                name="discountDate"
                title="Number of discount days"
                value={data.discountDate}
                onChange={onChange}
            />

            <div className="relative">
                <div className="flex flex-col mb-4">
                    <label className="border rounded-lg p-4" htmlFor="imageUrl">
                        Tải ảnh lên
                    </label>
                </div>
                <input
                    type="file"
                    name="imageUrl"
                    id="imageUrl"
                    onChange={onChangeImage}
                    className="opacity-0 h-1 w-1 absolute left-0"
                    required={!image}
                />
            </div>

            <button type="submit" className="w-full bg-green-500 py-2 font-bold text-white rounded-lg">
                {location?.state?.status === "Edit" ? "Edit product" : "Add product"}
            </button>
        </form>
    );
}

export default NewProduct;
