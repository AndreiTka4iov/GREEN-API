import BodyChat from "./BodyChat";
import FooterChat from "./FooterChat";
import HeaderChat from "./HeaderChat";

const ChatBlock = () => {
    return ( 
        <div className=" w-screen h-screen sm:w-chat flex flex-col">
            <HeaderChat/>
            <BodyChat/>
            <FooterChat/>
        </div>
     );
}
 
export default ChatBlock;