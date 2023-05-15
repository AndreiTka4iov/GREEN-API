import { useDispatch } from "react-redux";
import GreenAPI from "../../API/GreenAPI";
import MyButton from "../buttons/MyButton";
import AuthInput from "../input/AuthInput";
import toast from "react-hot-toast";
import { authTrue } from "../../store/toolkitSlice";

const AuthForm = () => {
    const dispatch = useDispatch()

    const login = async(e) => {
        e.preventDefault();

        const toastId = toast.loading('Loading...');
        const IdInstance = e.target.IdInstance.value
        const ApiTokenInstance = e.target.ApiTokenInstance.value

        try {
            const response = await GreenAPI.check(IdInstance, ApiTokenInstance)
            
            if (response.data.stateInstance === "authorized") {
                toast.success('Success')
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

    return ( 
        <form 
        onSubmit={login}
        className="
            flex
            flex-col
            gap-4
            w-11/12
            sm:w-[640px]
            m-auto
            p-4
            rounded-xl
            text-gray-400
        ">
            <h1 className="text-center text-lg">Login</h1>
            <AuthInput name="IdInstance" type="text"/>
            <AuthInput name="ApiTokenInstance" type="password"/>
            <MyButton text="Войти" type="submit"/>
            <span className="text-center">Нет аккаунта? <a href="https://green-api.com" className="underline">Зарегистрируйтесь</a></span>
        </form>
     );
}
 
export default AuthForm;