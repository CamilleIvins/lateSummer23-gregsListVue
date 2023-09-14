import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class HousesService {

    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('houses service GET', res.data)
        AppState.houses = res.data.map(house => new House(house))
    }

    async getHouseById(houseId) {
        AppState.activeHouse = null
        const res = await api.get(`api/houses/${houseId}`)
        logger.log('chosen house', res.data)
        AppState.activeHouse = new House(res.data)
    }

    async createHouse(houseData) {

        const res = await api.post(`api/houses/`, houseData)
        logger.log('new house', res.data)
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
        return newHouse
    }

    async deleteHouse(houseId) {
        // find house by ID
        const res = await api.delete(`api/houses/${houseId}`)
        logger.log('remove chosen house', res.data)
        // stop activeHouse <-- set to null
        AppState.activeouse = null
        // remove house from whole index
        //     AppState.houses.splice(newHouse)
        //     return newHouse
        // }

    }
}
export const housesService = new HousesService()