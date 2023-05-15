import { useSelector } from "react-redux";
import ContactButton from "../buttons/ConactButton";
import { useEffect, useState } from "react";
import GreenAPI from "../../API/GreenAPI";

const ContactList = () => {
    const IdInstance = useSelector(state => state.toolkit.idInstance)
    const ApiTokenInstance = useSelector(state => state.toolkit.apiTokenInstance)
    const [contact, setContact] = useState([])

    useEffect(() => {
        const getContact = async() => {
            const response = await GreenAPI.getContact(IdInstance, ApiTokenInstance)
            setContact(response.data)
        }
        getContact()
    }, [])

    return ( 
        <div className="w-full max-h-cont overflow-y-auto">
            {contact.map( item => 
                 <ContactButton key={item.id} id={item.id} name={item.name} type={item.type}/>
            )}
        </div>
     );
}
 
export default ContactList;