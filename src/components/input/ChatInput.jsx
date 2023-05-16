import { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import GreenAPI from '../../API/GreenAPI'
import { toast } from 'react-hot-toast'

const ChatInput = () => {
    const [message, setMessage] = useState('')
    const IdInstance = useSelector(state => state.toolkit.idInstance)
    const ApiTokenInstance = useSelector(state => state.toolkit.apiTokenInstance)
    const { id } = useParams()

    const sendMess = async(e) => {
        e.preventDefault()
        if (e.target.message.value.length === 0) return
        try {
            await GreenAPI.sendMessage(IdInstance, ApiTokenInstance, id, message) 
            setMessage('')
        } catch (error) {
            toast.error(error.message); 
        }
       
    }

    return ( 
        <form 
        onSubmit={(e) => sendMess(e)}
        className="w-5/6 h-16 flex items-center justify-between m-auto gap-3">
            <input 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type='text'
            name='message'
            placeholder='Введите сообщение'
            className="
                w-footer 
                h-10 
                bg-slate-700 
                rounded-xl 
                outline-none 
                pl-3 
                text-gray-200"/>
            <button 
            type='submit'
            className="
                w-8 
                h-8 
                flex 
                items-center 
                justify-center 
                text-2xl 
                text-teal-600 
                hover:text-gray-200 
                transition"><AiOutlineSend/></button>
        </form>
     );
}
 
export default ChatInput;