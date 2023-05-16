import { Toaster } from "react-hot-toast";
import ChatBlock from "../components/chat/ChatBlock";
import ContactBlock from "../components/contacts/ContactBlock";
import AddModal from "../components/modals/AddModal";

const FullScreen = ({select}) => {
    return ( 
        <div 
        className= {select 
            ? "w-fit sm:w-full ml-[-100%] sm:ml-0 min-h-screen max-h-screen bg-stone-900 flex transition" 
            : "w-fit sm:w-full min-h-screen max-h-screen bg-stone-900 flex"}
        >
            <ContactBlock />
            <ChatBlock />
            <AddModal/>
            <Toaster />
        </div>
     );
}
 
export default FullScreen;