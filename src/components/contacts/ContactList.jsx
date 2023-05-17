import useContactList from "../../hooks/useContactList";
import ContactButton from "../buttons/ConactButton";
import { MdContacts } from 'react-icons/md'

const ContactList = () => {
    const contacts = useContactList()
    const contact = contacts.contacts

    return ( 
        <div className="w-full max-h-cont overflow-y-auto">
            {contact.length === 0 
            ?   <div className="
                    w-full
                    mt-4
                    flex
                    flex-col
                    justify-center
                    items-center
                    text-gray-400
                ">
                    <MdContacts className="text-6xl"/>
                    <span>Список пуст</span>
                </div>
            : contact.map( item => 
                 <ContactButton key={item} id={item}/>
            )}
        </div>
     );
}
 
export default ContactList;