import { Link } from "react-router-dom";

const ContactButton = ({id}) => {
    return ( 
       <Link 
        to={`/chat/7${id}`}
        className="flex w-full h-16 hover:bg-stone-800 transition">
        <div className="w-16 h-16 flex justify-center items-center">
            <div className="w-9 h-9 rounded-full overflow-hidden">
                <img src="https://sun9-12.userapi.com/impg/3xrxEPzPw7GwyByGa0n4kIPCWdbIsCcCGcRvNQ/eafYYSMQbKM.jpg?size=1623x2160&quality=96&sign=9ff78ab6a0dc033305cacb2144585383&type=album" alt="user" />
            </div>
        </div>
        <div className="w-item h-16 border-b border-gray-600 flex justify-between">
            <div className="w-footer">
                <h3 className="text-gray-200 line-clamp-1 font-semibold">+7{id}</h3>
                <span className="line-clamp-1 text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nemo fugiat officiis repellat esse? Unde, nulla. Commodi velit soluta necessitatibus nesciunt, molestiae, cum reprehenderit iste ducimus error aperiam quaerat laboriosam!</span>
            </div>
            <span className="text-gray-400">18:14</span>
        </div>
       </Link>
    );
}
 
export default ContactButton;