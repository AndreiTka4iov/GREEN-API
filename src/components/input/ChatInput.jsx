import { AiOutlineSend } from 'react-icons/ai'

const ChatInput = () => {
    return ( 
        <form className="w-5/6 h-16 flex items-center justify-between m-auto gap-3">
            <input 
            type="text" 
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
            onClick={(e) => {e.preventDefault()}}
            className="
                w-8 
                h-8 
                flex 
                items-center 
                justify-center 
                text-4xl 
                text-teal-600 
                hover:text-gray-200 
                transition"><AiOutlineSend/></button>
        </form>
     );
}
 
export default ChatInput;