import { useSelector } from "react-redux"

export default function useContactList (initialValue) {
    const contacts = useSelector(state => state.toolkit.contact)
    
    return{contacts}
};