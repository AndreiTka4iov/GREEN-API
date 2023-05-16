import { useSelector } from "react-redux";
import GreenAPI from "../../API/GreenAPI";

const BodyChat = () => {
    const IdInstance = useSelector(state => state.toolkit.idInstance)
    const ApiTokenInstance = useSelector(state => state.toolkit.apiTokenInstance) 
    
    async function test() {
        try {
            const response = await GreenAPI.getMessage(IdInstance, ApiTokenInstance)
            console.log(response)
            const receiptId = response.data.receiptId

            const del = await GreenAPI.delMessage(IdInstance, ApiTokenInstance, receiptId)
            console.log(del)
        } catch (error) {
            console.log(error);
        }
        
    }

    test()

    return (
        <div className="
            max-h-body
            w-full
            overflow-y-auto
            pl-4
            pr-6
        ">

        </div>
     );
}
 
export default BodyChat;