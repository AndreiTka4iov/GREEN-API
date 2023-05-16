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

    static async checkNum(IdInstance = null, ApiTokenInstance = null, phone = null) {
        const response = await axios.post(`https://api.green-api.com/waInstance${IdInstance}/CheckWhatsapp/${ApiTokenInstance}`, {
            "phoneNumber": `7${phone}`
        })
        return response
    }
}