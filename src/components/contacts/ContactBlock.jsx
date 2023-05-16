import useAddModal from "../../hooks/useAddModal";
import AddContact from "../buttons/AddContact";
import ContactList from "./ContactList";
import HeaderContact from "./HeaderContact";
import SearchContact from "./SearchContact";

const ContactBlock = () => {
    const modal = useAddModal()

    return ( 
        <div 
        className="
            flex
            flex-col
            w-screen
            h-screen
            border-gray-700
            sm:w-80
            sm:border-r-[1px]
        ">
            <HeaderContact/>
            <SearchContact/>
            <ContactList/>
            <AddContact onClick={() => modal.onOpen()}/>
        </div>
     );
}
 
export default ContactBlock;