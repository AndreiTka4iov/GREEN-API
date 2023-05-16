import ContactButton from "../buttons/ConactButton";
import { useState } from "react";

const ContactList = () => {
    const [contact, setContact] = useState([])

    return ( 
        <div className="w-full min-h max-h-cont overflow-y-auto">
            {contact.map( item => 
                 <ContactButton key={item.id} id={item.id} name={item.name} type={item.type}/>
            )}
        </div>
     );
}
 
export default ContactList;