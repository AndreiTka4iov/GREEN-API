import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../store/toolkitSlice";

export default function useAddModal (initialValue) {
    const isOpen = useSelector(state => state.toolkit.modal)
    const dispatch = useDispatch()

    const onOpen  = () => {
        dispatch(openModal())
    }

    const onClose  = () => {
        dispatch(closeModal())
    }
    
    return{isOpen, onOpen, onClose}
};