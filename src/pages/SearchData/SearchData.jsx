import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paginate from "~/components/Paginate";
import SideBarUser from "~/components/SideBarUser";
import { getAllProduct } from "~/services/productService";

function SearchData() {
    const { name } = useParams();
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [trademark, setTrademark] = useState([]);
    const [size, setSize] = useState([]);
    const [searchPrice, setSearchPrice] = useState("");

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getAllProduct({
            size,
            page: currentPage,
            perPage: 10,
            sortBy: selectedOption,
            trademark: trademark,
            price: searchPrice,
            name,
        })
            .then((product) => {
                setData(product.data);
                setTotalPage(product.totalPage);
            })
            .catch((error) => console.log(error));
    }, [currentPage, selectedOption, trademark, size, searchPrice, name]);

    return (
        <>
            <SideBarUser
                data={data}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                trademark={trademark}
                setTrademark={setTrademark}
                size={size}
                setSize={setSize}
                searchPrice={searchPrice}
                setSearchPrice={setSearchPrice}
            />
            <Paginate totalPage={totalPage} handlePageChange={handlePageChange} currentPage={currentPage} />
        </>
    );
}

export default SearchData;
