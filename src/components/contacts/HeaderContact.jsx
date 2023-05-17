import { GiMatterStates } from 'react-icons/gi'
import { MdMessage } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'

const HeaderContact = () => {   
    return ( 
        <header className="w-full h-16 bg-slate-800 flex justify-between items- overflow-hidden">
            <div className="flex justify-center items-center w-16 h-16">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                    <img src="https://sun9-12.userapi.com/impg/3xrxEPzPw7GwyByGa0n4kIPCWdbIsCcCGcRvNQ/eafYYSMQbKM.jpg?size=1623x2160&quality=96&sign=9ff78ab6a0dc033305cacb2144585383&type=album" alt="avatar" />
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