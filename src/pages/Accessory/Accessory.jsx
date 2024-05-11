import { useEffect, useState } from "react";
import Paginate from "~/components/Paginate";
import SideBarUser from "~/components/SideBarUser";
import { getAllProduct } from "~/services/productService";

function Accessory() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [trademark, setTrademark] = useState([]);
    const [searchPrice, setSearchPrice] = useState("");

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };

    useEffect(() => {
        getAllProduct({
            page: currentPage,
            perPage: 10,
            category: "ACCESSORY",
            sortBy: selectedOption,
            trademark: trademark,
            price: searchPrice,
        })
            .then((product) => {
                setData(product.data);
                setTotalPage(product.totalPage);
            })
            .catch((error) => console.log(error));
    }, [currentPage, selectedOption, trademark, searchPrice]);

    return (
        <>
            <SideBarUser
                data={data}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                trademark={trademark}
                setTrademark={setTrademark}
                searchPrice={searchPrice}
                setSearchPrice={setSearchPrice}
            />
            <Paginate totalPage={totalPage} handlePageChange={handlePageChange} currentPage={currentPage} />
        </>
    );
}

export default Accessory;
