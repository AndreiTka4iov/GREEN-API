import { useState, useEffect } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'

const MyInput = ({placeholder}) => {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState('')

    useEffect(() => {
        if (value.length > 0) setActive(true)
        if (value.length === 0) setActive(false)
    }, [value])

    const inpValue = (e) => {
        setValue(e.target.value)
    }

    return ( 
        <div className="w-full h-9 flex gap-2 rounded-xl bg-slate-800">
            {active 
            ? <button 
                onClick={() => setValue('')}
                className="
                    flex 
                    justify-center 
                    items-center 
                    h-9 
                    w-9 
                    text-teal-600
                    hover:text-gray-200  
                    transition 
                    text-2xl
                "><BiArrowBack/></button>
            : <div className="
                flex 
                justify-center 
                items-center 
                h-9 
                w-9 
                text-gray-400 
                text-2xl"><AiOutlineSearch/></div>
            }
            <input 
            type="text" 
            value={value}
            onInput={(e) => inpValue(e)}
            placeholder={placeholder}
            className="w-inp h-9 bg-transparent outline-none text-gray-200"/>
        </div>
     );
}
 
export default MyInput;