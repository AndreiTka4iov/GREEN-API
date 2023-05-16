import { BsPlusLg } from 'react-icons/bs'

const AddContact = ({...props}) => {
    return ( 
        <button 
        {...props}
        type='submit'
        className="
            w-full 
            h-16 
            bg-slate-800 
            mt-auto
            flex 
            justify-center 
            items-center
            gap-3
            text-gray-400
            hover:text-teal-600
            transition
        ">
            <BsPlusLg/>
            Добавить контакт
        </button>
     );
}
 
export default AddContact;