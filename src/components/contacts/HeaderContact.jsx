import { GiMatterStates } from 'react-icons/gi'
import { MdMessage } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import GreenAPI from '../../API/GreenAPI'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'

const HeaderContact = () => {
    const IdInstance = useSelector(state => state.toolkit.idInstance)
    const IdUser = `${IdInstance}@c.us`
    const ApiTokenInstance = useSelector(state => state.toolkit.apiTokenInstance)
    const [image, setImage] = useState('https://yt3.ggpht.com/ytc/AMLnZu-sXsLVwbh-yeWXiRPkhEtiX6bVF7lzdWYDexMUyA=s900-c-k-c0x00ffffff-no-rj')

    useEffect(() => {
        const getImage = async() => {
            try {
                const response = await GreenAPI.getImg(IdInstance, ApiTokenInstance, IdUser)
                if (response.data.exexistsWhatsapp) setImage(response.data.urlAvatar)
            } catch {
                toast.error('Не удалось загрузить фотографию')
            } 
        }

        getImage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])    
    
    return ( 
        <header className="w-full h-16 bg-slate-800 flex justify-between items-center">
            <div className="flex justify-center items-center w-16 h-16">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                    <img src={image} alt="avatar" />
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