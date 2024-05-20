import { useContext, useEffect, useMemo, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

import * as paymentService from "~/services/paymentService";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import routes from "~/config/routes";
import { deleteOrder, successOrder } from "~/services/orderService";
import { AuthContext } from "~/components/AuthProvider";

function PaymentResult() {
    const {currentUser} = useContext(AuthContext)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const urlSearchParams = new URLSearchParams(window.location.href.split("?")[1]);
    const params = useMemo(() => {
        return {};
    }, []);

    urlSearchParams.forEach((value, key) => {
        params[key] = value;
    });

    useEffect(() => {
        paymentService
            .callbackVnPay({ param: params })
            .then((response) => {
                const splitData = response.data.id.split("-");
                let dataPayment = {
                    id: splitData[0],
                    address: splitData[1],
                    phone: splitData[2],
                    status: 1,
                };
                if (response.data.code === "00") {
                    setSuccess(true);
                    setMessage("Thanh toán thành công");
                    if (splitData[0] === "buyNow") {
                        dataPayment = {
                            id: splitData[1],
                            address: currentUser.address,
                            phone: currentUser.phone,
                            status: 1,
                        };
                    }
                    successOrder({ data: dataPayment })
                        .then((res) => console.log(res))
                        .catch((error) => console.log(error));
                } else if (response.data.code === 24) {
                    setError(true);
                    setMessage("Thanh toán không thành công");

                    if (splitData[0] === "buyNow") {
                        deleteOrder(splitData[1])
                            .then()
                            .catch((error) => console.log(error));
                    }
                }
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    setError(true);
                    setMessage("Thanh toán không thành công");
                }
            });
    }, [params, success,currentUser]);

    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <FaCheckCircle
                size={100}
                className={`transition ${!success ? "scale-0 absolute" : "scale-100"} text-green-600`}
            />
            <MdError size={100} className={`transition ${!error ? "scale-0 absolute" : "scale-100"} text-red-600`} />
            <p className="text-4xl font-bold mt-10">{message}</p>

            <Link className="mt-10" to={routes.home}>
                <CiHome size={50} className="hover:text-primary" />
            </Link>
        </div>
    );
}

export default PaymentResult;
