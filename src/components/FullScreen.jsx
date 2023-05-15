import ContactBlock from "./contacts/ContactBlock";

const FullScreen = () => {
    return ( 
        <div className="w-full min-h-screen max-h-screen bg-stone-900 overflow-hidden">
            <ContactBlock />
        </div>
     );
}
 
export default FullScreen;