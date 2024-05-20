import { useEffect, useState } from "react";
import Bars from "~/components/Chart/Bars";
import { getMonthIncome } from "~/services/orderService";
function Dashboard() {
    const [labelsMonths, setLabelsMonths] = useState([]);
    const [dataBar, setDataBar] = useState([]);

    useEffect(() => {
        getMonthIncome()
            .then((data) => {
                const filteredDataByMonth = [];
                const filteredDataBarByMonth = [];

                for (let i = 1; i <= 12; i++) {
                    const filteredMonthData = data.data.find((item) => item.month === `Tháng ${i}`);
                    if (filteredMonthData) {
                        filteredDataByMonth.push(filteredMonthData.month);
                        filteredDataBarByMonth.push(filteredMonthData.income);
                    }
                }

                setLabelsMonths(filteredDataByMonth);
                setDataBar(filteredDataBarByMonth);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="flex flex-col items-center w-full my-10">
            <p className="font-bold">Doanh thu hàng tháng</p>
            <Bars title={"Doanh thu"} labels={labelsMonths} dataBar={dataBar} />
        </div>
    );
}

export default Dashboard;
