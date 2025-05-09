import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import {
    Users,
    Sparkles,
    Clock,
    Truck,
    CheckCheck,
    RotateCcw,
} from "lucide-react";
import All from "../../../assets/All.png";
import New from "../../../assets/New.png";
import Pending from "../../../assets/Pending.png";
import Dispatched from "../../../assets/Dispatched.png";
import Cancelled from "../../../assets/Cancelled.png";
import Delivered from "../../../assets/Delivered.png";

const data = [
    { name: "New", value: 50 },
    { name: "Pending", value: 50 },
    { name: "Dispatched", value: 50 },
    { name: "Cancelled", value: 50 },
    { name: "Delivered", value: 123 },
];

const statusData = [
    { icon: <img src={All} alt="all" />, label: "All", value: 250 },
    { icon: <img src={New} alt="New" />, label: "New", value: 50 },
    { icon: <img src={Pending} alt="Pending" />, label: "Pending", value: 50 },
    { icon: <img src={Dispatched} alt="Dispatched" />, label: "Dispatched", value: 50 },
    { icon: <img src={Delivered} alt="Delivered" />, label: "Delivered", value: 123 },
    { icon: <img src={Cancelled} alt="Cancelled" />, label: "Cancelled", value: 50 },
];

const COLORS = ["#f97316", "#facc15", "#10b981", "#6366f1", "#8b5cf6"];

const OrderStatus = () => {
    return (
        <div className="rounded-xl OrderStatus border_gray ">
            <div className="flex justify-between OrderStatusHeader items-center">
                <h2 className="font-semibold">Order Status</h2>
                <div className="flex gap-2 items-center">
                    <div className="formInput phoneInput">
                        <div className="flex items-center">
                            <select className="border  focus:outline-none rounded-lg p-2 text-sm">
                                <option value="US">All Categories</option>
                                <option value="IN">Single Categories</option>
                            </select>
                        </div>
                    </div>
                    <div className="formInput">
                        <input
                            type="date"
                            defaultValue="Jillali@Onechanneladmin.Com"
                            className="mt-1 w-full  font-normal focus:outline-none px-3 py-2 text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-2">
                    {statusData.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between statusBo infoStatusBox text-sm"
                        >
                            <div className="flex items-start">
                                {item.icon}
                                <div className="fex  flex-col">
                                    <label className="font-medium">{item.label}</label>
                                    <p className="font-semibold">{item.value}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="w-full pieChart h-full">
                    <ResponsiveContainer>
                        <PieChart width={342} height={342} >
                            <Tooltip />
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={100}
                                outerRadius={130}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="text-center pieValue font-semibold">250</div>
                </div>
            </div>
        </div>
    );
};

export default OrderStatus;
