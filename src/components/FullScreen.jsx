import ChatBlock from "./chat/ChatBlock";
import ContactBlock from "./contacts/ContactBlock";

const FullScreen = () => {
    return ( 
        <div className="w-full min-h-screen max-h-screen bg-stone-900 overflow-hidden flex">
            <ContactBlock />
            <ChatBlock />
        </div>
     );
}
 
export default FullScreen;