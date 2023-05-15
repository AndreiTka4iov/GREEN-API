import { GiMatterStates } from 'react-icons/gi'
import { MdMessage } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'

const HeaderContact = () => {
    return ( 
        <header className="w-full h-16 bg-slate-800 flex justify-between items-center">
            <div className="flex justify-center items-center w-16 h-16">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                    <img src="https://sun1-15.userapi.com/impg/EVQCpfkV0EqylbOlR5VSI-Nez-HcAlr7VVfpQA/6XLqsU-9Jz4.jpg?size=1620x2160&quality=95&sign=54b12ae901d19977ae310ed724eb2354&type=album" alt="avatar" />
                </div>
            </div>
            <div className="flex w-fit h-16 text-gray-400 text-2xl font-bold">
                <button className='w-16 h-16 flex items-center justify-center hover:text-gray-200 transition'>
                    <GiMatterStates />
                </button>
                <button className='w-16 h-16 flex items-center justify-center hover:text-gray-200 transition'>
                    <MdMessage />
                </button>
                <button className='w-16 h-16 flex items-center justify-center hover:text-gray-200 transition'>    
                    <FiMoreVertical />
                </button>
            </div>
        </header>
     );
}
 
export default HeaderContact;