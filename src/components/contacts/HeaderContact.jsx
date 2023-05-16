import { GiMatterStates } from 'react-icons/gi'
import { MdMessage } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'

const HeaderContact = () => {   
    return ( 
        <header className="w-full h-16 bg-slate-800 flex justify-between items-center">
            <div className="flex justify-center items-center w-16 h-16">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                    <img src="https://yt3.ggpht.com/ytc/AMLnZu-sXsLVwbh-yeWXiRPkhEtiX6bVF7lzdWYDexMUyA=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
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