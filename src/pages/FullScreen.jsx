import { Toaster } from "react-hot-toast";
import ChatBlock from "../components/chat/ChatBlock";
import ContactBlock from "../components/contacts/ContactBlock";
import AddModal from "../components/modals/AddModal";

const FullScreen = () => {
    return ( 
        <div className="w-full min-h-screen max-h-screen bg-stone-900 overflow-hidden flex">
            <ContactBlock />
            <ChatBlock />
            <AddModal/>
            <Toaster />
        </div>
     );
}
 
export default FullScreen;