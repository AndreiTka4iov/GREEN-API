import { useSelector } from "react-redux";
import Message from "./Message";
import { BsFillChatSquareTextFill } from 'react-icons/bs'

const BodyChat = () => {
    const history = useSelector(state => state.toolkit.chat)

    return (
        <div className="
            w-full
            min-h-body
            max-h-body
            overflow-hidden
            overflow-y-auto
            pl-4
            pr-6
            pb-4
            flex
            flex-col
            justify-end
            gap-3
            relative
        ">
            {history.length === 0 
            ?   <div className="
                    w-full
                    min-h-body
                    max-h-body
                    text-gray-400
                    flex
                    flex-col
                    justify-center
                    items-center
                ">
                    <BsFillChatSquareTextFill className="text-6xl"/>
                    <span>Здесь пока ничего нет</span>
                </div>
            : history.map((message) => 
                <Message key={message.idMessage} textMessage= {message.textMessage} type={message.type}/>
            )}

        </div>
     );
}
 
export default BodyChat;