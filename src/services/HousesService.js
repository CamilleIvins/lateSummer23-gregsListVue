import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class HousesService {

    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('houses service GET', res.data)
        AppState.houses = res.data.map(house => new HousesService(house))
    }

}

export const housesService = new HousesService()