import { Link } from "react-router-dom";

const ContactButton = ({id, name, type}) => {
    return ( 
       <Link 
        to={`/chat?id=${id}`}
        className="flex w-full h-16 hover:bg-stone-800 transition">
        <div className="w-16 h-16 flex justify-center items-center">
            <div className="w-9 h-9 rounded-full overflow-hidden">
                <img src="https://yt3.ggpht.com/ytc/AMLnZu-sXsLVwbh-yeWXiRPkhEtiX6bVF7lzdWYDexMUyA=s900-c-k-c0x00ffffff-no-rj" alt="user" />
            </div>
        </div>
        <div className="w-item h-16 border-b border-gray-600 flex justify-between">
            <div>
                <h3 className="text-gray-200 line-clamp-1 font-semibold">{name}</h3>
                <span className="line-clamp-1 text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nemo fugiat officiis repellat esse? Unde, nulla. Commodi velit soluta necessitatibus nesciunt, molestiae, cum reprehenderit iste ducimus error aperiam quaerat laboriosam!</span>
            </div>
            <span className="text-gray-400">18:14</span>
        </div>
       </Link>
    );
}
 
export default ContactButton;