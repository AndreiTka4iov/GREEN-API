import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux"
import GreenAPI from "../API/GreenAPI";
import { authTrue } from "../store/toolkitSlice";

export default function useLogin (initialValue) {
    const dispatch = useDispatch()

    const loginFunc = async(e) => {
        e.preventDefault();

        const toastId = toast.loading('Loading...');
        const IdInstance = e.target.IdInstance.value
        const ApiTokenInstance = e.target.ApiTokenInstance.value

        try {
            const response = await GreenAPI.check(IdInstance, ApiTokenInstance)
            
            if (response.data.stateInstance === "authorized") {
                dispatch(authTrue({IdInstance, ApiTokenInstance}))
            } else{
                toast.error('Error')
            }
        } catch (error) {
            toast.error('Error')
        } finally{
            toast.dismiss(toastId);
        }       
    }

    return{loginFunc}
};