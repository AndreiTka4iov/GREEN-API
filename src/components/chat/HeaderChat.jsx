import { BiArrowBack } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom';

const HeaderChat = () => {
    const { id } = useParams()
    return ( 
        <div className="w-full h-16 bg-slate-800 flex items-center">
            <Link to={'/'} className="
                flex 
                justify-center 
                items-center 
                w-16 
                h-16 
                hover:bg-slate-700 
                text-teal-600 
                text-3xl 
                transition">
                <BiArrowBack/>
            </Link>
            <div className="flex justify-center items-center w-16 h-16">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                    <img src="https://sun9-12.userapi.com/impg/3xrxEPzPw7GwyByGa0n4kIPCWdbIsCcCGcRvNQ/eafYYSMQbKM.jpg?size=1623x2160&quality=96&sign=9ff78ab6a0dc033305cacb2144585383&type=album" alt="avatar" />
                </div>
            </div>
            <div className="">
                <h3 className="text-gray-200 font-semibold">+{id}</h3>
            </div>
        </div>
     );
}
 
export default HeaderChat;