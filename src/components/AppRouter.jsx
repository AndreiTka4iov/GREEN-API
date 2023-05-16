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
        <Route path={'/'} element={<FullScreen/>}/>  
        <Route path={'/chat*'} element={<FullScreen select={true}/>}/>  
        <Route path="/login" element={<Navigate to="/" replace />} />  
        <Route path="/*" element={<Navigate to="/error" replace />} />        
      </Routes>
      :
      <Routes>
        <Route path={'/login'} element={<AuthPage />}/>  
        <Route path="/*" element={<Navigate to="/login" replace />} />     
      </Routes>
  )
}