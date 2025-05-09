import {
    Save,
    Plus,
    MinusCircle,
    RefreshCcw,
} from "lucide-react";
import { useState } from "react";

const BusinessDetailsForm = () => {
    const [phoneNumbers, setPhoneNumbers] = useState([
        { country: "US", number: "+1 344 434 4455" },
        { country: "US", number: "+1 344 434 4455" },
    ]);

    const addPhone = () =>
        setPhoneNumbers([...phoneNumbers, { country: "US", number: "" }]);

    const removePhone = (index) =>
        setPhoneNumbers(phoneNumbers.filter((_, i) => i !== index));

    return (
        <div className="border_gray rounded-xl businessDetailsForm shadow p-6 w-full">
            <div className="flex justify-between businessHead items-center">
                <h2 className="text-lg font-semibold">Business Details</h2>
                <button className="flex items-center">
                    <Save className="w-4 h-4" />
                    <span>Save & Close</span>
                </button>
            </div>

            <div className="formInput">
                <label className="text-sm font-medium ">Account Name</label>
                <input
                    type="text"
                    defaultValue="TRUCK GEAR"
                    className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none"
                />
            </div>
            <div className="formInput">
                <label className="text-sm font-medium ">Email</label>
                <input
                    type="email"
                    defaultValue="Jillali@Onechanneladmin.Com"
                    className="mt-1 w-full font-normal focus:outline-none px-3 py-2 text-sm"
                />
            </div>
            <div className="formInput phoneInput flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number</label>
                <button onClick={addPhone} className="flex items-center text-indigo-600 text-sm">
                    <Plus className="w-4 h-4 mr-1" />
                </button>
            </div>
            <div className="formInput phoneInput">
                {phoneNumbers.map((phone, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                        <select className="border focus:outline-none rounded-lg p-2 text-sm">
                            <option value="US">🇺🇸 US</option>
                            <option value="IN">🇮🇳 IN</option>
                        </select>
                        <input
                            type="tel"
                            value={phone.number}
                            className="flex-1 focus:outline-none px-3 py-2 text-sm"
                            readOnly
                        />
                        <button
                            onClick={() => removePhone(index)}
                            className="text-red-500 border border-red-200 px-3 py-2 rounded-lg text-sm"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="formInput">
                <label className="text-sm font-medium text-gray-700">Contact Owner</label>
                <select className="mt-1 w-full focus:outline-none  p-2 text-sm">
                    <option>Suchithkumar@Onechanneladmin.Com</option>
                </select>
            </div>
            {/* <div className="formInput">
                <label className="text-sm font-medium text-gray-700">Company Type</label>
                <select className="mt-1 w-full focus:outline-none p-2 text-sm">
                    <option>Partner</option>
                </select>
            </div>
            <div className="formInput">
                <label className="text-sm font-medium text-gray-700">Industry</label>
                <select className="mt-1 w-full focus:outline-none p-2 text-sm">
                    <option>Accounting</option>
                </select>
            </div>
            <div className="formInput">
                <label className="text-sm font-medium text-gray-700">Website</label>
                <input
                    type="text"
                    defaultValue="WWW.TRUCKGEAR.COM"
                    className="mt-1 w-full focus:outline-none px-3 py-2 text-sm"
                />
            </div>
            <div className="formInput">
                <label className="text-sm font-medium text-gray-700">No. Of Employee</label>
                <input
                    type="number"
                    defaultValue={10}
                    className="mt-1 w-full focus:outline-none px-3 py-2 text-sm"
                />
            </div>
            <div className="businessAmountBox formInput">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">CREDIT LIMIT</span>
                    <button className="text-indigo-600">
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
                <div className="text-sm font-medium  amountTxt text-gray-800">$ 5000</div>
            </div>

            <div className="businessAmountBox formInput">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium	">AVAILABLE CREDIT</span>
                    <button className="text-indigo-600">
                        <RefreshCcw className="w-4 h-4" />
                    </button>
                </div>
                <div className="text-sm font-medium  amountTxt text-gray-800">$ 806.71</div>
            </div> */}
        </div>
    );
};

export default BusinessDetailsForm;
