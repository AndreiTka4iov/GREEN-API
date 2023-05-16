import axios from "axios"

export default class GreenAPI{
    static async check(IdInstance = null, ApiTokenInstance = null) {
        const response = await axios.get(`https://api.green-api.com/waInstance${IdInstance}/getStateInstance/${ApiTokenInstance}`)
        return response
    }

    static async getContact(IdInstance = null, ApiTokenInstance = null) {
        const response = await axios.get(`https://api.green-api.com/waInstance${IdInstance}/GetContacts/${ApiTokenInstance}`)
        return response
    }

    static async getMessage(IdInstance = null, ApiTokenInstance = null) {
        const response = await axios.get(`https://api.green-api.com/waInstance${IdInstance}/ReceiveNotification/${ApiTokenInstance}`)
        return response
    }

    static async checkNum(IdInstance = null, ApiTokenInstance = null, phone = null) {
        const response = await axios.post(`https://api.green-api.com/waInstance${IdInstance}/CheckWhatsapp/${ApiTokenInstance}`, {
            "phoneNumber": `7${phone}`
        })
        return response
    }

    static async sendMessage(IdInstance = null, ApiTokenInstance = null, id = null, message = null) {
        const response = await axios.post(`https://api.green-api.com/waInstance${IdInstance}/SendMessage/${ApiTokenInstance}`, {
            "chatId": `${id}@c.us`,
            "message": `${message}`
        })
        return response
    }

    static async delMessage(IdInstance = null, ApiTokenInstance = null, receiptId = null) {
        const response = await axios.delete(`https://api.green-api.com/waInstance${IdInstance}/DeleteNotification/${ApiTokenInstance}/${receiptId}`)
        return response
    }
}