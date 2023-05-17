import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import GreenAPI from "../API/GreenAPI"
import { useParams } from "react-router-dom"
import { toast } from "react-hot-toast"
import { authFalse, setHistory } from "../store/toolkitSlice"

export default function useNewMessage (initialValue) {
    const { id } = useParams() 
    const chatId = `${id}@c.us`   
    const dispatch = useDispatch()
    const IdInstance = useSelector(state => state.toolkit.idInstance)
    const ApiTokenInstance = useSelector(state => state.toolkit.apiTokenInstance) 
    const [isMessage, setIsMessage] = useState('')
    
    async function getNewMessage() {
        try {
            const response = await GreenAPI.check(IdInstance, ApiTokenInstance)
            if (response.data.stateInstance !== "authorized") {
                return dispatch(authFalse())
            }
        } catch (error) {
            return dispatch(authFalse())
        }

        try {
            const response = await GreenAPI.getMessage(IdInstance, ApiTokenInstance)
            
            if (response.data === null) return
            
            if (response.data.body.senderData.chatId === chatId){
                const idMessage = response.data.body.idMessage
                const res = await GreenAPI.getTextMessage(IdInstance, ApiTokenInstance, chatId, idMessage)
                const message = {idMessage: res.data.idMessage, textMessage: res.data.textMessage, type: res.data.type}
                dispatch(setHistory(message))
            }

            const receiptId = response.data.receiptId
            await GreenAPI.delMessage(IdInstance, ApiTokenInstance, receiptId)
        } catch (error) {
            console.log(error);
        }
        
    }

    async function sendMessage(e) {
        e.preventDefault()
        if (e.target.message.value.length === 0) return

        try {
            const response = await GreenAPI.check(IdInstance, ApiTokenInstance)
            if (response.data.stateInstance !== "authorized") {
                return dispatch(authFalse())
            }
        } catch (error) {
            return dispatch(authFalse())
        }

        try {
            const response = await GreenAPI.sendMessage(IdInstance, ApiTokenInstance, id, isMessage) 
            const message = {idMessage: response.data.idMessage, textMessage: isMessage, type: null}
            dispatch(setHistory(message))
        } catch (error) {
            toast.error(error.message); 
        } finally{
            setIsMessage('')
        }
    }
    
    return{
        id,
        isMessage, 
        setIsMessage, 
        getNewMessage, 
        sendMessage
    }
};