import AuthForm from "../components/auth/AuthForm";
import { Toaster } from 'react-hot-toast';

const AuthPage = () => {
    return ( 
        <div className="w-screen h-screen overflow-hidden flex bg-stone-900">
            <AuthForm/>
            <Toaster />
        </div>
     );
}
 
export default AuthPage;