import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const HeaderChat = () => {
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
                    <img src="https://sun1-15.userapi.com/impg/EVQCpfkV0EqylbOlR5VSI-Nez-HcAlr7VVfpQA/6XLqsU-9Jz4.jpg?size=1620x2160&quality=95&sign=54b12ae901d19977ae310ed724eb2354&type=album" alt="avatar" />
                </div>
            </div>
            <div className="">
                <h3 className="text-gray-200 font-semibold">Андрей Ткачев</h3>
            </div>
        </div>
     );
}
 
export default HeaderChat;