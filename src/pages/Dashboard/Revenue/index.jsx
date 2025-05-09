import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    LabelList,
} from "recharts";

const data = [
    { name: "Jan", revenue: 589.12 },
    { name: "Feb", revenue: 840.2 },
    { name: "Mar", revenue: 698 },
    { name: "Apr", revenue: 203 },
    { name: "May", revenue: 400.01 },
    { name: "Jun", revenue: 920.12 },
    { name: "Jul", revenue: 398 },
    { name: "Aug", revenue: 882 },
    { name: "Sep", revenue: 390 },
    { name: "Oct", revenue: 910 },
    { name: "Nov", revenue: 410.12 },
];

const Revenue = () => {
    return (
        <div className="rounded-xl OrderStatus Revenue border_gray ">
            <div className="flex justify-between OrderStatusHeader items-center">
                <div className="flex space-x-1 bg-gray-100 collapseBtn">
                    <button className="text-sm font-medium bg-white shadow">
                        Revenue
                    </button>
                    <button className="text-sm font-medium text-gray-600">
                        Orders
                    </button>
                    <button className="text-sm font-medium text-gray-600">
                        Customers
                    </button>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="formInput phoneInput">
                        <div className="flex items-center">
                            <select className="border bg-white focus:outline-none rounded-lg p-2 text-sm">
                                <option value="US">All Categories</option>
                                <option value="IN">Single Categories</option>
                            </select>
                        </div>
                    </div>
                    <div className="formInput">
                        <input
                            type="date"
                            defaultValue="Jillali@Onechanneladmin.Com"
                            className="mt-1 w-full bg-white font-normal focus:outline-none px-3 py-2 text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="">
                <div className="flex mb-4 justify-between items-center OrderStatusHeader ">
                    <h2 className="text-lg font-semibold">Recent Activities</h2>
                    <div className="flex space-x-1 bg-gray-100 ">
                        
                    </div>
                </div>

                <div className="w-full pieChart h-full">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis tickFormatter={(v) => `$${v}`} />
                            <Tooltip formatter={(value) => `$${value}`} />
                            <Bar dataKey="revenue" fill="#6D28D9" radius={[4, 4, 0, 0]}>
                                <LabelList
                                    dataKey="revenue"
                                    position="top"
                                    formatter={(v) => `$${v.toFixed(2)}`}
                                    style={{ fill: "#111", fontSize: "12px" }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>

                    <div className="text-center text-gray-500 text-xs mt-2">• 2023</div>
                </div>
            </div>
        </div>
    );
};

export default Revenue;
