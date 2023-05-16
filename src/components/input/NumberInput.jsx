const NumberInput = ({...props}) => {
    return ( 
        <div className="w-full">
            <label className="text-gray-400">Введите номер</label>
            <div className="
                w-full
                h-12
                border-gray-400
                text-gray-400
                border
                rounded-xl
                flex
                items-center
                gap-3
                pl-2
            ">
                <span>+7</span>
                <input {...props} type="number" required name="number" className="bg-transparent outline-none w-inp" />
            </div>
        </div>
        
     );
}
 
export default NumberInput;