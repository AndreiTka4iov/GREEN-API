import { AiOutlineSend } from 'react-icons/ai'
import useNewMessage from '../../hooks/useNewMessage';

const ChatInput = () => {
    const messageHook = useNewMessage()

    return ( 
        <form 
        onSubmit={(e) => messageHook.sendMessage(e)}
        className="w-5/6 h-16 flex items-center justify-between m-auto gap-3">
            <input 
            autocomplete="off"
            value={messageHook.isMessage}
            onChange={(e) => messageHook.setIsMessage(e.target.value)}
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