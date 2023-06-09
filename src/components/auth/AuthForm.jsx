import MyButton from "../buttons/MyButton";
import AuthInput from "../input/AuthInput";
import useLogin from "../../hooks/useLogin";

const AuthForm = () => {
    const login = useLogin()

    return ( 
        <form 
        onSubmit={(e) => login.loginFunc(e)}
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