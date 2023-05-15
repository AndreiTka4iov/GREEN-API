import MyButton from "../buttons/MyButton";
import AuthInput from "../input/AuthInput";

const AuthForm = () => {
    return ( 
        <form 
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
            <AuthInput name="IdInstance" />
            <AuthInput name="ApiTokenInstance" />
            <MyButton text="Войти" type="submit"/>
            <span className="text-center">Нет аккаунта? <a href="https://green-api.com" className="underline">Зарегистрируйтесь</a></span>
        </form>
     );
}
 
export default AuthForm;