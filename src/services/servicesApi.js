import { Api } from "./api"

export default class servicesApi { 

    static async create(data) {
        const response = await Api.post(`/person/create`, data)
        return response.data
    }
  
    static async getAll() {
        const response = await Api.get(`/person/list`)
        return response.data
    }

    static async showCode() {
        const response = await Api.get(`/person/source`)
        return response
    } 
    
}