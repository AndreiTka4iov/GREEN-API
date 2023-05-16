import { AiOutlineClose } from 'react-icons/ai'
import NumberInput from '../input/NumberInput';
import AddContact from '../buttons/AddContact';
import { useDispatch, useSelector } from 'react-redux';
import useAddModal from '../../hooks/useAddModal';
import GreenAPI from '../../API/GreenAPI';
import { toast } from 'react-hot-toast';
import { newContact } from '../../store/toolkitSlice';
import { useState } from 'react';

const AddModal = () => {
    const modal = useAddModal(true)
    const [inp, setInp] = useState('')
    const dispatch = useDispatch()
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
                dispatch(newContact(phone))
                modal.onClose()
            } else{
                toast.error('Номер не найден')
            }
        } catch (error) {
            toast.error('Номер не найден')
        } finally {
            toast.dismiss(toastId)
            setInp('')
        }
    }

    const blureDiv = (e) => {        
        if (e.target === e.currentTarget) modal.onClose()
    }
    
    if (!modal.isOpen) return

    return ( 
        <div 
        onClick={(e) => blureDiv(e)}
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
                    <NumberInput value={inp} onChange={(e) => setInp(e.target.value)}/>
                </div>
                <AddContact/>
            </form>
        </div>
     );
}
 
export default AddModal;