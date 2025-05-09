import { Package, Heart, Database, Clock } from 'lucide-react';


const stats = [
    {
        title: 'Total Orders',
        value: 123,
        icon: <Package className="text-pink-600" />,
        change: '+28%',
        changeColor: 'text-green-500',
    },
    {
        title: 'Total Taken',
        value: 123,
        icon: <Heart className="text-pink-600" />,
        change: '-15%',
        changeColor: 'text-red-500',
    },
    {
        title: 'Total Revenue',
        value: 123,
        icon: <Database className="text-pink-600" />,
        change: '+28%',
        changeColor: 'text-green-500',
    },
    {
        title: 'Pending Orders',
        value: '$1234.99',
        icon: <Clock className="text-pink-600" />,
        change: '+28%',
        changeColor: 'text-red-500',
    },
];

const TradStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4 gap-4 p-4">
            
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="rounded-xl shadow-md tradingBox overflow-hidden border_gray"
                >
                    <div className="flex items-center tradTop p-4">
                        <div className="p-2 bg-gradient-to-r from-pink-500 tradIcon to-yellow-400 rounded-xl text-white">
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 titleTxt">{stat.title}</p>
                            <p className="text-2xl font-bold text-gray-800 valueTxt">{stat.value}</p>
                        </div>
                    </div>
                    <div className="flex justify-between tradBottom items-center py-2 px-4">
                        <span className={`${stat.changeColor} font-semibold`}>
                            {stat.change}
                        </span>
                        <span>From The Last Month</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TradStats;
