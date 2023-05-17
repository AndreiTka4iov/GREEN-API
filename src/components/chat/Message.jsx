const Message = ({textMessage, type}) => {
    return ( 
        <div 
        className={type === null 
            ? "bg-teal-600 p-3 text-gray-200 ml-auto rounded-xl w-fit max-w-[80%]"
            : "bg-slate-900 p-3 text-gray-200 rounded-xl w-fit max-w-[80%]"
        }>
            {textMessage}
        </div>
     );
}
 
export default Message;