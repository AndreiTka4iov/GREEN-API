import useContactList from "../../hooks/useContactList";
import ContactButton from "../buttons/ConactButton";

const ContactList = () => {
    const contacts = useContactList()
    const contact = contacts.contacts

    return ( 
        <div className="w-full min-h max-h-cont overflow-y-auto">
            {contact.map( item => 
                 <ContactButton key={item.index + 1} id={item}/>
            )}
        </div>
     );
}
 
export default ContactList;