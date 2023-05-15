const MyButton = ({text, type}) => {
    return ( 
        <button 
            type={type}
            className="
            rounded-lg
            hover:opacity-80
            transition
            w-full
            bg-teal-600
            text-white
            py-3
            text-md
            font-semibold">{text}</button>
     );
}
 
export default MyButton;