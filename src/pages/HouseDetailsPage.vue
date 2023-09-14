<template>
    <div class="container">

        <section v-if="activeHouse" class="row justify-content-center">
            <div class="col-12">
                <img class="img-fluid elevation-1" :src="activeHouse.imgUrl" alt="">
                <p> Bd:{{ activeHouse.bedrooms }} | Ba:{{ activeHouse.bathrooms }} | Lvls:{{ activeHouse.levels }}</p>
            </div>
            <div class="col-12">
                {{ activeHouse.description }}
                <p> ${{ activeHouse.price }}</p>
            </div>
            <div class="col-6 text-end">
                <img class="profile-pic" :src="activeHouse.creatorId.picture" alt="">
                <p> {{ activeHouse.creatorId.name }}</p>
            </div>
            <button v-if="activeHouse.creatorId == account.id" @click="deleteHouse" class="btn btn-danger">Delete Listing <i
                    class="mdi mdi-delete-forever"></i></button>
        </section>
        <section v-else>
            <i class="mdi mdi-loading mdi-spin text-primary fs-2">loading</i>
        </section>
    </div>
</template>

<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { useRoute, useRouter } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { router } from '../router.js';

export default {
    setup() {
        // NOTE pages should ONLY handle getting data they require to show/use
        const route = useRoute()
        onMounted(() => {
            getHouseById()

        })
        async function getHouseById() {
            try {
                // create alias for house ID
                // get ID from SERVICE
                const houseId = route.params.houseId
                await housesService.getHouseById(houseId)
                logger.log("this house", houseId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            activeHouse: computed(() => AppState.activeHouse),
            account: computed(() => AppState.account),

            async deleteHouse() {
                try {
                    if (await Pop.confirm('Do you wish to remove this listing?')) {
                        const houseId = AppState.activeHouse.id
                        await housesService.deleteHouse(houseId)
                        router.push({ name: 'Houses' })
                        Pop.success('House de-listed')
                    }
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
}
</script>

<style class="scss" scoped>
.profile-pic {
    height: 100px;
    width: 100px;
    object-fit: cover;
    object-position: center;
    border-radius: 25%;
}
</style>