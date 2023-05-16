import { AiOutlineClose } from 'react-icons/ai'
import NumberInput from '../input/NumberInput';
import AddContact from '../buttons/AddContact';
import { useSelector } from 'react-redux';
import useAddModal from '../../hooks/useAddModal';
import GreenAPI from '../../API/GreenAPI';
import { toast } from 'react-hot-toast';

const AddModal = () => {
    const modal = useAddModal(true)
    const IdInstance = useSelector(state => state.toolkit.idInstance)
    const ApiTokenInstance = useSelector(state => state.toolkit.apiTokenInstance)

    const addContactFunc = async(e) => {
        e.preventDefault()
        
        const phone = e.target.number.value
        const toastId = toast.loading('Проверяем номер')

        try{
            const response = await GreenAPI.checkNum(IdInstance, ApiTokenInstance, phone)
            if (response.data.existsWhatsapp) {
                toast.success('Success')
                console.log(true);
            }
        } catch (error) {
            console.log(error);
        } finally {
            toast.dismiss(toastId)
        }
        

        
    }

    const blureDiv = (e) => {        
        if (e.target !== e.currentTarget) return
        modal.onClose()
    }
    
    if (!modal.isOpen) return

    return ( 
        <div 
        onClick={(e) => blureDiv(e)}
        className="
            fixed
            top-0
            left-0
            right-0
            bottom-0
            z-20
            bg-neutral-800/70
            flex
            justify-center
            items-center
            opacity-0
            animate-opacity
        ">
            <form 
            onSubmit={(e) => addContactFunc(e)}
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
                    onClick={modal.onClose}
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
                    <NumberInput/>
                </div>
                <AddContact/>
            </form>
        </div>
     );
}
 
export default AddModal;