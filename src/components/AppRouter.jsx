import {Navigate, Route, Routes} from "react-router-dom";
import FullScreen from "../pages/FullScreen";
import { useSelector } from "react-redux";
import AuthPage from "../pages/AuthPage";

export default function AppRouter() {
    const isAuth = useSelector(state => state.toolkit.auth)
  return (
      isAuth
      ?
      <Routes>
        <Route path={'/GREEN-API/'} element={<FullScreen/>}/>  
        <Route path={'/GREEN-API/chat/:id'} element={<FullScreen select={true}/>}/>  
        <Route path="/GREEN-API/login" element={<Navigate to="/GREEN-API/" replace />} />  
        <Route path="/GREEN-API/*" element={<Navigate to="/GREEN-API/" replace />} />        
      </Routes>
      :
      <Routes>
        <Route path={'/GREEN-API/login'} element={<AuthPage />}/>  
        <Route path="/GREEN-API/*" element={<Navigate to="/GREEN-API/login" replace />} />     
      </Routes>
  )
}