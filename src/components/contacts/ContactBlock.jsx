import ContactList from "./ContactList";
import HeaderContact from "./HeaderContact";
import SearchContact from "./SearchContact";

const ContactBlock = () => {
    return ( 
        <div 
        className="
            w-full
            h-screen
            border-gray-700
            sm:w-80
            sm:border-r-[1px]
        ">
            <HeaderContact/>
            <SearchContact/>
            <ContactList/>
        </div>
     );
}
 
export default ContactBlock;