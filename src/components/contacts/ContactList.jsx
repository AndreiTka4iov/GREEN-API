import ContactButton from "../buttons/ConactButton";

const ContactList = () => {
    return ( 
        <div className="w-full max-h-cont overflow-y-auto">
            <ContactButton id="1"/>
            <ContactButton id="2"/>
        </div>
     );
}
 
export default ContactList;