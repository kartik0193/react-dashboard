import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

const ContactActions = () => {
    const actions = [
        { icon: <Mail className="w-5 h-5" />, label: "Email" },
        { icon: <Phone className="w-5 h-5" />, label: "Call" },
        { icon: <MessageCircle className="w-5 h-5" />, label: "Message" },
        { icon: <Calendar className="w-5 h-5" />, label: "Calendar" },
    ];

    return (
        <div className="flex justify-between border_gray contactActions items-center  rounded-xl p-4 w-full ">
            {actions.map((action, index) => (
                <div key={index} className="flex flex-col items-center contactbox flex-1 text-center text-sm">
                    {action.icon}
                    <span className="contactTxt">{action.label}</span>
                    {index < actions.length - 1 && (
                        <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 h-6 border-r border-gray-200" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ContactActions;