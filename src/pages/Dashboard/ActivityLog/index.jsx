import { MessageSquare, Mail, Clock } from "lucide-react";

const ActivityLog = () => {
    const activities = [
        {
            date: "TODAY",
            entries: [
                {
                    icon: "msg",
                    content: (
                        <>
                            <span className="text-indigo-600 font-semibold">Christian Wood</span>{" "}
                            Sent Message to{" "}
                            <span className="text-indigo-600 font-semibold">Nikita Houston</span>
                        </>
                    ),
                    time: "1 min ago",
                },
                {
                    icon: "reply",
                    content: (
                        <>
                            <span className="text-indigo-600 font-semibold">Rohan Walker</span>{" "}
                            Replay your message <span className="text-indigo-600">Ebay</span>
                        </>
                    ),
                    time: "1 min ago",
                },
            ],
        },
        {
            date: "YESTERDAY",
            entries: [
                {
                    icon: "accept",
                    content: (
                        <>
                            <span className="text-indigo-600 font-semibold">Christian Wood</span>{" "}
                            Accept Order from <span className="text-indigo-600">Amazon</span>
                        </>
                    ),
                    time: "12:30PM",
                },
            ],
        },
        {
            date: "25 MAY 2024",
            entries: [
                {
                    icon: "accept",
                    content: (
                        <>
                            <span className="text-indigo-600 font-semibold">Christian Wood</span>{" "}
                            Accept Order from <span className="text-indigo-600">Walmart</span>
                        </>
                    ),
                    time: "11:20AM",
                },
            ],
        },
        {
            date: "23 MAY 2024",
            entries: [
                {
                    icon: "accept",
                    content: (
                        <>
                            <span className="text-indigo-600 font-semibold">Christian Wood</span>{" "}
                            Accept Order from <span className="text-indigo-600">Walmart</span>
                        </>
                    ),
                    time: "11:20AM",
                },
            ],
        },
        {
            date: "20 MAY 2024",
            entries: [
                {
                    icon: "accept",
                    content: (
                        <>
                            <span className="text-indigo-600 font-semibold">Christian Wood</span>{" "}
                            Accept Order from <span className="text-indigo-600">Walmart</span>
                        </>
                    ),
                    time: "11:20AM",
                },
            ],
        },
        {
            date: "20 MAY 2024",
            entries: [
                {
                    icon: "accept",
                    content: (
                        <>
                            <span className="text-indigo-600 font-semibold">Christian Wood</span>{" "}
                            Accept Order from <span className="text-indigo-600">Walmart</span>
                        </>
                    ),
                    time: "11:20AM",
                },
            ],
        },
    ];

    const renderIcon = (type) => {
        switch (type) {
            case "msg":
                return <MessageSquare />;
            case "reply":
                return <MessageSquare />;
            case "accept":
                return <MessageSquare />;
            default:
                return <Clock />;
        }
    };

    return (
        <div className="rounded-xl OrderStatus activityLog border_gray">
            <div className="flex justify-between items-center OrderStatusHeader ">
                <h2 className="text-lg font-semibold">Recent Activities</h2>
                <div className="flex space-x-1 bg-gray-100 collapseBtn">
                    <button className="text-sm font-medium bg-white shadow">
                        Message
                    </button>
                    <button className="text-sm font-medium text-gray-600">
                        Email
                    </button>
                </div>
            </div>

            <div className="chartBox">
                {activities.map((group, i) => (
                    <div key={i} >
                        <p className="text-xs font-semibold chartDate">{group.date}</p>
                        <ul className="space-y-2">
                            {group.entries.map((entry, j) => (
                                <li key={j} className="flex items-start mb-4 space-x-2">
                                    <div className="messageIcon flex items-center content-center rounded-xl">{renderIcon(entry.icon)}</div>
                                    <div className="text-sm messageLine text-gray-800 flex-1">
                                        {entry.content} <span className="text-gray-500">• {entry.time}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityLog;
