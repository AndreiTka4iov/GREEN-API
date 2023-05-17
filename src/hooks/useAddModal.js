import { useDispatch, useSelector } from "react-redux";
import { authFalse, closeModal, newContact, openModal } from "../store/toolkitSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";
import GreenAPI from "../API/GreenAPI";

export default function useAddModal (initialValue) {
    const [inp, setInp] = useState('')
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.toolkit.modal)
    const IdInstance = useSelector(state => state.toolkit.idInstance)
    const ApiTokenInstance = useSelector(state => state.toolkit.apiTokenInstance)

    const addContactFunc = async(e) => {
        e.preventDefault()
        const phone = inp
        const toastId = toast.loading('Проверяем номер')
        
        try {
            const response = await GreenAPI.check(IdInstance, ApiTokenInstance)
            if (response.data.stateInstance !== "authorized") {
                toast.dismiss(toastId)
                return dispatch(authFalse())
            }
        } catch (error) {
            toast.dismiss(toastId)
            return dispatch(authFalse())
        }

        try{
            const response = await GreenAPI.checkNum(IdInstance, ApiTokenInstance, phone)
            if (response.data.existsWhatsapp) {
                toast.success('Success')
                dispatch(newContact(phone))
                onCloseBtn()
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

    const onOpen  = () => {
        dispatch(openModal())
    }

    const onClose  = (e) => {
        if (e.target === e.currentTarget) dispatch(closeModal())
    }

    const onCloseBtn  = () => {
       dispatch(closeModal())
    }
    
    return{
        isOpen, 
        onOpen, 
        onClose, 
        onCloseBtn,
        inp,
        setInp,
        addContactFunc
    }
};