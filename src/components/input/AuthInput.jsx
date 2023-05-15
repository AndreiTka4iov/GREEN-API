const AuthInput = ({name}) => {
    return ( 
        <div className="w-full relative">
            <input type="text" placeholder=" " id={name} name={name} className="
                peer
                w-full
                p-4
                pt-6 
                font-light 
                bg-white 
                border-2
                rounded-md
                outline-none
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                pl-4
                border-neutral-300
                focus:border-black
            "/>
            <label className="
                absolute 
                text-md
                duration-150 
                transform 
                -translate-y-3 
                top-5 
                z-10 
                pointer-events-none
                origin-[0] 
                left-4
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75
                peer-focus:-translate-y-4
                text-zinc-400
            ">{name}</label>
        </div>
     );
}
 
export default AuthInput;