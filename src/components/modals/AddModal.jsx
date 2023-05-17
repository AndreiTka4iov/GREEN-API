import { AiOutlineClose } from 'react-icons/ai'
import NumberInput from '../input/NumberInput';
import AddContact from '../buttons/AddContact';
import useAddModal from '../../hooks/useAddModal';

const AddModal = () => {
    const modal = useAddModal(true)
    
    if (!modal.isOpen) return

    return ( 
        <div 
        onClick={(e) => modal.onClose(e)}
        className="
            fixed
            w-screen
            h-screen
            z-20
            bg-neutral-800/70
            flex
            justify-center
            items-center
            opacity-0
            animate-opacity
        ">
            <form 
            onSubmit={(e) => modal.addContactFunc(e)}
            className="
                w-5/6
                h-fit
                bg-stone-900
                rounded-md
                flex
                flex-col
                gap-5   
                overflow-hidden
                sm:w-[530px]
            ">
                <div className=" 
                    flex 
                    items-center 
                    p-6 
                    rounded-t 
                    justify-center 
                    relative 
                    border-stone-700
                    text-gray-400
                    border-b-[1px] 
                    ">
                    <div 
                    onClick={modal.onCloseBtn}
                    className=" 
                        p-1 
                        border-0 
                        hover:opacity-70 
                        transition 
                        absolute 
                        left-9 
                        cursor-pointer"><AiOutlineClose/></div>
                    <span className="text-lg">Добавить контакт</span>
                </div>
                <div className='w-full pl-4 pr-4'>
                    <NumberInput value={modal.inp} onChange={(e) => modal.setInp(e.target.value)}/>
                </div>
                <AddContact/>
            </form>
        </div>
     );
}
 
export default AddModal;